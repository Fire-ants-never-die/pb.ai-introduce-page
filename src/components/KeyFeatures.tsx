import { motion } from 'framer-motion';
import { MessageSquare, PieChart } from 'lucide-react';
import chatImage from '@/assets/chat-interface.jpg';
import portfolioImage from '@/assets/portfolio-page.jpg';

const features = [
  {
    icon: MessageSquare,
    title: "AI 금융 챗봇",
    description: "궁금한 건 언제든 물어보세요. 금융 특화 AI 챗봇.",
    image: chatImage,
    alt: "PB.ai Chat Interface - AI-powered financial assistant"
  },
  {
    icon: PieChart,
    title: "포트폴리오 관리",
    description: "스마트한 자산 배분과 리밸런싱 알림.",
    image: portfolioImage,
    alt: "PB.ai Portfolio Management - Smart asset allocation"
  }
];

const KeyFeatures = () => {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">핵심 기능</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            투자의 모든 단계를 지원하는 AI 도구
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-card overflow-hidden h-full hover:border-primary/30 transition-colors duration-300">
                {/* Image container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
