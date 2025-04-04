"use client"

interface AnimatedWaveProps {
  color?: string
  height?: number
  width?: number
  className?: string
}

export function AnimatedWave({ color = "#fde4cf", height = 50, width = 1440, className = "" }: AnimatedWaveProps) {
  return (
    <div className={`w-full overflow-hidden ${className}`} style={{ height }}>
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={`
            M0 ${height}
            C${width * 0.25} ${height * 0.3},
            ${width * 0.5} ${height * 1.5},
            ${width} ${height * 0.5}
            L${width} ${height}
            L0 ${height}
            Z
          `}
          fill={color}
        >
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values={`
              M0 ${height}
              C${width * 0.25} ${height * 0.3},
              ${width * 0.5} ${height * 1.5},
              ${width} ${height * 0.5}
              L${width} ${height}
              L0 ${height}
              Z;
              
              M0 ${height}
              C${width * 0.25} ${height * 0.8},
              ${width * 0.5} ${height * 0.3},
              ${width} ${height * 0.7}
              L${width} ${height}
              L0 ${height}
              Z;
              
              M0 ${height}
              C${width * 0.25} ${height * 0.5},
              ${width * 0.5} ${height * 0.8},
              ${width} ${height * 0.3}
              L${width} ${height}
              L0 ${height}
              Z
            `}
          />
        </path>
      </svg>
    </div>
  )
}

