'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring, useTransform, motion } from 'framer-motion';

interface CounterProps {
  value: number;
  direction?: 'up' | 'down';
}

function Counter({ value, direction = 'up' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const motionValue = useMotionValue(direction === 'down' ? value : 0);

  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const displayValue = useTransform(springValue, (latest: number) =>
    Math.round(latest).toLocaleString('fr-FR'),
  );

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export default Counter;
