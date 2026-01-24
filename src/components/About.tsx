import { motion } from "framer-motion";
import coachImg from "@/assets/coach.jpg";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50, filter: "blur(10px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50, filter: "blur(10px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            className="relative"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={coachImg}
                alt="Тренер по боевым искусствам"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            {/* Red accent line */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-4 border-b-4 border-primary" />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-heading mb-6">
              О <span className="gradient-text-red">Тренере</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                <strong className="text-foreground">11 лет опыта</strong> в боевых искусствах и профессиональной подготовке спортсменов. Тренер международного уровня, мастер спорта по вольной борьбе, кандидат мастера спорта по самбо.
              </p>
              <p>
                <strong className="text-foreground">Дисциплина и характер</strong> — основа моей философии. Я не просто обучаю технике, я формирую личность, способную преодолевать любые трудности.
              </p>
              <p>
                <strong className="text-foreground">Безопасность</strong> — приоритет на каждой тренировке. Современное оборудование, индивидуальный подход, контроль нагрузки.
              </p>
              <p>
                <strong className="text-foreground">Результаты учеников</strong>: больше 20 чемпионов мира, Азии, Европы, мастера спорта, сотни детей и взрослых, открывших для себя силу единоборств.
              </p>
            </div>

            <motion.div
              className="mt-8 flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="h-px flex-1 bg-border" />
              <span className="text-primary font-heading uppercase tracking-wider">
                Твой путь начинается здесь
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
