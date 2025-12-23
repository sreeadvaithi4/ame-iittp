const EngineeringBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle gear pattern - top left */}
      <svg
        className="absolute top-20 left-10 w-24 h-24 text-primary/[0.03] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 10 L55 25 L70 20 L65 35 L80 40 L70 50 L80 60 L65 65 L70 80 L55 75 L50 90 L45 75 L30 80 L35 65 L20 60 L30 50 L20 40 L35 35 L30 20 L45 25 Z" />
        <circle cx="50" cy="50" r="15" fill="hsl(var(--background))" />
      </svg>

      {/* Subtle gear pattern - bottom right */}
      <svg
        className="absolute bottom-32 right-16 w-32 h-32 text-primary/[0.02] animate-spin-reverse"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 5 L53 20 L68 15 L62 30 L77 33 L65 45 L77 57 L62 60 L68 75 L53 70 L50 85 L47 70 L32 75 L38 60 L23 57 L35 45 L23 33 L38 30 L32 15 L47 20 Z" />
        <circle cx="50" cy="50" r="12" fill="hsl(var(--background))" />
      </svg>

      {/* Small gear - center right */}
      <svg
        className="absolute top-1/2 right-8 w-16 h-16 text-primary/[0.02] animate-spin-slow"
        style={{ animationDuration: '30s' }}
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 15 L54 28 L66 24 L61 37 L74 40 L64 50 L74 60 L61 63 L66 76 L54 72 L50 85 L46 72 L34 76 L39 63 L26 60 L36 50 L26 40 L39 37 L34 24 L46 28 Z" />
        <circle cx="50" cy="50" r="10" fill="hsl(var(--background))" />
      </svg>
    </div>
  );
};

export default EngineeringBackground;
