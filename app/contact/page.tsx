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
import submit from './submit.png'
import emailjs from '@emailjs/browser'
import { Button, Input } from 'antd';

const page = () => {
    const formRef = useRef<HTMLFormElement>(null);
    // const [contact, setContact] = useState<boolean>(false)
    const [yourName, setYourName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isPending, setIsPending] = useState(false)


    const { TextArea } = Input;
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //const feedBack = { yourName, email, message }
        setIsPending(true)
        // const currentForm = form.current
        // if (currentForm === null) return;
        emailjs.sendForm(
            "service_5lwfrko",
            "template_phymsvc",
            formRef.current ? formRef.current : "",
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
    }

    return (
        <div className={styles.wrapper}>
            <div>
                <h1 className={styles.contactTitle}>Let's discuss <br /> on something <mark style={{ color: "#AD2484", background: "#DCCFED" }}> cool </mark> together</h1>
                <p className={styles.interestText}>I'm interested in..</p>
                <Button  className={styles.interestBtns}   style={{ background: '#331C52' }} type='primary'>Ecommerce Website</Button>
                <Button  className={styles.interestBtns} style={{ border: "0.12rem solid #9B8DB3", color: "#331C52" }} type='primary'>Sass Website</Button> <br />
                <Button  className={styles.interestBtns} style={{ border: "0.12rem solid #9B8DB3", color: "#331C52" }} type='primary'>Landing Page</Button>
                <Button  className={styles.interestBtns} style={{ border: "0.12rem solid #9B8DB3", color: "#331C52" }} type='primary'>Portfolio</Button>
                <Button  className={styles.interestBtns} style={{ border: "0.12rem solid #9B8DB3", color: "#331C52" }} type='primary'>Blog Website</Button>
            </div>
            <div><form ref={formRef} onSubmit={sendEmail} className={styles.form}>
                {/* <p className={styles.closeModal} onClick={() => setContact(false)}>X</p>
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
                    {isPending && <button className={styles.submitBtn} type='submit'> Submitting ...</button>} */}
                <Input className={styles.input} onChange={(e) => setYourName(e.target.value)} name="user_name" placeholder='Your name' required />
                <Input className={styles.input} onChange={(e) => setEmail(e.target.value)} name="user_email" placeholder='Your email' required />
                <TextArea className={styles.textArea} onChange={(e) => setMessage(e.target.value)} name='message' placeholder='Your message' />
                {!isPending && <button className={styles.submitBtn} type='submit'>
                    <Image style={{ paddingRight: '0.5rem', color: 'white' }} src={submit} alt='submit' width={20} height={20} />
                    Submit</button>}
                {isPending && <Button type='primary' className={styles.submitBtn} > Submitting ...</Button>}
            </form>
                {/* </div>} */}
                <div className={styles.socials}>
                    <Link className={styles.socialLink} href='https://github.com/chiomaubaezuonu'>
                        <Image src={github} alt='github' />
                    </Link>
                    <Link className={styles.socialLink} href='https://www.linkedin.com/in/chioma-ubaezuonu-924b1214b/'>
                        <Image src={linkedin} alt='Linkedin' />
                    </Link>
                    <Link className={styles.socialLink} href='https://twitter.com/ChiomaPresh1029'>
                        <Image src={twitter} alt='twitter' />
                    </Link>
                    {/* <Image src={phone} className={styles.phone} alt='phone' />
                <Image src={mail} className={styles.mail} alt='email' /> */}
                </div>
            </div>
        </div >
    )
}

export default page 