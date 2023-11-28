'use client'
import Link from 'next/link';
import styles from './styles.module.scss';
import { useEffect } from 'react'

export default function Footer() {
    let portuguese
    useEffect(()  =>  {
        portuguese = JSON.parse(localStorage.getItem('portuguese'))
        }
    )

    return(
        <section className={styles.footer}>
            <Link className={styles.navBarBrand + " navbar-brand"} href={'/'}>
                <img src="/gambia.png" alt="" className={styles.navImage + " navImage"} />
                <p>
                    {JSON.parse(localStorage.getItem('portuguese')) === true ? "Site do Amadou" : "Amadou's Site"}
                </p>
            </Link>
            <div className={styles.links + " gap-5"}>
                <Link className={styles.navLink + " nav-link"}  href={'/'}>{JSON.parse(localStorage.getItem('portuguese')) === true ? "Índice" : "Home"}</Link>
                <Link className={styles.navLink + " nav-link"}  href={'/about'}>{JSON.parse(localStorage.getItem('portuguese')) === true ? "Sobre" : "About"}</Link>
                <Link className={styles.navLink + " nav-link"}  href={'/help'}>{JSON.parse(localStorage.getItem('portuguese')) === true ? "Ajudar" : "Help"}</Link>
            </div>
        </section>
    )
}