import React from 'react'
import "./index.css"

const Button = ({ text = "Download CV", href = "#contact", onClick }) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
            style={{
                background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
            }}
        >
            <span className="relative z-10">{text}</span>
            <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}
            />
        </a>
    )
}

export default Button
