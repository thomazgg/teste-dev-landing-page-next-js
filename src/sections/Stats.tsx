// File: src/sections/Stats.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, animate, useInView } from 'framer-motion';

function AnimatedNumber({ value, start }: { value: number; start: boolean }) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!start) return;

    const controls = animate(count, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: latest => {
        setDisplay(Math.floor(latest).toLocaleString());
      },
    });

    return () => controls.stop();
  }, [start, value]);

  return <motion.span>{display}</motion.span>;
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { label: "Armazéns cadastrados", value: 5384, prefix: "+" },
    { label: "Check-ins", value: 4268, prefix: "+" },
    { label: "Armazéns ocupados", value: 85, suffix: "%" },
  ];

  return (
    <section
      ref={ref}
      className="relative container-large py-40 bg-white text-center bg-[url('/assets/stats.svg')] bg-no-repeat bg-top"
    >
      <h2 className="text-center text-secondary-500 mb-10">Nossos números</h2>
      <div className="flex justify-center gap-16 flex-wrap">
        {stats.map(({ label, value, prefix, suffix }) => (
          <div key={label} className="flex flex-col flex-1">
            <h2 className="text-primary-500 text-3xl font-bold">
              {prefix}
              <AnimatedNumber value={value} start={isInView} />
              {suffix}
            </h2>
            <p className="m3 mt-2">{label}</p>
          </div>
        ))}
      </div>

      {/* Linha no fundo */}
      <div className="absolute bottom-0 left-0 w-full h-[6px] bg-color-gradient-1" />
    </section>
  );
}