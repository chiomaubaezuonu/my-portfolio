import React from 'react'
import styles from './projects.module.css'
import data from './data'
import Link from 'next/link'

type ProjectType = {
    data: {
        id: number,
        img: string
    }[]
}
const page = () => {
    return (
        <div>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>My Projects</h1>
                <p className={styles.projectText}>Here are a few projects that I've worked on. Want to see more? <Link style={{color: 'blue'}} href='/https://mail.google.com/mail/'>Email me.</Link></p>
                <div className={styles.projectsContainer}>
                    {data.map((project) => (

                        <div key={project.id} className={styles.projectCard}>
                            <img className={styles.projectImg} src={project.img} alt="project" width={450} height={450} />
                            <div className={styles.overlay}>
                                <div className={styles.content}>
                                    <button className={styles.websiteButton}>Visit Website</button>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default page