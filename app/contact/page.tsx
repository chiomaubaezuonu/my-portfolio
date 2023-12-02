import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'
import github from './github.svg'
import twitter from './twitter.svg'
import linkedin from './linkedin.jpg'
import phone from './phone.jpg'
import mail from './email.png'


const page = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Let's work together</h1>
            <p className={styles.text}>I am always open to new opportunities</p>
            <div className={styles.socials}>
                <Image src={github} alt='github' />
                <Image src={twitter} alt='twitter' />
                <Image src={linkedin} alt='Linkedin' width={50} height={50} />
                <Image src={phone} style={{background: '#E8FAFB'}} alt='phone' width={50} height={50} />
                <Image src={mail} style={{background: '#E8FAFB'}} alt='email' width={50} height={50} />
            </div>
        </div>
    )
}

export default page