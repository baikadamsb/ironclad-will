import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import coachImg1 from "@/assets/coach.jpg";
import coachImg2 from "@/assets/coach-2.jpg";
import coachImg3 from "@/assets/coach-3.jpg";

const coachImages = [coachImg1, coachImg2, coachImg3];

const fadeInLeft = {
  hidden: { opacity: 0, x: -50, filter: "blur(10px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50, filter: "blur(10px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % coachImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Carousel */}
          <motion.div
            className="relative"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden h-[500px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={coachImages[currentImage]}
                  alt="Тренер по боевым искусствам"
                  className="w-full h-[500px] object-cover object-top absolute inset-0"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7 }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            {/* Red accent line */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-4 border-b-4 border-primary" />
            
            {/* Carousel indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {coachImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImage ? "bg-primary w-6" : "bg-muted-foreground/50"
                  }`}
                  aria-label={`Фото ${index + 1}`}
                />
              ))}
            </div>
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
