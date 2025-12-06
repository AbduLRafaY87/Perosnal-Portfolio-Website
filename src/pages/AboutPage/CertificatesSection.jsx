import React from 'react'
import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Users, Target, Lightbulb } from 'lucide-react';
import CertificateOne from "../../assets/images/certificateOne.png";
import CertificateTwo from "../../assets/images/certificateTwo.png";
import CertificateThree from "../../assets/images/certificateThree.jpeg";
import CertificateFour from "../../assets/images/certificateFour.jpeg";
import CertificateFive from "../../assets/images/certificateFive.jpeg";
import CertificateSix from "../../assets/images/certificateSix.jpeg";

const CertificatesSection = () => {
    const certData = [
        {
            img: CertificateFive,
            title: '1st Position in Web Dev Contest',
            date: 'September 2025',
            brief: 'Awarded 1st place in inter-school web development competition.'
        },
        {
            img: CertificateOne,
            title: 'MS Office Speacialist - 200',
            date: 'June 2025',
            brief: 'Certified in Microsoft Office proficiency.'
        },
        {
            img: CertificateFour,
            title: 'Best Student Ambassador',
            date: 'December 2024',
            brief: 'Awarded for outstanding contributions as a student ambassador.'
        },
        {
            img: CertificateSix,
            title: 'Young CEO Event',
            date: 'August 2025',
            brief: 'Attended the Young CEO leadership event.'
        }
        ,
        {
            img: CertificateTwo,
            title: 'Seeds Of Peace',
            date: 'February 2025',
            brief: 'Certificate of participation in peace-building programs.'
        },
        {
            img: CertificateThree,
            title: 'COPERNICUS',
            date: 'November 2025',
            brief: 'COPERNICUS certification'
        }
    ];

    return (
        <section className="certificationsSection">
            <div className="certificationsContainer">
                <motion.div
                    className="certificationsHeader"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2>My Certifications</h2>
                    <p>Credentials that validate my expertise.</p>
                </motion.div>

                <div className="certificationsGrid">
                    {certData.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            className="certificationCard"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <img src={cert.img} alt={cert.title} loading="lazy" />
                            <h3>{cert.title}</h3>
                            <span className="certDate">{cert.date}</span>
                            <p className="certBrief">{cert.brief}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CertificatesSection