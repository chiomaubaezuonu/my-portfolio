"use client"
import { motion as m } from 'framer-motion'
import Image from 'next/image'
import me2 from '../me2.jpeg'
import styles from './landing.module.css'


const LandingPage = () => {
    return (
        <div className='flex justify-between px-14 bg-black h-screen'>
            <div className='landing-page'>
                <m.h1
                    initial={{ opacity: 0 }}
                    animate={{ y: -25, opacity: 1, scale: 1 }}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                    className={`${styles.whiteText} ${styles.bigText}`}>Hello.
                </m.h1>
                <m.h1
                    initial={{ opacity: 0 }}
                    animate={{ y: -25, opacity: 1, scale: 1 }}
                    transition={{ ease: "easeOut", delay: 0.5, duration: 0.5 }}
                    className={styles.bigText}>I am
                </m.h1>
                <m.h1
                    initial={{ opacity: 0 }}
                    animate={{ y: -25, opacity: 1, scale: 1 }}
                    transition={{ ease: "easeOut", delay: 1, duration: 1 }}
                    className={styles.bigText}>Chioma
                </m.h1>
            </div>
            {/* <motion.div className='bg-orange-500 p-6 border-r-emerald-500'
                animate={{ y: 100 }}
                transition={{ ease: "easeIn", duration: 2 }}
            >
                Hello
            </motion.div> */}
            <m.div animate={{ y: -20 }}
                transition={{ ease: "easeIn", duration: 2 }}>
                <Image src={me2} alt="my-profile" width={300} height={700} />
            </m.div>

        </div>
    )
}

export default LandingPage