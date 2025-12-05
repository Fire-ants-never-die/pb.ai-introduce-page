import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import screenMvpVideo from '@/assets/screen_mvp.mp4';
import { Button } from '@/components/ui/button';
import EarlyAccessModal from './EarlyAccessModal';

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <>
      <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222,47%,6%)] via-background to-background" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(217, 91%, 60%) 0%, transparent 60%)'
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              기관급 투자 분석,
              <br />
              <span className="text-primary">이제 당신의 책상 위에서.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              검증된 가치평가 모델과 생성형 AI의 만남.
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
              >
                지금 바로 시작하기
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

      {/* Floating Browser Window */}
      <motion.div
        style={{ y, rotateX, scale }}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-5xl mx-auto perspective-1000"
      >
        <div className="relative animate-float">
          {/* Browser window frame */}
          <div className="glass-card floating-shadow overflow-hidden">
            {/* Browser header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white/5 rounded-lg px-4 py-1.5 text-xs text-muted-foreground">
                  app.pb.ai
                </div>
              </div>
              <div className="w-16" />
            </div>

            {/* Video */}
            <div className="relative aspect-[16/10] bg-secondary">
              <video
                src={screenMvpVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>

          {/* Glow effect */}
          <div
            className="absolute -inset-4 -z-10 blur-3xl opacity-30"
            style={{
              background: 'radial-gradient(ellipse at center, hsl(217, 91%, 60%) 0%, transparent 70%)'
            }}
          />
        </div>
      </motion.div>
      </section>

      <EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HeroSection;
