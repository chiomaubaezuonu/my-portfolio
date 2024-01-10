"use client"
import React, { useState } from 'react'
import styles from './projects.module.scss'
import data from './data'
import Link from 'next/link'
import { Button, Divider } from 'antd'

type ProjectType = {
    data: {
        id: number,
        img: string
    }[]
}

const page = () => {

    const [overlayText, setOverlayText] = useState(false)

    return (
        <div>
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
                                {/* <button className={styles.websiteButton}>Visit Website</button> */}
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default page