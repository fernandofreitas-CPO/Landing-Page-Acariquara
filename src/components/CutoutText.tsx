import React from 'react';

interface CutoutTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'div' | 'p';
  letterSpacing?: string;
  paperTiles?: boolean;
  tileBg?: string;
  tileTextColor?: string;
}

// Simple deterministic hash to get consistent ±2.2° rotations and ±3px offsets
function getDeterministicOffset(str: string, index: number): { rot: number; y: number } {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  const seed = Math.abs(hash + index * 997);
  // rot between -2.5 and +2.5 deg
  const rot = ((seed % 50) - 25) / 10;
  // y between -3 and +3 px
  const y = ((Math.floor(seed / 10) % 70) - 35) / 10;
  return { rot, y };
}

export const CutoutText: React.FC<CutoutTextProps> = ({
  text,
  className = '',
  as: Component = 'span',
  letterSpacing = '-0.02em',
  paperTiles = false,
  tileBg = '#0E0C0A',
  tileTextColor = '#EFE6D2',
}) => {
  const chars = Array.from(text);

  return (
    <Component className={`inline-block select-none tracking-tight ${className}`}>
      {chars.map((char, idx) => {
        if (char === ' ') {
          return (
            <span key={idx} className="inline-block w-[0.28em]">
              &nbsp;
            </span>
          );
        }

        const { rot, y } = getDeterministicOffset(text, idx);

        if (paperTiles) {
          return (
            <span
              key={idx}
              style={{
                transform: `rotate(${rot}deg) translateY(${y}px)`,
                backgroundColor: tileBg,
                color: tileTextColor,
              }}
              className="inline-block px-1.5 py-0.5 mx-[1px] shadow-hard-black-sm paper-cut uppercase font-bold"
            >
              {char}
            </span>
          );
        }

        return (
          <span
            key={idx}
            style={{
              transform: `rotate(${rot}deg) translateY(${y}px)`,
              letterSpacing,
            }}
            className="inline-block paper-cut transition-transform"
          >
            {char}
          </span>
        );
      })}
    </Component>
  );
};
