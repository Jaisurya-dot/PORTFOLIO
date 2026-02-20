import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FiMail, FiArrowUpRight } from 'react-icons/fi'

const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
]

const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/', label: 'GitHub' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com/', label: 'LinkedIn' },
    { icon: FaXTwitter, href: 'https://x.com/', label: 'X' },
    { icon: FaInstagram, href: 'https://instagram.com/', label: 'Instagram' },
]

const Contact = () => {
    const handleNavClick = (e, href) => {
        e.preventDefault()
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="contact" className="relative overflow-hidden">
            {/* CTA Section */}
            <div className="section-padding">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-sm font-semibold tracking-widest uppercase text-[var(--accent-violet)] mb-3">Get in Touch</p>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                        Let's Build Something{' '}
                        <span className="gradient-text">Amazing</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                        I'm always excited to work on new projects, collaborate with talented teams, or just have a chat about tech. Feel free to reach out!
                    </p>

                    <a
                        href="mailto:jaisurya@example.com"
                        className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]"
                        style={{ background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)' }}
                    >
                        <FiMail size={20} />
                        <span>Say Hello</span>
                        <FiArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
                <div className="max-w-6xl mx-auto px-6 py-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Logo + copyright */}
                        <div className="text-center md:text-left">
                            <p className="text-lg font-bold mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                                <span className="gradient-text">J</span>aisurya
                            </p>
                            <p className="text-xs text-[var(--text-muted)]">
                                © {new Date().getFullYear()} All rights reserved.
                            </p>
                        </div>

                        {/* Nav Links */}
                        <ul className="flex items-center gap-6">
                            {footerLinks.map(link => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--text-muted)] hover:text-white hover:bg-[rgba(255,255,255,0.06)] transition-all duration-200"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Contact
