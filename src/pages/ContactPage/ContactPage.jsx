import React from 'react'
import { useState, useEffect } from 'react'
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react'
// import PageBanners from '../components/layout/PageBanners'
// import BreadCrumb from '../components/ui/BreadCrumb'
// import CallToAction from '../components/common/CallToAction'
// import TestimonialCarousel from '../components/layout/Testimonial'
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import "../../styling/contactStyling.css"

const ContactPage = () => {

  const [state, handleSubmit] = useForm("xgvklzvv");

  const goToTop = () => {
    window.scrollTo(0, 0);
  }
  return (
    <div onLoad={goToTop()} className="contactPage">
      {/* <PageBanners label="Contact Us" /> */}
      <section className="contactSec">
        <div className="left">
          {/* <BreadCrumb label="Get in touch" /> */}
          <h3>Always ready to help and answer your questions</h3>
          <p>Whether you have a project in mind, want to collaborate, or just want to say hello — I'd love to hear from you. Let's create something amazing together.</p>
          
          <div className="moreinfo">
            <motion.div 
              className="info"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Mail size={24} />
              <div>
                <h4>Email</h4>
                <a href="mailto:hello.chatriwala@gmail.com">ars.chatriwala@gmail.com</a>
              </div>
            </motion.div>

            <motion.div 
              className="info"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Phone size={24} />
              <div>
                <h4>Phone</h4>
                <a href="tel:+923307029563">+92 (330) 7029563</a>
              </div>
            </motion.div>

            {/* <motion.div 
              className="info"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Clock size={24} />
              <div>
                <h4>Response Time</h4>
                <p>Usually responds within 24 hours</p>
              </div>
            </motion.div> */}

            <motion.div 
              className="info"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4>Follow Us</h4>
              <div className="socialIcons">
                <a href="https://facebook.com/rafay.guides" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={16} /></a>
                <a href="https://twitter.com/rafay_guides" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={16} /></a>
                <a href="https://instagram.com/rafay.guides" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={16} /></a>
                <a href="https://linkedin.com/in/abdulrafaychatriwala" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="right"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Get In Touch</h2>
          <p>Tell us about your project and we'll get back to you with ideas and a quote.</p>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder='Full Name' required />
            <input type="email" name="email" placeholder='Email' required />
            <input type="text" name="subject" placeholder='Subject' />
            <textarea name="message" id="message" placeholder='Message' rows="10" required></textarea>
            <button type='submit' disabled={state.submitting}>
              {state.submitting ? 'Sending...' : 'Send a Message'}
            </button>
            {state.succeeded && <p className="success-message">✓ Thanks for your message! We'll get back to you soon.</p>}
            {state.errors && state.errors.length > 0 && (
              <p className="error-message">✗ Sorry, there was an error. Please try again.</p>
            )}
          </form>
        </motion.div>
      </section>
      {/* <TestimonialCarousel /> */}
      {/* <CallToAction /> */}
    </div>
  )
}

export default ContactPage