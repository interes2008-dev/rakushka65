const WaveLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M6 16c4-4 8-4 12 0s8 4 12 0 8-4 12 0"
      stroke="hsl(168 72% 50%)"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M6 24c4-4 8-4 12 0s8 4 12 0 8-4 12 0"
      stroke="hsl(168 72% 50%)"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M6 32c4-4 8-4 12 0s8 4 12 0 8-4 12 0"
      stroke="hsl(168 72% 50%)"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

export default WaveLogo;
