import { motion } from 'framer-motion';
import geumjuImg from '../assets/geumju.jpg';
import jinwooImg from '../assets/jinwoo.jpg';
import nanseulImg from '../assets/nanseul.jpg';

const teamMembers = [
  {
    name: "이금주",
    role: "CEO",
    description: "기획 & 디자인",
    avatar: geumjuImg,
    imagePosition: "center"
  },
  {
    name: "최진우",
    role: "AI Engineer",
    description: "AI & 데이터 분석",
    avatar: jinwooImg,
    imagePosition: "center"
  },
  {
    name: "김난슬",
    role: "Full Stack Developer",
    description: "풀스택 개발",
    avatar: nanseulImg,
    imagePosition: "90% center"
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
                <div className="w-[60%] aspect-square rounded-full overflow-hidden mx-auto mb-6 border-2 border-primary/20">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: member.imagePosition }}
                  />
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
