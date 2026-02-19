import React, { useEffect, useRef, useState } from 'react'
import './Certificate.css' // Import the CSS file

const Certification = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const cardsRef = useRef([]);

    // Sample certificate data - replace with your actual certificates
    const certificates = [
        {
            id: 1,
            title: "React Developer Certification",
            issuer: "Meta",
            date: "2024",
            image: "Javascript_certification.jpg"
        },
        {
            id: 2,
            title: "Full Stack Development",
            issuer: "Coursera",
            date: "2023",
            image: "internship_certification.jpg"
        },
        {
            id: 3,
            title: "JavaScript Advanced",
            issuer: "Udemy",
            date: "2023",
            image: "website_certificate_page-0001.jpg"
        }
    ];

    useEffect(() => {
        const observers = cardsRef.current.map((card, index) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setVisibleCards((prev) => [...new Set([...prev, index])]);
                        }
                    });
                },
                { threshold: 0.2 }
            );

            if (card) observer.observe(card);
            return observer;
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    return (
        <div className="certification-section">
            <h1 className="section-title">Certifications</h1>
            <div className="certificates-container">
                {certificates.map((cert, index) => (
                    <div
                        key={cert.id}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className={`certificate-card ${visibleCards.includes(index) ? 'visible' : ''}`}
                    >
                        <div className="certificate-image-wrapper">
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="certificate-image"
                            />
                        </div>
                        <div className="certificate-info">
                            <h3>{cert.title}</h3>
                            <p className="issuer">{cert.issuer}</p>
                            <p className="date">{cert.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certification;