import { motion } from "framer-motion";
import { Send, Instagram, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with slow zoom */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wider mb-4">
            <span className="gradient-text-red">GURG TEAM</span>
            <br />
            <span className="text-foreground">ANZOR RADZHABOV</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-muted-foreground text-xl md:text-2xl max-w-2xl mx-auto mb-4 font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Mixed marial arts and grappling
        </motion.p>

        <motion.p
          className="text-foreground/80 text-lg md:text-xl max-w-xl mx-auto mb-8 font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Подготовка детей и взрослых
        </motion.p>

        <motion.p
          className="text-primary text-lg md:text-xl font-heading uppercase tracking-widest mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          «Это не кружок. Это школа характера.»
        </motion.p>

        {/* Social buttons */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-social"
            aria-label="Telegram"
          >
            <Send size={24} />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-social"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-social"
            aria-label="WhatsApp"
          >
            <Phone size={24} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
