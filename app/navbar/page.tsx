"use client"
import React, { useState } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import menu from './menu.svg'

const Navbar = () => {
    const [menuLinks, setMenuLinks] = useState<boolean>(false)
    return (
        <div className={styles.NavWrpper}>
            <div className={styles.navbar}>
                <Link href='/'><h3 className={styles.navLinks}>Home</h3></Link>
                <Link href='#aboutPage'><h3 className={styles.navLinks}>About</h3></Link>
                <Link href='#projectsPage'><h3 className={styles.navLinks}>Work</h3></Link>
                <Link href='#skillsPage'> <h3 className={styles.navLinks}>Skills</h3></Link>
                <Link href='#contactPage'> <h3 className={styles.navLinks}>Contact</h3></Link>
            </div>
            <div className={styles.menuList}>
                <div className={styles.menuListWrapper}>
                    <h1 className='text-2xl text-white ml-0'>ChomyDev</h1>
                    <Image className='ml-auto w-8' onClick={() => setMenuLinks(!menuLinks)} src={menu} alt='menu-icon' />
                </div>
                {menuLinks && <div className={styles.Links}>
                    <Link href='/' onClick={() => setMenuLinks(false)}><h3 className={styles.navLinks}>Home</h3></Link>
                    <Link href='#aboutPage' onClick={() => setMenuLinks(false)}><h3 className={styles.navLinks}>About</h3></Link>
                    <Link href='#projectsPage' onClick={() => setMenuLinks(false)}><h3 className={styles.navLinks}>Work</h3></Link>
                    <Link href='#skillsPage' onClick={() => setMenuLinks(false)}> <h3 className={styles.navLinks}>Skills</h3></Link>
                    <Link href='#contactPage' onClick={() => setMenuLinks(false)}> <h3 className={styles.navLinks}>Contact</h3></Link>
                </div>}
            </div>
        </div>
    )
}

export default Navbar