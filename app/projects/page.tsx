// "use client"
// import React from 'react'
// import styles from './projects.module.scss'
// import data from './data'
// import Link from 'next/link'
// import { Button, Divider } from 'antd'
// import chat2 from "./chat2.svg"
// import Image from 'next/image'
// type ProjectType = {
//     data: {
//         id: number,
//         img: string
//     }[]
// }

// const Page = () => {

//     return (
//         <div>
//             <div className={styles.wrapper}>
//                 <h1 className={styles.title}>My Projects</h1>
//                 <p className={styles.cardText}>Here are a few projects that I've worked on. Want to see more? <Link style={{ color: 'blue' }} href='/https://mail.google.com/mail/'>Email me.</Link></p>
//                 <div className={styles.cardsContainer}>
//                     {data.map((card) => (

//                         <div key={card.id} className={styles.projectCard}>
//                             <img className={styles.cardImg} src={card.img} alt="card image" />
//                             <div className={styles.overlay}>
//                                 <div className='flex'>
//                                     <img src={card.logo} alt='chat icon' className={styles.logo} />
//                                     <h1 className={styles.cardName}>{card.title}</h1>
//                                 </div>
//                             </div>
//                             <div className={styles.innerOverlay}>
//                                 <p className='text-white text-center'>{card.desc}</p>
//                                 <a href={card.link}><button className={styles.websiteButton}>{card.websiteLink}</button></a>
//                             </div>
//                         </div>

//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Page