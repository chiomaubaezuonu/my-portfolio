"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import me from '../me.jpeg'


const LandingPage = () => {
    return (
        <div className='flex justify-between'>
            <div className='landing-page'>
                <motion.h1 animate={{ y: 150 }} className='text-white'>HELLO</motion.h1><br />
                <motion.h1 animate={{ y: -120 }} className='text-red-600'>I AM</motion.h1><br />
                <motion.h1 animate={{ y: -100 }} className='text-red-600'>CHIOMA</motion.h1><br />
            </div>
            {/* <motion.div className='bg-orange-500 p-6 border-r-emerald-500'
                animate={{ y: 100 }}
                transition={{ ease: "easeIn", duration: 2 }}
            >
                Hello
            </motion.div> */}
            <motion.div  animate={{ y: -20 }}
                transition={{ ease: "easeIn", duration: 2 }}>
                <Image src={me} alt="my-profile" width={100} height={70} />
            </motion.div>

        </div>
    )
}

export default LandingPage