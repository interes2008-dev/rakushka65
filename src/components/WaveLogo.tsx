import { motion } from "framer-motion";

const WaveLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    whileHover="hover"
    initial="idle"
  >
    {[
      { y: 16, delay: 0, color: "hsl(168 72% 50%)" },
      { y: 24, delay: 0.1, color: "hsl(168 72% 70%)" },
      { y: 32, delay: 0.2, color: "hsl(168 72% 50%)" },
    ].map(({ y, delay, color }) => (
      <motion.path
        key={y}
        d={`M6 ${y}c4-4 8-4 12 0s8 4 12 0 8-4 12 0`}
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        variants={{
          idle: { x: 0, transition: { duration: 0.4 } },
          hover: {
            x: [0, 3, -3, 0],
            transition: {
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            },
          },
        }}
      />
    ))}
  </motion.svg>
);

export default WaveLogo;
