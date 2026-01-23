import { motion } from "framer-motion";

const team = [
  { name: "Александр К.", category: "Взрослые / ММА", level: "КМС" },
  { name: "Мария В.", category: "Юниоры / Бокс", level: "1 разряд" },
  { name: "Дмитрий С.", category: "Взрослые / Кикбоксинг", level: "МС" },
  { name: "Анна П.", category: "Дети / Карате", level: "2 разряд" },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Team = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            Наши <span className="gradient-text-red">Чемпионы</span>
          </h2>
          <p className="section-subheading mx-auto">
            Ученики, которыми мы гордимся
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="card-team group"
              variants={item}
              transition={{ duration: 0.5 }}
            >
              {/* Placeholder avatar */}
              <div className="aspect-square bg-muted relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center">
                    <span className="font-heading text-3xl text-muted-foreground">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                {/* Grayscale to color effect placeholder */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              </div>
              
              <div className="p-4 text-center">
                <h3 className="font-heading text-lg uppercase tracking-wider text-foreground">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {member.category}
                </p>
                <span className="inline-block mt-2 px-3 py-1 bg-primary/20 text-primary text-xs uppercase tracking-wider font-heading">
                  {member.level}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
