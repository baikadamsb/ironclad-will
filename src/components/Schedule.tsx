import { motion } from "framer-motion";

const scheduleData = [
  { day: "Понедельник", time: "18:00 - 19:30", group: "Дети", age: "6-12 лет" },
  { day: "Понедельник", time: "19:30 - 21:00", group: "Взрослые", age: "16+" },
  { day: "Среда", time: "18:00 - 19:30", group: "Юниоры", age: "12-16 лет" },
  { day: "Среда", time: "19:30 - 21:00", group: "Взрослые", age: "16+" },
  { day: "Пятница", time: "18:00 - 19:30", group: "Дети", age: "6-12 лет" },
  { day: "Пятница", time: "19:30 - 21:00", group: "Продвинутые", age: "16+" },
  { day: "Суббота", time: "10:00 - 12:00", group: "Все группы", age: "Спарринги" },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Schedule = () => {
  return (
    <section id="schedule" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="gradient-text-red">Расписание</span>
          </h2>
          <p className="section-subheading mx-auto">
            Выбери удобное время для тренировок
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 pb-4 border-b-2 border-primary mb-4">
            <span className="font-heading uppercase tracking-wider text-primary text-sm md:text-base">День</span>
            <span className="font-heading uppercase tracking-wider text-primary text-sm md:text-base">Время</span>
            <span className="font-heading uppercase tracking-wider text-primary text-sm md:text-base">Группа</span>
            <span className="font-heading uppercase tracking-wider text-primary text-sm md:text-base">Возраст</span>
          </div>

          {/* Rows */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {scheduleData.map((row, index) => (
              <motion.div
                key={index}
                className="schedule-row grid grid-cols-4 gap-4"
                variants={item}
                transition={{ duration: 0.4 }}
              >
                <span className="font-heading text-foreground text-sm md:text-base">{row.day}</span>
                <span className="text-muted-foreground text-sm md:text-base">{row.time}</span>
                <span className="text-foreground text-sm md:text-base">{row.group}</span>
                <span className="text-muted-foreground text-sm md:text-base">{row.age}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.p
          className="text-center text-muted-foreground mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          * Индивидуальные тренировки по договорённости
        </motion.p>
      </div>
    </section>
  );
};

export default Schedule;
