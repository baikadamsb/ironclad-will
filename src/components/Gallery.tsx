import { motion } from "framer-motion";
import training1 from "@/assets/training-1.jpg";
import training2 from "@/assets/training-2.jpg";
import training3 from "@/assets/training-3.jpg";
import training4 from "@/assets/training-4.jpg";
import training5 from "@/assets/training-5.jpg";
import training6 from "@/assets/training-6.jpg";

const images = [
  { src: training1, alt: "Спарринг" },
  { src: training2, alt: "Работа на мешке" },
  { src: training3, alt: "Детская группа" },
  { src: training4, alt: "Борьба" },
  { src: training5, alt: "Победители турнира" },
  { src: training6, alt: "Разминка" },
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

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="gradient-text-red">Тренировки</span>
          </h2>
          <p className="section-subheading mx-auto">
            Каждая тренировка — это шаг к новой версии себя
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden group cursor-pointer"
              variants={item}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="relative aspect-square overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-heading text-lg uppercase tracking-wider text-foreground">
                    {image.alt}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
