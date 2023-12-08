"use client"
import React, { useRef, useState } from 'react'
import styles from './contact.module.css'
import Image from 'next/image'
import github from './github.svg'
import twitter from './twitter.svg'
import linkedin from './linkedin.svg'
import phone from './phone.png'
import mail from './email.svg'
import Link from 'next/link'
import submit from './submit.svg'
import emailjs from '@emailjs/browser'

const page = () => {
    const form = useRef();
    const [contact, setContact] = useState<boolean>(false)
    const [yourName, setYourName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isPending, setIsPending] = useState(false)



    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //const feedBack = { yourName, email, message }
        setIsPending(true)
        // const currentForm = form.current
        // if (currentForm === null) return;
        emailjs.sendForm(
            "service_5lwfrko",
            "template_phymsvc",
            form.current ? form.current : "",
            "BihswsOiiYV8MHFCU"
        )
            .then(
                (result) => {
                    console.log(result.text)
                    setIsPending(false)
                    setYourName("")
                    setEmail("")
                    setMessage("")
                },
                (error) => {
                    console.log(error.text);
                }
            )
        // fetch('http://localhost:8000/contact', {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(feedBack)
        // }).then(() => {
        //     console.log("sent")
        //     setIsPending(false)
        // })
    }

    return (
        <div className={styles.wrapper}>
            {contact && <div className={styles.modal}>
                <form ref={form} onSubmit={sendEmail} className={styles.form}>
                    <p className={styles.closeModal} onClick={() => setContact(false)}>X</p>
                    <input className={styles.input} name="user_name" value={yourName}
                        onChange={(e) => setYourName(e.target.value)}
                        type="text" placeholder='Your name' required />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input} name="user_email" value={email} type="email" placeholder='Your email' />
                    <textarea name="message" onChange={(e) => setMessage(e.target.value)} value={message} className={styles.textArea} placeholder='Your message'></textarea>
                    {!isPending && <button className={styles.submitBtn} type='submit'>
                        <Image style={{ paddingRight: '0.5rem' }} src={submit} alt='submit' width={20} height={20} />
                        Submit</button>}
                    {isPending && <button className={styles.submitBtn} type='submit'> Submitting ...</button>}
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