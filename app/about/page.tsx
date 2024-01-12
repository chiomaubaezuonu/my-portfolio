"use client"
import Image from 'next/image'
import React from 'react'
import hand from './handWave.png'
//import handWave from '../ima'
import { motion as m } from 'framer-motion'
import styles from './about.module.css'
// import '/global.css'

const about = () => {
  return (
    <div className={styles.absolute}>
      <div className={styles.aboutDiv}>
        <span className={styles.emoji}> Hi, I'm Chioma Precious `👋` </span>
        <p className={styles.about}>I am a skilled frontend web developer, I build exceptional and accessible digital experiences for the web.
        My tech stack at work is Html5, Css, Javascript, Next.js, TypeScript, Firebase and SASS.
        </p>
        {/* <p className={styles.about}></p> */}
      </div>
    </div >
  )
}

export default about