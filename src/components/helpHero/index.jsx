'use client'

import styles from './styles.module.scss';
import { useEffect } from 'react'

export default function HelpHero() {
    function getLanguage() {
            if (localStorage.getItem('portuguese') === null) {
                localStorage.setItem('portuguese', true)
            }
            return JSON.parse(localStorage.getItem('portuguese'))
    }

    const portuguese = getLanguage()
    return(
        <section className={styles.section}>
            <h1 className={styles.h1}>{portuguese === true ? "Um dos apoiadores do Amadou está procurando um meio de ajudar a sua família após sua morte." : "One of Amadou's helpers is looking for a way to help his family after Amadou's death."}</h1>
            <h2 className={styles.h2}>{portuguese === true ? "Enquanto isso não ocorre, considere doar para outras pessoas em necessidade na Gâmbia:" : "While it's not done, help other people on Gambia in need:"}</h2>
            <a href='https://www.vakinha.com.br/vaquinha/ajude-modou-a-alimentar-seus-filhos' target='_blank'>{portuguese === true ? "Modou e sua família": "Modou and his family"}</a>
            <a href='https://www.vakinha.com.br/vaquinha/ajuda-para-o-irmao-omar' target='_blank'>{portuguese === true ? "Omar e sua família" : "Omar and his family"}</a>
        </section>
    )
}
