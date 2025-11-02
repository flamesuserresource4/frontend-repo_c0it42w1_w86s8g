import { motion, useScroll, useTransform } from "framer-motion";
import { Rocket, Shield, Zap } from "lucide-react";
import { useRef } from "react";

const FeatureCard = ({ Icon, title, description, delay }) => (
  <motion.div
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white"
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="pointer-events-none absolute -inset-16 bg-gradient-to-tr from-fuchsia-500/20 via-cyan-400/20 to-indigo-500/20 blur-2xl" />
    </div>
    <div className="flex items-center gap-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="mt-3 text-white/70">{description}</p>
  </motion.div>
);

export default function Features() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const translateY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["-8deg", "8deg"]);

  return (
    <section id="features" ref={ref} className="relative bg-[#0b0b12] py-24 overflow-hidden">
      <motion.div
        className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-fuchsia-500/30 via-cyan-400/30 to-indigo-500/30 blur-3xl"
        style={{ y: translateY, rotate }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">What makes it powerful</h2>
          <p className="mt-3 text-white/70">
            Built for teams who care about speed, security, and delightful experiences.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            Icon={Rocket}
            title="Blazing Performance"
            description="An edge-optimized runtime with parallel pipelines so your workflows run instantly."
            delay={0}
          />
          <FeatureCard
            Icon={Shield}
            title="Enterprise Security"
            description="End-to-end encryption and fine-grained access control baked into every action."
            delay={0.1}
          />
          <FeatureCard
            Icon={Zap}
            title="Automation at Scale"
            description="Trigger automations across your stack with visual logic and zero-code extensions."
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}
