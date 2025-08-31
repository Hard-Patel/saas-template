"use client";

import React from "react";
import { motion } from "motion/react";

type OrbitingIconRingProps = {
  /** Array of icons as JSX elements or icon components (e.g. <Mail />) */
  icons: React.ReactNode[];
  /** distance from center to icon center in px */
  orbitRadius?: number;
  /** diameter of each icon container in px */
  itemSize?: number;
  /** time (s) for one full rotation */
  duration?: number;
  /** extra wrapper classes */
  className?: string;
  /** tailwind classes for each icon circle */
  itemClassName?: string;
  /** whether icons should be clickable (pointer-events) */
  pointerEvents?: boolean;
};

export function OrbitingIconRing({
  icons,
  orbitRadius = 200,
  itemSize = 100,
  duration = 20,
  className = "",
  itemClassName = "bg-green-500/20 rounded-full flex items-center justify-center shadow",
  pointerEvents = false,
}: OrbitingIconRingProps) {
  const n = icons.length || 1;

  // container size should fit the orbit (diameter) + item size
  const containerSize = orbitRadius * 2 + itemSize;

  return (
    <div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}
      style={{
        width: containerSize,
        height: containerSize,
        overflow: "visible",
      }}
      aria-hidden
    >
      {/* Rotating wrapper: rotates around the center */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: [0, 360] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "50% 50%" }}
      >
        {/* center pivot: we'll place each item inside its own pivot that we rotate by initial angle */}
        {icons.map((icon, i) => {
          const angle = (360 / n) * i; // degrees
          const pivotStyle: React.CSSProperties = {
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) rotate(${angle}deg)`,
            transformOrigin: "50% 50%",
            // ensure the pivot doesn't create stacking issues
            pointerEvents: pointerEvents ? "auto" : "none",
          };

          // the icon itself is translated outward and counter-rotated so it stays upright
          const iconWrapperStyle: React.CSSProperties = {
            width: itemSize,
            height: itemSize,
            transform: `translate(0, -${orbitRadius}px) rotate(${-angle}deg)`,
            transformOrigin: "50% 50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: pointerEvents ? "auto" : "none",
          };

          const rotateFrom = 0;
          const rotateTo = -360;

          return (
            <div key={i} style={pivotStyle}>
              <div
                className={itemClassName}
                style={{
                  ...iconWrapperStyle,
                }}
              >
                <motion.div
                  animate={{ rotate: [rotateFrom, rotateTo] }}
                  transition={{ duration, repeat: Infinity, ease: "linear" }}
                >
                  {/* icon itself should not be rotated, it's been counter-rotated by wrapper */}
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {icon}
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
