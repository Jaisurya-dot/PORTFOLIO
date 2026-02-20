import React from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
    {
        title: 'LMS Platform',
        description: 'A full-featured Learning Management System with course creation, module management, file uploads, and student tracking. Built with React frontend and Node.js backend.',
        tags: ['React', 'Node.js', 'MongoDB', 'Express'],
        github: 'https://github.com/',
        live: '#',
    },
    {
        title: 'Quiz & Exam System',
        description: 'Comprehensive online examination platform with timed tests, auto-grading, OTP verification, and real-time result analytics for students and admins.',
        tags: ['MERN', 'JWT Auth', 'REST API', 'Tailwind'],
        github: 'https://github.com/',
        live: '#',
    },
    {
        title: 'Portfolio Website',
        description: 'This very portfolio — a modern, dark-themed website with GSAP animations, Three.js accents, glassmorphism design, and responsive layout.',
        tags: ['React', 'GSAP', 'Tailwind', 'Three.js'],
        github: 'https://github.com/',
        live: '#',
    },
    {
        title: 'Hand Gesture Controller',
        description: 'Python-based application using OpenCV and MediaPipe for hand tracking to control mouse cursor, perform clicks, and scroll via hand gestures.',
        tags: ['Python', 'OpenCV', 'MediaPipe', 'AI/ML'],
        github: 'https://github.com/',
        live: null,
    },
]

const Projects = () => {
    return (
        <section id="projects" className="section-padding bg-[var(--bg-primary)]">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold tracking-widest uppercase text-[var(--accent-violet)] mb-3">Portfolio</p>
                    <h2 className="text-4xl sm:text-5xl font-bold gradient-text" style={{ fontFamily: 'var(--font-heading)' }}>
                        Featured Projects
                    </h2>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="group relative rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-7 transition-all duration-500 hover:border-[rgba(139,92,246,0.25)] hover:bg-[rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(139,92,246,0.08)]"
                            style={{
                                opacity: 0,
                                animation: `fade-in-up 0.6s ease forwards`,
                                animationDelay: `${index * 0.15}s`,
                            }}
                        >
                            {/* Gradient accent line */}
                            <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[var(--accent-violet)] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

                            <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                                {project.title}
                            </h3>
                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-[rgba(139,92,246,0.1)] text-[var(--accent-violet)] border border-[rgba(139,92,246,0.15)]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex items-center gap-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-white transition-colors duration-200"
                                    >
                                        <FiGithub size={16} />
                                        <span>Code</span>
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-violet)] transition-colors duration-200"
                                    >
                                        <FiExternalLink size={16} />
                                        <span>Live Demo</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
