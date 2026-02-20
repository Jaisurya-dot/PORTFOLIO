import React from 'react';
import Certification from '../components/Certification';

const skills = [
    'React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'Python',
    'Tailwind CSS', 'Git', 'REST APIs', 'Three.js', 'GSAP'
]

const About = () => {
    return (
        <section id="about" className="section-padding bg-[var(--bg-secondary)]">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold tracking-widest uppercase text-[var(--accent-violet)] mb-3">Who I Am</p>
                    <h2 className="text-4xl sm:text-5xl font-bold gradient-text" style={{ fontFamily: 'var(--font-heading)' }}>
                        About Me
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                    {/* Photo */}
                    <div className="shrink-0">
                        <div className="relative group">
                            {/* Glow ring */}
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[var(--accent-violet)] via-[var(--accent-blue)] to-[var(--accent-cyan)] opacity-50 blur-md group-hover:opacity-75 transition-opacity duration-500" />
                            <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-[rgba(255,255,255,0.1)]">
                                <img
                                    src="DSC00815.jpg"
                                    alt="Jaisurya"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="glass-strong rounded-2xl p-8 mb-8">
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
                                I'm a full-stack developer trainee from Chennai, currently learning the MERN stack and building projects like LMS platforms and quiz/exam management systems.
                            </p>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                I enjoy turning ideas into interactive web applications and continuously improving my skills through hands-on practice and real-world projects at{' '}
                                <span className="text-white font-medium">Freshworks STS Software Academy</span>.
                            </p>
                        </div>

                        {/* Skill Tags */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-2">
                            {skills.map((skill, i) => (
                                <span
                                    key={skill}
                                    className="px-3.5 py-1.5 text-xs font-medium rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] text-[var(--text-secondary)] hover:text-white hover:border-[rgba(139,92,246,0.3)] hover:bg-[rgba(139,92,246,0.08)] transition-all duration-300"
                                    style={{
                                        opacity: 0,
                                        animation: 'fade-in-up 0.4s ease forwards',
                                        animationDelay: `${i * 0.05}s`,
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
