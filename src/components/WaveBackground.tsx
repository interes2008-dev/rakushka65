const WaveBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Wave layers */}
      <svg
        className="absolute bottom-0 w-full animate-wave opacity-10"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: "40vh" }}
      >
        <path
          fill="hsl(168, 72%, 50%)"
          d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,208C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <svg
        className="absolute bottom-0 w-full animate-wave-slow opacity-5"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: "30vh", animationDelay: "-4s" }}
      >
        <path
          fill="hsl(35, 55%, 80%)"
          d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export default WaveBackground;
