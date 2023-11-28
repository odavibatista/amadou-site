'use client'

import styles from './styles.module.scss';
import { useEffect } from 'react'

export default function IndexHero() {
    let portuguese
    useEffect(()  =>  {
        portuguese = JSON.parse(localStorage.getItem('portuguese'))
        }
    )

    return (
        <div className={styles.div}>
            <h1 className={styles.h1}>{portuguese === true ? "Em memória de Amadou Jallow" : "In Memory of Amadou Jallow"}</h1>
            <p className={styles.p}>{portuguese === true ? "Amadou infelizmente veio a falecer. Pedimos que orem por ele e ajudem alguma das pessoas em necessidade que aqui indicamos." : "Amadou has unfortunately passed away. We ask prayers for him and help for any of the people in need we're placing here."}</p>
            <p className={styles.p}>{portuguese === true ? "Quando tivermos um meio de ajudar sua família, colocaremos aqui." : "When we have a way of helping his family, we'll place it here."}</p>
        </div>
    )
}