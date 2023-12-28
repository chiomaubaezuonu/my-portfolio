import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import menu from './menu.svg'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Image className={styles.menuIcon} src={menu} alt='menu icon' />
            <Link href='/'><h3 className={styles.navLinks}>Home</h3></Link>
            <Link href='/about'><h3 className={styles.navLinks}>About</h3></Link>
            <Link href='/projects'><h3 className={styles.navLinks}>Work</h3></Link>
            <Link href='/contact'> <h3 className={styles.navLinks}>Contact</h3></Link>
        </div>
    )
}

export default Navbar