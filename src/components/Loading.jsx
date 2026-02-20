import React from 'react'

const Loading = () => {
    const name = "JAISURYA"

    return (
        <div className="flex flex-col items-center gap-8">
            {/* Name reveal */}
            <div className="flex gap-1">
                {name.split('').map((letter, i) => (
                    <span
                        key={i}
                        className="text-4xl sm:text-5xl font-bold gradient-text"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            opacity: 0,
                            animation: `fade-in-up 0.6s ease forwards`,
                            animationDelay: `${i * 0.1}s`,
                        }}
                    >
                        {letter}
                    </span>
                ))}
            </div>

            {/* Animated loader bar */}
            <div className="w-48 h-[3px] rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
                <div
                    className="h-full rounded-full animate-gradient"
                    style={{
                        background: 'linear-gradient(90deg, #8b5cf6, #3b82f6, #06b6d4, #8b5cf6)',
                        backgroundSize: '200% 100%',
                        animation: 'gradient-shift 1.5s ease infinite, loader-expand 2.5s ease-out forwards',
                    }}
                />
            </div>

            <style>{`
        @keyframes loader-expand {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
        </div>
    )
}

export default Loading
