import { motion } from "framer-motion";
import { Send } from "lucide-react";

const MobileButton = () => {
  return (
    <motion.a
      href="https://t.me/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 md:hidden btn-hero flex items-center gap-2 px-6 py-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileTap={{ scale: 0.95 }}
    >
      <Send size={20} />
      <span>Написать</span>
    </motion.a>
  );
};

export default MobileButton;
