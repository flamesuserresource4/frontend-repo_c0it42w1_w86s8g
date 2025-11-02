import Spline from "@splinetool/react-spline";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallax1X = useTransform(mouseX, [0, 1], [-20, 20]);
  const parallax1Y = useTransform(mouseY, [0, 1], [-10, 10]);
  const parallax2X = useTransform(mouseX, [0, 1], [15, -15]);
  const parallax2Y = useTransform(mouseY, [0, 1], [10, -10]);

  const onMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0a0f] text-white"
      onMouseMove={onMouseMove}
    >
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80"
            style={{ x: parallax1X, y: parallax1Y }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Introducing our next‑gen workflow engine
          </motion.div>

          <motion.h1
            className="mt-6 text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.1]"
            style={{ x: parallax1X, y: parallax1Y }}
          >
            Launch faster with a cyber‑futuristic SaaS platform
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-white/70 text-lg"
            style={{ x: parallax2X, y: parallax2Y }}
          >
            Design, automate, and deploy complex operations in minutes. An immersive 3D
            experience meets enterprise‑grade performance.
          </motion.p>

          <motion.div className="mt-8 flex gap-4" style={{ x: parallax2X, y: parallax2Y }}>
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 font-medium hover:opacity-90 transition"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-md bg-white/10 border border-white/10 px-5 py-3 font-medium hover:bg-white/20 transition"
            >
              Explore Features
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/40 via-cyan-400/30 to-indigo-500/40 blur-3xl"
        style={{ x: parallax1X }}
      />
    </section>
  );
}
