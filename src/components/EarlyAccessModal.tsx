import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EarlyAccessModal = ({ isOpen, onClose }: EarlyAccessModalProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "유효하지 않은 이메일",
        description: "올바른 이메일 주소를 입력해주세요.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // 실무 방법 1: Supabase에 저장
      const { error } = await supabase
        .from('early_access_emails')
        .insert({ email });

      if (error) {
        // 테이블이 없거나 에러 발생 시
        console.error('Supabase error:', error);

        // 개발 중에는 로컬 스토리지에 임시 저장
        const existingEmails = JSON.parse(localStorage.getItem('early_access_emails') || '[]');
        existingEmails.push({ email, timestamp: new Date().toISOString() });
        localStorage.setItem('early_access_emails', JSON.stringify(existingEmails));

        toast({
          title: "등록 완료!",
          description: "사전 신청이 완료되었습니다. (개발 모드: 로컬 저장)",
        });
      } else {
        toast({
          title: "등록 완료!",
          description: "사전 신청이 완료되었습니다. 곧 연락드리겠습니다.",
        });
      }

      setEmail('');
      onClose();
    } catch (error) {
      console.error('Error submitting email:', error);
      toast({
        title: "오류 발생",
        description: "신청 중 문제가 발생했습니다. 다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop - 화면 전체를 덮는 배경 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal - 화면 정중앙에 배치 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md"
          >
            <div className="glass-card p-8 relative">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">출시 알림 받기</h2>
                <p className="text-muted-foreground">
                  PB.ai의 첫 번째 사용자가 되어보세요.
                  <br />
                  출시 소식과 특별 혜택을 가장 먼저 받아보실 수 있습니다.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="이메일 주소를 입력하세요"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-secondary/50 border-white/10 focus:border-primary h-12"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  {isSubmitting ? '처리 중...' : '신청하기'}
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                신청 시 개인정보 처리방침에 동의하는 것으로 간주됩니다.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EarlyAccessModal;
