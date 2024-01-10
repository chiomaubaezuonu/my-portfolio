"use client"
import { motion as m } from 'framer-motion'
import Image from 'next/image'
import me2 from './me2.png'
import styles from './landing.module.css'
import hand from './handWave.png'
import data from '../projects/data'
import Link from 'next/link'
import { Divider } from 'antd'
import mySkills from '../skills/data'
import menu from './menuIcon.svg'
import React, { useRef, useState } from 'react'
import github from '../contact/github.svg'
import twitter from '../contact/twitter.svg'
import linkedin from '../contact/linkedin.svg'
import submit from '../contact/submit.png'
import emailjs from '@emailjs/browser'
import { Button, Input } from 'antd';
import { clsx } from 'clsx';

type ProjectType = {
    data: {
        id: number,
        img: string
    }[]
}
const LandingPage = () => {
    const formRef = useRef<HTMLFormElement>(null);
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
        <div>
            <div className={styles.landingPageWrapper}>
                {/* flex justify-between px-48 pt-30 h-screen */}
                <div className={styles.landingPage}>
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
                        whileHover={{ x: 40 }}
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
                <m.div
                    className={styles.backgroundDiv}
                    initial={{ opacity: 0, scale: 2 }}
                    animate={{ opacity: 1, scale: 1, }}
                    transition={{ ease: "easeIn", duration: 0.2, delay: 0.5 }}>
                    <Image className={styles.background} src={me2} alt="my-profile" />
                </m.div>

            </div>
            {/* about page */}
            <div className={styles.absolute}>
                <div className={styles.aboutDiv}>
                    <span className={styles.emoji}> Hi, I'm Chioma Precious👋 </span>
                    <p className={styles.about}>I am a skilled frontend web developer, I build exceptional and accessible digital experiences for the web.
                        My tech stack at work is Html5, Css, Javascript, Next.js, TypeScript, Firebase and SASS.
                    </p>
                    {/* <p className={styles.about}></p> */}
                </div>
            </div >

            {/* Project page */}
            <div className={styles.wrapper}>
                <h1 className={styles.title}>My Projects</h1>
                <p className={styles.projectText}>Here are a few projects that I've worked on. Want to see more? <Link style={{ color: 'blue' }} href='/https://mail.google.com/mail/'>Email me.</Link></p>
                <div className={styles.projectsContainer}>
                    {data.map((project) => (

                        <div key={project.id} className={styles.projectCard}>
                            <img className={styles.projectImg} src={project.img} alt="project" />
                            <div className={styles.overlay}>
                                <h1 className={styles.projectName}>{project.title}</h1>
                            </div>
                            <div className={styles.innerOverlay}>
                                <p style={{ color: 'white' }}>{project.desc}</p>
                                <a href="https://saveyourtodolist.netlify.app/"><button className={styles.websiteButton}>{project.link}</button></a></div>
                            <div className={styles.content}>
                                <button className={styles.websiteButton}>Visit Website</button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
            {/* Skills page */}
            <div className={styles.skillsWrapper}>
                <div className={styles.skillCards}>
                    <h1 className={styles.skillTitle}>My Skills</h1>
                    {mySkills.map(skill => {
                        return (
                            <div className={styles.card} key={skill.id}>
                                {/* <Image src={skill.img} alt="html5" width={60} height={60} /> */}
                                <img className={styles.skillIcons} src={skill.img} alt="skillLogo" />
                                <h2 className={styles.skillName}>{skill.skillName}</h2>
                                <h2 className={styles.skillLevel}>{skill.level}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* contact page */}
            <div className={styles.contactWrapper}>
                <div className={styles.interestWrapper}>
                    <h1 className={styles.contactTitle}>Let's discuss <br /> on something <mark style={{ color: "#AD2484", background: "#DCCFED" }}> cool </mark> together</h1>
                    <p className={styles.interestText}>I'm interested in..</p>
                    <Button className={styles.interestBtns} style={{ background: '#331C52' }} type='primary'>Ecommerce Website</Button>
                    <Button className={styles.interestBtns} style={{ border: "0.12rem solid #9B8DB3", color: "#331C52" }} type='primary'>Sass Website</Button> <br />
                    <Button className={styles.interestBtns} style={{ border: "0.12rem solid #9B8DB3", color: "#331C52" }} type='primary'>Landing Page</Button>
                    <Button className={styles.interestBtns} style={{ border: "0.12rem solid #9B8DB3", color: "#331C52" }} type='primary'>Portfolio</Button>
                    <Button className={styles.interestBtns} style={{ border: "0.12rem solid #9B8DB3", color: "#331C52" }} type='primary'>Blog Website</Button>
                    {/* Just trying out clsx below will delete later */}
                    {/* <Button type='primary' className={
                        clsx(
                            'text-blue-700',

                            {
                                'bg-red-500': yourName !== "",
                                'bg-green-400': yourName === "",
                            },
                        )}
                    >Test Clsx</Button> */}
                </div>
                <div>
                    <h1 className={styles.smallScreenContactTitle}>Let's discuss on something <mark style={{ color: "#AD2484", background: "#DCCFED" }}> cool </mark> together</h1>
                    <form ref={formRef} onSubmit={sendEmail} className={styles.form}>
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
        </div >
    )
}

export default LandingPage