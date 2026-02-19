import React from 'react'
import Socialmedia from '../components/Socialmedia'
import Button from '../components/Button'
import "../app.css"
import SplitText from '../components/Text'
import TextType from '../components/Typing'
import LogoLoop from '../components/Logo_loop'

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import About from './About'

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
// const imageLogos = [
//   { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
//   { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
//   { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
// ];


// import GooeyNav from '../components/Navbar'

const Home = () => {
  return (

    <>
    
      <div className="min-h-screen w-full bg-black flex flex-col lg:flex-row overflow-hidden">
        {/* <GooeyNav/> */}

        {/* Left: Content panel */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-start p-6 sm:p-5 md:p-1 lg:p-10 xl:p-15 gap-6 sm:gap-8 text-black">
          {/* <h1 className='text-5xl'>I AM JAISURYA</h1> */}

          <SplitText
            text="I AM JAISURYA"
            className="text-5xl font-semibold text-center"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            // onLetterAnimationComplete={handleAnimationComplete}
            showCallback
          />

          <TextType
            text={["MERN Stack Developer", "Frontend Developer", "Backend Developer"]}
            typingSpeed={50}
            initialDelay={0}
            pauseDuration={2000}
            deletingSpeed={30}
            loop={true}
            className="text-xl sm:text-xl md:text-xl lg:text-3xl xl:text-2xl   "
            showCursor={true}
            hideCursorWhileTyping={false}
            cursorCharacter="|"
            cursorClassName="cursor"
            cursorBlinkDuration={0.5}
            textColors={["#691a1aff", "#0004ffff", "#711a68ff"]}
            variableSpeed={{
              min: 50,
              max: 100
            }}
            onSentenceComplete={(text, index) => {
              console.log(`Sentence ${index} completed: ${text}`);
            }}
            startOnVisible={true}
            reverseMode={false}
          />
          <p className="text-xl sm:text-xl md:text-xl lg:text-3xl xl:text-2xl   ">
            Passionate MERN Stack Developer crafting scalable web apps and data-driven solutions.
            Building innovative quiz systems and modern React UIs at Freshworks STS Software Academy.
          </p>
          <Button />
          <Socialmedia />
        </div>




        {/* Right: Visual panel */}
        <div className="w-full lg:w-1/2 bg-white flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold p-6 sm:p-10">
          <img className='rounded-[50px]  ' src="Gemini_Generated_Image_ykk5bqykk5bqykk5.png" alt="" />
        </div>
      </div>



      <About/>
      <section className='bg-black text-white p-10' style={{ height: '300px', position: 'relative', overflow: 'hidden' }}>

        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          fadeOut
          useCustomRender={false}
        />



      </section>


    </>
  )
}

export default Home
