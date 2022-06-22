import React from 'react'
import { Formik, Form } from 'formik'
import EmailForm from '../../Component/EmailForm'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import {
  InstagramOutlined,
  FacebookOutlined,
  GithubOutlined

} from '@ant-design/icons';

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }
  const fadeDown = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 }
  }
  return (
    <section id='contact' className='container'>
      <motion.div
        variants={fadeDown}
        initial='hidden'
        animate='visible'
        transition={{ duration: 1.2 }}
        className='tittle-area' >
        <h2 className='tittle' >Contact</h2>
        <svg width="49" height="17" data-depth="0.5" class="layer p6" xmlns="http://www.w3.org/2000/svg" ><g fill="#FF4C60" fill-rule="evenodd"><path d="M.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C23.1175 5.50106 25.5 10.78292 25.5 16.5H23c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0C4.90625 7.70116 3 11.92697 3 16.5H.5z"></path><path d="M23.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C46.1175 5.50106 48.5 10.78292 48.5 16.5H46c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0-3.09375 2.28651-5 6.51232-5 11.08535h-2.5z"></path></g></svg>
      </motion.div>
      <div className='contact-main pb-10 grid grid-cols-12'>
        <motion.div
          variants={fadeUp}
          initial='hidden'
          animate='visible'
          transition={{ duration: 1.2 }}
          className='pl-8 md:pl-0 col-span-12 mb-5 md:mb-0 md:col-span-4'>
          <h3>Let's talk about everything!</h3>
          <p>You can also send me 
          <a className='contact-email' href="mailto:ngotrangiabao2003@gmail.com"> email </a>
            
            right here!</p>
        </motion.div>
        <div className='form col-span-12 md:col-span-8'>
          <EmailForm />
        </div>
      </div>

    </section >

  )
}

