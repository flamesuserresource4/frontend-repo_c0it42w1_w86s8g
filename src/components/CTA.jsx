import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="get-started" className="relative bg-[#0a0a0f] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(76,29,149,0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold text-white"
        >
          Ready to build in the future?
        </motion.h3>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-white/70"
        >
          Start your free trial and experience the speed of a cyber‑futuristic workflow engine.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a className="inline-flex items-center justify-center rounded-md bg-white text-black px-6 py-3 font-medium hover:opacity-90 transition" href="#">
            Start Free Trial
          </a>
          <a className="inline-flex items-center justify-center rounded-md bg-white/10 border border-white/10 px-6 py-3 font-medium hover:bg-white/20 transition" href="#contact">
            Talk to Sales
          </a>
        </motion.div>
        <p id="contact" className="mt-8 text-xs text-white/50">
          Questions? Email hello@example.com
        </p>
      </div>
    </section>
  );
}
