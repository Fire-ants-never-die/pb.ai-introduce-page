import { motion } from 'framer-motion';
import { LayoutDashboard, BarChart3, TrendingUp, Scale } from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    title: "Overview",
    description: "기업의 핵심 정보를 요약 정리하여 분석 구조를 빠르게 파악할 수 있도록 전체적인 윤곽을 제공합니다."
  },
  {
    icon: BarChart3,
    title: "재무현황 분석",
    description: "재무 건전성과 경영 역량을 종합적으로 진단하여 기업의 재무 상태를 한눈에 보여줍니다."
  },
  {
    icon: TrendingUp,
    title: "투자지표",
    description: "주당지표와 밸류에이션 멀티풀 등 핵심 투자 지표를 연도별로 제공하여 투자 매력을 직관적으로 파악하게 합니다."
  },
  {
    icon: Scale,
    title: "주식가치평가",
    description: "기업의 내재 가치를 산출하고 현재 시장 가격과 비교하여 저평가 여부와 투자 매력도를 판단합니다."
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
        
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-6 h-full hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
