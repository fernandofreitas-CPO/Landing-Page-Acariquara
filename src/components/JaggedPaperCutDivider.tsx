import React from 'react';

interface JaggedDividerProps {
  topColor: string;
  bottomColor: string;
  shadowColor?: string;
  inverted?: boolean;
}

export const JaggedPaperCutDivider: React.FC<JaggedDividerProps> = ({
  topColor,
  bottomColor,
  shadowColor = '#0E0C0A',
  inverted = false,
}) => {
  return (
    <div
      style={{ backgroundColor: bottomColor }}
      className="relative w-full h-8 md:h-12 overflow-hidden select-none pointer-events-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 48"
        preserveAspectRatio="none"
        className={`w-full h-full ${inverted ? 'rotate-180' : ''}`}
      >
        {/* Hard Paper Offset Drop Shadow */}
        <path
          d="M0,0 
             L75,28 L140,8 L220,38 L310,12 L390,32 L470,16 L560,42 L650,14 L730,36 L810,18 L900,44 L980,10 L1070,38 L1140,16 L1200,32 
             L1200,0 Z"
          fill={shadowColor}
          transform="translate(6, 6)"
          opacity="0.9"
        />

        {/* The Jagged Cut Paper Edge */}
        <path
          d="M0,0 
             L75,28 L140,8 L220,38 L310,12 L390,32 L470,16 L560,42 L650,14 L730,36 L810,18 L900,44 L980,10 L1070,38 L1140,16 L1200,32 
             L1200,0 Z"
          fill={topColor}
        />
      </svg>
    </div>
  );
};
