'use client'

import { useEffect } from 'react';
import styles from './styles.module.scss';

export default function IndexHero() {
    function getLanguage() {
        useEffect(()  =>  {
            if (localStorage.getItem('portuguese') === null) {
                localStorage.setItem('portuguese', true)
            }
            return JSON.parse(localStorage.getItem('portuguese'))
        }, [])
    }

    const portuguese = getLanguage()
    return (
        <div className={styles.div}>
            <h1 className={styles.h1}>{portuguese ? "Em memória de Amadou Jallow" : "In Memory of Amadou Jallow"}</h1>
            <p className={styles.p}>{portuguese ? "Amadou infelizmente veio a falecer. Pedimos que orem por ele e ajudem alguma das pessoas em necessidade que aqui indicamos." : "Amadou has unfortunately passed away. We ask prayers for him and help for any of the people in need we're placing here."}</p>
            <p className={styles.p}>{portuguese ? "Quando tivermos um meio de ajudar sua família, colocaremos aqui." : "When we have a way of helping his family, we'll place it here."}</p>
        </div>
    )
}