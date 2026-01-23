import { motion } from "framer-motion";
import { MapPin, Phone, Send, Instagram, Clock } from "lucide-react";

const Contacts = () => {
  return (
    <section id="contacts" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="gradient-text-red">Контакты</span>
          </h2>
          <p className="section-subheading mx-auto">
            Запишись на первую бесплатную тренировку
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <div className="btn-social shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-heading text-lg uppercase text-foreground mb-1">Адрес</h3>
                <p className="text-muted-foreground">
                  г. Москва, ул. Спортивная, д. 15<br />
                  СК "Олимп", зал №3
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="btn-social shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-heading text-lg uppercase text-foreground mb-1">Время работы</h3>
                <p className="text-muted-foreground">
                  Пн-Пт: 18:00 - 21:00<br />
                  Сб: 10:00 - 12:00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <motion.a
                href="tel:+79001234567"
                className="btn-social shrink-0"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Phone size={20} />
              </motion.a>
              <div>
                <h3 className="font-heading text-lg uppercase text-foreground mb-1">Телефон</h3>
                <a href="tel:+79001234567" className="text-primary text-lg hover:underline">
                  +7 (900) 123-45-67
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="pt-4">
              <h3 className="font-heading text-lg uppercase text-foreground mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-social"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Send size={20} />
                </motion.a>
                <motion.a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-social"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-social"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Phone size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="relative h-[400px] overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.5875815395!2d37.5645!3d55.7143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQyJzUxLjUiTiAzN8KwMzMnNTIuMiJF!5e0!3m2!1sru!2sru!4v1234567890"
              className="w-full h-full border-0 grayscale contrast-125"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта"
            />
            <div className="absolute inset-0 border border-border pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
