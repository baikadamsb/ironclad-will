import { motion } from "framer-motion";
import { useState } from "react";

const branches = [
  {
    id: "kenesary",
    name: "Кенесары",
    address: "г. Астана, ул. Кенесары, д. 47",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.8!2d71.4278!3d51.1605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585a605525605%3A0x4dff4a1973f7567e!2z0YPQuy4g0JrQtdC90LXRgdCw0YDRiywg0JDRgdGC0LDQvdCw!5e0!3m2!1sru!2skz!4v1234567890",
    schedule: [
      { day: "Вт, Чт, Сб", time: "09:30 - 11:00", group: "Дети", age: "10-12 лет" },
      { day: "Вт, Чт, Сб", time: "17:30 - 19:00", group: "Подростки", age: "12-14 лет" },
      { day: "Вт, Чт, Сб", time: "19:00 - 20:00", group: "Дети", age: "5-10 лет" },
      { day: "Вт, Чт, Сб", time: "20:00 - 21:30", group: "Подростки/Взрослые", age: "15+" },
    ],
  },
  {
    id: "kosshygululy",
    name: "Косшыгулулы",
    address: "г. Астана, ул. Косшыгулулы, д. 11/3",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.5!2d71.4678!3d51.1805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585a605525605%3A0x4dff4a1973f7567e!2z0YPQuy4g0JrQvtGB0YjRi9Cz0YPQu9GD0LvRiywg0JDRgdGC0LDQvdCw!5e0!3m2!1sru!2skz!4v1234567891",
    schedule: [
      { day: "Пн, Ср, Пт", time: "09:30 - 11:00", group: "Дети", age: "10-14 лет" },
      { day: "Пн, Ср, Пт", time: "19:00 - 20:00", group: "Дети", age: "4-10 лет" },
      { day: "Пн, Ср, Пт", time: "20:00 - 21:30", group: "Подростки/Взрослые", age: "15+" },
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
