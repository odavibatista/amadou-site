'use client'
import Link from 'next/link';
import styles from './styles.module.scss';
import { useEffect } from 'react'

export default function Footer() {
    function getLanguage() {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('portuguese') === null) {
                localStorage.setItem('portuguese', true)
            }
            return JSON.parse(localStorage.getItem('portuguese'))
        }
    }

    const portuguese = getLanguage()

    return(
        <section className={styles.footer}>
            <Link className={styles.navBarBrand + " navbar-brand"} href={'/'}>
                <img src="/gambia.png" alt="" className={styles.navImage + " navImage"} />
                <p>
                    {portuguese ? "Site do Amadou" : "Amadou's Site"}
                </p>
            </Link>
            <div className={styles.links + " gap-5"}>
                <Link className={styles.navLink + " nav-link"}  href={'/'}>{portuguese ? "Índice" : "Home"}</Link>
                <Link className={styles.navLink + " nav-link"}  href={'/about'}>{portuguese ? "Sobre" : "About"}</Link>
                <Link className={styles.navLink + " nav-link"}  href={'/help'}>{portuguese ? "Ajudar" : "Help"}</Link>
            </div>
        </section>
    )
}