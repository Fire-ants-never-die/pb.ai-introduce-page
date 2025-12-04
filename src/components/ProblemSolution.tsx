import { motion } from 'framer-motion';
import analysisImage from '@/assets/analysis-detail.jpg';

const chatBubbles = [
  { text: "DCF가 뭔가요?", isUser: true },
  { text: "이 주식 저평가된 건가요?", isUser: true },
  { text: "재무제표 어떻게 분석하죠?", isUser: true },
  { text: "PER, PBR 해석이 어려워요", isUser: true },
];

const ProblemSolution = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            복잡한 금융 질문, <span className="text-primary">AI가 답합니다</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            더 이상 혼자 고민하지 마세요
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Problem (Chat bubbles) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-lg">💭</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">투자자들의 고민</h3>
                  <p className="text-sm text-muted-foreground">매일 반복되는 질문들</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {chatBubbles.map((bubble, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex justify-end"
                  >
                    <div className="bg-primary/20 text-foreground px-4 py-2.5 rounded-2xl rounded-br-md max-w-[80%]">
                      <p className="text-sm md:text-base">{bubble.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-sm text-muted-foreground italic text-center">
                  "답을 찾기까지 너무 오래 걸려요..."
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Right - Solution (Analysis screenshot) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="glass-card overflow-hidden floating-shadow">
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">AI</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">PB.ai 분석 리포트</h3>
                    <p className="text-sm text-primary">실시간 AI 분석</p>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-[4/3]">
                <img 
                  src={analysisImage} 
                  alt="PB.ai Analysis Report - Detailed AI-powered financial analysis"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
              
              <div className="p-4 bg-primary/5">
                <p className="text-sm md:text-base text-foreground font-medium text-center">
                  AI가 실시간으로 분석하여 명확한 해답을 제시합니다.
                </p>
              </div>
            </div>
            
            {/* Glow */}
            <div 
              className="absolute -inset-4 -z-10 blur-3xl opacity-20"
              style={{
                background: 'radial-gradient(ellipse at center, hsl(217, 91%, 60%) 0%, transparent 70%)'
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
