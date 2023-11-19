"use client"
import { motion as m } from 'framer-motion'
import Image from 'next/image'
import me2 from '../me2.jpeg'
import styles from './landing.module.css'


const LandingPage = () => {
    return (
        <div className='flex justify-between px-14 bg-black h-screen'>
            <div className='landingPage'>
                <m.h1
                    initial={{ opacity: 0 }}
                    animate={{ y: -25, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.2 }}
                    whileHover={{ x: 40 }}
                    className={`${styles.firstText} ${styles.whiteText} ${styles.bigText}`}>
                </m.h1>
                <m.h1
                    initial={{ opacity: 0 }}
                    animate={{ y: -25, opacity: 1, scale: 1 }}
                    whileHover={{ x: 40}}
                    transition={{ ease: "easeOut", delay: 0.25, duration: 0.5 }}
                    className={`${styles.secondText} ${styles.bigText}`}>
                </m.h1>
                <m.h1
                    initial={{ opacity: 0 }}
                    animate={{ y: -25, opacity: 1, scale: 1 }}
                    transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
                    whileHover={{ x: 40 }}
                    className={`${styles.thirdText} ${styles.bigText}`}>

                </m.h1>
            </div>
            <m.div animate={{ y: -20 }}
                transition={{ ease: "easeIn", duration: 2 }}>
                <Image className={styles.background} src={'/me2.jpeg'} alt="my-profile" width={300} height={700} />
            </m.div>

        </div>
    )
}

export default LandingPage