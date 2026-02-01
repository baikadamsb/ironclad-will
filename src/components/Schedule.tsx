import { motion } from "framer-motion";
import { useState } from "react";

const branches = [
  {
    id: "kenesary",
    name: "Кенесары",
    address: "г. Астана, ул. Кенесары, д. 47",
    // Яндекс. Виджет (iframe). Если у второго филиала другая карта — вставь сюда его um=constructor...
    mapUrl:"https://yandex.ru/map-widget/v1/?um=constructor%3A43d6269b8d3ae2ea8c22209f26bc347784def1822eaedd91001de0a8e68dbc10&source=constructor",
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
    // ВАЖНО: поставь реальный constructor для этого филиала (сейчас стоит тот же, как заглушка)
    mapUrl:
      "https://yandex.ru/map-widget/v1/?um=constructor%3Aea6e602ed24d52ef63ee442db357ca4224d31692720dac113151341f7505ba7f&source=constructor",
    schedule: [
      { day: "Пн, Ср, Пт", time: "09:30 - 11:00", group: "Дети", age: "10-14 лет" },
      { day: "Пн, Ср, Пт", time: "19:00 - 20:00", group: "Дети", age: "4-10 лет" },
      { day: "Пн, Ср, Пт", time: "20:00 - 21:30", group: "Подростки/Взрослые", age: "15+" },
    ],
  },
];

export type Branch = (typeof branches)[0];
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
          <p className="section-subheading mx-auto">Выбери удобное время для тренировок</p>
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
          <motion.div key={activeBranchId} variants={container} initial="hidden" animate="visible">
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

        {/* Yandex Map */}
        <div className="max-w-4xl mx-auto mt-10">
          <iframe
            key={activeBranchId}
            src={activeBranch.mapUrl}
            width="100%"
            height="400"
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>

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
