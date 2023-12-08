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
        {/* <m.img animate={{ x: 20 }} transition={{
        type: "smooth",
        repeatType: "mirror",
        duration: 2,
        repeat: Infinity,
      }} src='/images/handWave.png' width={25} height={25} alt='handWave' /> */}
        {/* / <Image src={hand} alt='handImg' width={20} height={20} /> */}
        {/* <span >&#128075;</span> */}
        <span className={styles.emoji} style={{fontSize:'2rem'}}> Hi, I am Chioma Precious.  👋 </span>
        <p className={styles.about}>A skilled frontend web developer</p>
        <p>My tech stack at work is Html5, Css, Javascript, Next.js, TypeScript, Firebase and SASS.</p>
      </div>
    </div >
  )
}

export default about