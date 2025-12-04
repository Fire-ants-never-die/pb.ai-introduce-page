import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<'typing' | 'pause' | 'answer' | 'exit'>('typing');
  const [displayedText, setDisplayedText] = useState('');
  
  const question = "복잡한 재무제표, 누가 대신 쉽고 완벽하게 분석해 줄 수 없을까?";
  
  useEffect(() => {
    if (phase === 'typing') {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= question.length) {
          setDisplayedText(question.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setPhase('pause');
        }
      }, 50);
      return () => clearInterval(interval);
    }
    
    if (phase === 'pause') {
      const timer = setTimeout(() => setPhase('answer'), 1000);
      return () => clearTimeout(timer);
    }
    
    if (phase === 'answer') {
      const timer = setTimeout(() => setPhase('exit'), 2500);
      return () => clearTimeout(timer);
    }
    
    if (phase === 'exit') {
      const timer = setTimeout(onComplete, 800);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'hsl(222, 47%, 6%)' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
              style={{
                background: 'radial-gradient(circle, hsl(217, 91%, 60%) 0%, transparent 70%)'
              }}
            />
          </div>
          
          <div className="relative w-full max-w-3xl px-6">
            <AnimatePresence mode="wait">
              {(phase === 'typing' || phase === 'pause') && (
                <motion.div
                  key="input"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* ChatGPT-style input bar */}
                  <div className="glass-effect rounded-2xl p-6 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary text-sm">?</span>
                      </div>
                      <div className="flex-1 min-h-[60px]">
                        <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                          {displayedText}
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="inline-block w-0.5 h-5 bg-primary ml-1 align-middle"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {phase === 'answer' && (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.5 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center"
                >
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground text-glow">
                    The Answer is{' '}
                    <span className="text-primary">PB.ai</span>
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
