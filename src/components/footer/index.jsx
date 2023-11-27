'use client'
import Link from 'next/link';
import styles from './styles.module.scss';

export default function Footer() {
    const portuguese = JSON.parse(localStorage.getItem('portuguese'))

    return(
        <section className={styles.footer}>
            <Link className={styles.navBarBrand + " navbar-brand"} href={'/'}>
                <img src="/gambia.png" alt="" className={styles.navImage + " navImage"} />
                <p>
                    {portuguese === true ? "Site do Amadou" : "Amadou's Site"}
                </p>
            </Link>
            <div className={styles.links + " gap-5"}>
                <Link className={styles.navLink + " nav-link"}  href={'/'}>{portuguese === true ? "Índice" : "Home"}</Link>
                <Link className={styles.navLink + " nav-link"}  href={'/about'}>{portuguese === true ? "Sobre" : "About"}</Link>
                <Link className={styles.navLink + " nav-link"}  href={'/help'}>{portuguese === true ? "Ajudar" : "Help"}</Link>
            </div>
        </section>
    )
}