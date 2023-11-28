"use client"
import Image from 'next/image'
import React from 'react'
import hand from './handWave.png'
//import handWave from '../ima'
import { motion as m } from 'framer-motion'
import stles from './about.module.css'

const about = () => {
  return (
    <div>
      {/* <m.img animate={{ x: 20 }} transition={{
        type: "smooth",
        repeatType: "mirror",
        duration: 2,
        repeat: Infinity,
      }} src='/images/handWave.png' width={25} height={25} alt='handWave' /> */}
      {/* / <Image src={hand} alt='handImg' width={20} height={20} /> */}
      <span className={stles.emoji}>&#128075;</span>
    </div>
  )
}

export default about