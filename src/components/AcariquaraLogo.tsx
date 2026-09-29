import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
  glow?: boolean;
}

export const AcariquaraLogo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  size = 120,
  glow = false,
}) => {
  const gradientId = React.useId();

  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
        aria-label="Acariquara Tech Símbolo"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="30"
            y1="160"
            x2="170"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#22A6F5" />
            <stop offset="100%" stopColor="#6B4EE6" />
          </linearGradient>
          {glow && (
            <filter id={`${gradientId}-glow`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          )}
        </defs>

        {/* Geometric open "A" with thick angled legs */}
        <path
          d="M 100 28 
             L 168 162 
             L 138 162 
             L 100 86 
             L 62 162 
             L 32 162 
             Z"
          fill={`url(#${gradientId})`}
          filter={glow ? `url(#${gradientId}-glow)` : undefined}
          strokeLinejoin="round"
        />

        {/* Circular dot suspended in the center cavity */}
        <circle
          cx="100"
          cy="138"
          r="13.5"
          fill={`url(#${gradientId})`}
        />
      </svg>

      {showText && (
        <div className="mt-5 text-center tracking-[0.38em] uppercase font-sans">
          <div className="text-[13px] md:text-[15px] font-semibold text-[#E9E4DA] pl-[0.38em]">
            ACARIQUARA
          </div>
          <div className="text-[9px] md:text-[10px] font-medium text-[#A490F4] tracking-[0.55em] mt-1 pl-[0.55em]">
            TECH
          </div>
        </div>
      )}
    </div>
  );
};
