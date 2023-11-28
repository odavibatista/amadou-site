'use client'

import styles from './styles.module.scss'
import Link from 'next/link'

export default function Header() {

    return (
        <nav className={`${styles.navigation} + " navbar navbar-expand-lg container-fluid navigation sticky-top"`}>
            <Link className={styles.navBarBrand + " navbar-brand"} href={'/'}>
                <img src="/gambia.png" alt="" className={styles.navImage + " navImage"} />
                <p>
                    {JSON.parse(localStorage.getItem('portuguese')) === true ? "Site do Amadou" : "Amadou's Site"}
                </p>
            </Link>
            <button
            id="nav-button"
            className="position-relative navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav gap-5">
                    <li className="nav-item">
                        <Link className={styles.navLink + " nav-link"}  href={'/'}>{JSON.parse(localStorage.getItem('portuguese')) === true ? "Índice" : "Home"}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={styles.navLink + " nav-link"}  href={'/about'}>{JSON.parse(localStorage.getItem('portuguese')) === true ? "Sobre" : "About"}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={styles.navLink + " nav-link"}  href={'/help'}>{JSON.parse(localStorage.getItem('portuguese')) === true ? "Ajudar" : "Help"}</Link>
                    </li>
                </ul>
            </div>
    </nav>
    )
}