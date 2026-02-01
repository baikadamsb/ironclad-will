import { motion } from "framer-motion";
import { useState } from "react";

const branches = [
  {
    id: "olympic",
    name: "СК «Олимп»",
    address: "г. Москва, ул. Спортивная, д. 15, СК «Олимп», зал №3",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.5875815395!2d37.5645!3d55.7143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQyJzUxLjUiTiAzN8KwMzMnNTIuMiJF!5e0!3m2!1sru!2sru!4v1234567890",
    schedule: [
      { day: "Понедельник", time: "18:00 - 19:30", group: "Дети", age: "6-12 лет" },
      { day: "Понедельник", time: "19:30 - 21:00", group: "Взрослые", age: "16+" },
      { day: "Среда", time: "18:00 - 19:30", group: "Юниоры", age: "12-16 лет" },
      { day: "Среда", time: "19:30 - 21:00", group: "Взрослые", age: "16+" },
      { day: "Пятница", time: "18:00 - 19:30", group: "Дети", age: "6-12 лет" },
      { day: "Пятница", time: "19:30 - 21:00", group: "Продвинутые", age: "16+" },
      { day: "Суббота", time: "10:00 - 12:00", group: "Все группы", age: "Спарринги" },
    ],
  },
  {
    id: "dynamo",
    name: "СК «Динамо»",
    address: "г. Москва, ул. Лавочкина, д. 32, СК «Динамо», зал №1",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.5875815395!2d37.5245!3d55.8143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ4JzUxLjUiTiAzN8KwMzEnMjUuMiJF!5e0!3m2!1sru!2sru!4v1234567891",
    schedule: [
      { day: "Вторник", time: "17:00 - 18:30", group: "Дети", age: "6-12 лет" },
      { day: "Вторник", time: "18:30 - 20:00", group: "Взрослые", age: "16+" },
      { day: "Четверг", time: "17:00 - 18:30", group: "Юниоры", age: "12-16 лет" },
      { day: "Четверг", time: "18:30 - 20:00", group: "Взрослые", age: "16+" },
      { day: "Суббота", time: "14:00 - 16:00", group: "Все группы", age: "Спарринги" },
    ],
  },
];

export type Branch = typeof branches[0];

export const getBranches = () => branches;

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

interface ScheduleProps {
  selectedBranch?: string;
  onBranchChange?: (branchId: string) => void;
}

const Schedule = ({ selectedBranch, onBranchChange }: ScheduleProps) => {
  const [internalBranch, setInternalBranch] = useState(branches[0].id);
  
  const activeBranchId = selectedBranch ?? internalBranch;
  const setActiveBranch = onBranchChange ?? setInternalBranch;
  
  const activeBranch = branches.find((b) => b.id === activeBranchId) ?? branches[0];

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

        {/* Branch selector */}
        <motion.div
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {branches.map((branch) => (
            <button
              key={branch.id}
              onClick={() => setActiveBranch(branch.id)}
              className={`px-6 py-3 font-heading uppercase tracking-wider text-sm md:text-base transition-all duration-300 border-2 ${
                activeBranchId === branch.id
                  ? "bg-primary border-primary text-primary-foreground"
                  : "bg-transparent border-muted-foreground/30 text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {branch.name}
            </button>
          ))}
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
            key={activeBranchId}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {activeBranch.schedule.map((row, index) => (
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
