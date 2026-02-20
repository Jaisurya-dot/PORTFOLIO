import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const socials = [
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/', color: '#8b5cf6' },
    { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com/', color: '#3b82f6' },
    { icon: FaXTwitter, label: 'X / Twitter', href: 'https://x.com/', color: '#06b6d4' },
    { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com/', color: '#ec4899' },
]

const Socialmedia = () => {
    return (
        <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href, color }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="group relative w-11 h-11 flex items-center justify-center rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] text-[var(--text-secondary)] transition-all duration-300 hover:border-transparent hover:scale-110 hover:shadow-lg"
                    style={{ '--hover-color': color }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${color}20`
                        e.currentTarget.style.borderColor = `${color}50`
                        e.currentTarget.style.color = color
                        e.currentTarget.style.boxShadow = `0 0 20px ${color}25`
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                        e.currentTarget.style.color = 'var(--text-secondary)'
                        e.currentTarget.style.boxShadow = 'none'
                    }}
                >
                    <Icon size={18} />
                </a>
            ))}
        </div>
    )
}

export default Socialmedia