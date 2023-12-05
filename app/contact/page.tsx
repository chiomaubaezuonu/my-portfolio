"use client"
import React, { useState } from 'react'
import styles from './contact.module.css'
import Image from 'next/image'
import github from './github.svg'
import twitter from './twitter.svg'
import linkedin from './linkedin.svg'
import phone from './phone.png'
import mail from './email.svg'
import Link from 'next/link'

const page = () => {
    const [contact, setContact] = useState<boolean>(false)
    if (contact) {
        console.log("yes")
    }
    return (
        <div className={styles.wrapper}>
            {contact && <div className={styles.modal}>
                <form action="submit">
                    <p className={styles.closeModal} onClick={() => setContact(false)}>X</p>
                    <input type="text" placeholder='Name' />
                    <textarea placeholder='Comment'></textarea>
                </form>
            </div>}
            <h1 className={styles.title}>Let's work together</h1>
            <p className={styles.text}>I am always open to new opportunities</p>
            <button onClick={() => setContact(!contact)} className={styles.button}>Contact me</button>
            <div className={styles.socials}>
                <Link href='https://github.com/chiomaubaezuonu'>
                    <Image src={github} alt='github' />
                </Link>
                <Link href='https://www.linkedin.com/in/chioma-ubaezuonu-924b1214b/'>
                    <Image src={linkedin} alt='Linkedin' />
                </Link>
                <Link href='https://twitter.com/ChiomaPresh1029'>
                    <Image src={twitter} alt='twitter' />
                </Link>
                <Image src={phone} className={styles.phone} alt='phone' />
                <Image src={mail} className={styles.mail} alt='email' />
            </div>
        </div>
    )
}

export default page