import React from 'react'
import Navbar from '../components/Navbar'
import Socialmedia from '../components/Socialmedia'
import Button from '../components/Button'
import "../app.css"
import SplitText from '../components/Text'
import TextType from '../components/Typing'
import LogoLoop from '../components/Logo_loop'
import Projects from '../components/Projects'
import Certification from '../components/Certification'
import Contact from '../components/Contact'
import About from './About'

import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress,
  SiJavascript, SiPython, SiTailwindcss, SiTypescript,
  SiGit, SiThreedotjs
} from 'react-icons/si'

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org" },
  { node: <SiPython />, title: "Python", href: "https://python.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://typescriptlang.org" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiThreedotjs />, title: "Three.js", href: "https://threejs.org" },
]

const Home = () => {
  return (
    <>
      <Navbar />

      {/* ─── Hero Section ─────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen w-full flex flex-col lg:flex-row items-center overflow-hidden"
        style={{ background: 'var(--bg-primary)' }}
      >
        {/* Background gradient orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]" style={{ background: 'var(--accent-violet)' }} />
        <div className="absolute bottom-[-15%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]" style={{ background: 'var(--accent-blue)' }} />

        {/* Left: Content */}
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center items-start px-6 sm:px-10 lg:px-16 xl:px-20 pt-28 pb-12 lg:pt-0 lg:pb-0 gap-6">
          {/* Greeting tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)]">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium text-[var(--text-secondary)]">Available for opportunities</span>
          </div>

          <SplitText
            text="I AM JAISURYA"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            showCallback
          />

          <TextType
            text={["MERN Stack Developer", "Frontend Engineer", "Backend Developer", "Problem Solver"]}
            typingSpeed={50}
            initialDelay={0}
            pauseDuration={2000}
            deletingSpeed={30}
            loop={true}
            className="text-xl sm:text-2xl lg:text-3xl font-medium"
            showCursor={true}
            hideCursorWhileTyping={false}
            cursorCharacter="|"
            cursorClassName="text-[var(--accent-violet)]"
            cursorBlinkDuration={0.5}
            textColors={["#8b5cf6", "#3b82f6", "#06b6d4", "#ec4899"]}
            variableSpeed={{ min: 50, max: 100 }}
            startOnVisible={true}
            reverseMode={false}
          />

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg">
            Passionate MERN Stack Developer crafting scalable web apps and data-driven solutions.
            Building innovative systems and modern React UIs.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
            <Button text="Get in Touch" href="#contact" />
            <Socialmedia />
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
          <div className="relative group">
            {/* Glow */}
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-[var(--accent-violet)] via-[var(--accent-blue)] to-[var(--accent-cyan)] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-700" />
            <img
              className="relative rounded-[2rem] w-full max-w-md shadow-2xl animate-float border border-[rgba(255,255,255,0.08)]"
              src="Gemini_Generated_Image_ykk5bqykk5bqykk5.png"
              alt="Jaisurya"
            />
          </div>
        </div>
      </section>

      {/* ─── About Section ────────────────────────────────── */}
      <About />

      {/* ─── Projects Section ─────────────────────────────── */}
      <Projects />

      {/* ─── Tech Stack Marquee ───────────────────────────── */}
      <section className="py-16 overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--accent-violet)] mb-2">Technologies</p>
          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            Tools I Work With
          </h2>
        </div>
        <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="left"
            logoHeight={40}
            gap={50}
            hoverSpeed={0}
            fadeOut
            fadeOutColor="var(--bg-secondary)"
            useCustomRender={false}
          />
        </div>
      </section>

      {/* ─── Certifications Section ───────────────────────── */}
      <section id="certifications" style={{ background: 'var(--bg-primary)' }}>
        <Certification />
      </section>

      {/* ─── Contact & Footer Section ─────────────────────── */}
      <Contact />
    </>
  )
}

export default Home
