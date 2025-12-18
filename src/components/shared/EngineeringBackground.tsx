const EngineeringBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle gear pattern */}
      <svg
        className="absolute top-10 left-10 w-32 h-32 text-primary/[0.03] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 10 L55 25 L70 20 L65 35 L80 40 L70 50 L80 60 L65 65 L70 80 L55 75 L50 90 L45 75 L30 80 L35 65 L20 60 L30 50 L20 40 L35 35 L30 20 L45 25 Z" />
        <circle cx="50" cy="50" r="15" fill="hsl(var(--background))" />
      </svg>

      <svg
        className="absolute bottom-20 right-20 w-48 h-48 text-primary/[0.02] animate-spin-reverse"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 5 L53 20 L68 15 L62 30 L77 33 L65 45 L77 57 L62 60 L68 75 L53 70 L50 85 L47 70 L32 75 L38 60 L23 57 L35 45 L23 33 L38 30 L32 15 L47 20 Z" />
        <circle cx="50" cy="50" r="12" fill="hsl(var(--background))" />
      </svg>

      {/* Circuit-like lines */}
      <div className="absolute top-1/4 left-0 w-full">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/[0.04] to-transparent" />
      </div>
      <div className="absolute top-3/4 left-0 w-full">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/[0.03] to-transparent" />
      </div>

      {/* Vertical lines */}
      <div className="absolute top-0 left-1/4 h-full">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      </div>
      <div className="absolute top-0 right-1/4 h-full">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      </div>

      {/* Floating dots representing nodes */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/[0.05] animate-pulse-slow" />
      <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-primary/[0.05] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-3/4 left-1/4 w-2 h-2 rounded-full bg-primary/[0.05] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-3/4 right-1/4 w-2 h-2 rounded-full bg-primary/[0.05] animate-pulse-slow" style={{ animationDelay: '0.5s' }} />

      {/* Subtle measurement marks */}
      <div className="absolute top-1/3 right-10 flex flex-col gap-2 opacity-[0.03]">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-1">
            <div className="w-4 h-px bg-foreground" />
            <div className="w-1 h-px bg-foreground" />
          </div>
        ))}
      </div>

      {/* Blueprint-style corner markers */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-primary/[0.04]" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-primary/[0.04]" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-primary/[0.04]" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-primary/[0.04]" />
    </div>
  );
};

export default EngineeringBackground;
