import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Calendar, Users, Medal, Trophy } from "lucide-react";

const stats = [
  { icon: Calendar, value: 10, label: "Лет опыта", suffix: "+" },
  { icon: Users, value: 500, label: "Учеников", suffix: "+" },
  { icon: Medal, value: 800, label: "Медалей", suffix: "" },
  { icon: Trophy, value: 50, label: "Турниров", suffix: "+" },
];

const CounterAnimation = ({ value, suffix, shouldStart }: { value: number; suffix: string; shouldStart: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (shouldStart) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [shouldStart, value]);

  return (
    <span className="gradient-text-gold text-5xl md:text-6xl font-bold font-heading">
      {count}{suffix}
    </span>
  );
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="achievements" className="py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="gradient-text-gold">Достижения</span>
          </h2>
          <p className="section-subheading mx-auto">
            Цифры, которые говорят сами за себя
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="card-stat"
              variants={item}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="mb-4 flex justify-center"
                animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatDelay: 1,
                  delay: index * 0.2 
                }}
              >
                <stat.icon className="w-10 h-10 text-secondary" />
              </motion.div>
              <CounterAnimation value={stat.value} suffix={stat.suffix} shouldStart={isInView} />
              <p className="text-muted-foreground mt-2 uppercase tracking-wider font-heading text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
