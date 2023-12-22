import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link href='/'><h3 className={styles.navLinks}>Home</h3></Link>
            <Link href='/about'><h3 className={styles.navLinks}>About</h3></Link>
            <Link href='/projects'><h3 className={styles.navLinks}>Work</h3></Link>
            <Link href='/contact'> <h3 className={styles.navLinks}>Contact</h3></Link>
        </div>
    )
}

export default Navbar