export function Logo({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ReviewPing logo"
      className={className}
    >
      {/* Chat bubble */}
      <rect x="4" y="6" width="32" height="24" rx="6" fill="#22C55E" />
      <polygon points="12,30 18,30 10,38" fill="#22C55E" />
      {/* Star inside bubble */}
      <path
        d="M20 13l1.76 3.57 3.94.57-2.85 2.78.67 3.93L20 22.07l-3.52 1.78.67-3.93-2.85-2.78 3.94-.57L20 13z"
        fill="white"
      />
    </svg>
  );
}

export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Logo size={32} />
      <span className="text-xl font-bold tracking-tight">
        Review<span className="text-brand-green">Ping</span>
      </span>
    </div>
  );
}
