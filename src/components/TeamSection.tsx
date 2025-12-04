import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "이금주",
    role: "CEO",
    description: "기획 & 디자인",
    avatar: "👩‍💼"
  },
  {
    name: "최진우",
    role: "Tech Lead",
    description: "AI & 데이터 분석",
    avatar: "👨‍💻"
  },
  {
    name: "김난슬",
    role: "Developer",
    description: "풀스택 개발",
    avatar: "👩‍💻"
  }
];

const TeamSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="text-primary font-semibold text-sm">BullAnts Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We are <span className="text-primary">BullAnts</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            금융과 기술의 만남을 이끄는 팀
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card p-8 text-center hover:border-primary/30 transition-all duration-300">
                {/* Avatar */}
                <div className="relative mx-auto mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-4xl mx-auto">
                    {member.avatar}
                  </div>
                  <div className="absolute -inset-2 rounded-full border border-primary/20 group-hover:border-primary/40 transition-colors" />
                </div>
                
                {/* Info */}
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
