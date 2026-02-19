import React from 'react';
// import Lanyard from '../components/Lanyard';
import Certification from '../components/Certification';
 
 
 

const About = () => {
    return (
        <section id="about" className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
            {/* <Lanyard cameraPos={[0, 0, 20]} transparent={true} />; */}
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Photo */}
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
                    <img
                        src="DSC00815.jpg" // or import { mePhoto } from "..."; src={mePhoto}
                        alt="Your Name"
                        className="w-full h-full object-cover"
                    />
           
                </div>


                {/* About me text */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        I'm a full‑stack developer trainee from Chennai, currently learning the MERN stack and building projects like LMS platforms and quiz/exam management systems. I enjoy turning ideas into interactive web applications and continuously improving my skills through hands‑on practice and real‑world projects.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed mt-4">
                        When I'm not coding, I'm exploring new tutorials, solving coding challenges, and planning my next portfolio project.
                    </p>
                </div>
                
            </div>
            <Certification/>
            
        </section>
    );
};

export default About;
