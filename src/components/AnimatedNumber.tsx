"use client";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimatedNumber({ 
  value, 
  suffix = "", 
  className = "" 
}: { 
  value: number; 
  suffix?: string; 
  className?: string 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  // Spring animation for counting up
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 50,
    damping: 15,
  });
  
  // Transform the raw number into an integer string with the suffix
  const display = useTransform(spring, (current) => Math.floor(current) + suffix);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
