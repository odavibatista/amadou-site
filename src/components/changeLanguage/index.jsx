'use client'

import styles from './styles.module.scss';
import { useEffect, useState } from 'react'

export default function ChangeLanguage()    {
    function getLanguage() {
        useEffect(()  =>  {
            if (localStorage.getItem('portuguese') === null) {
                localStorage.setItem('portuguese', true)
            }
            return JSON.parse(localStorage.getItem('portuguese'))
        }, [])
    }

    const portuguese = getLanguage()

    function alterLanguage () {
        let pt = JSON.parse(localStorage.getItem('portuguese'))
        if (pt === true) {
            localStorage.setItem('portuguese', false)
            } else {
                localStorage.setItem('portuguese', true)
        }

        setTimeout(() => {
            window.location.reload()
        }, 500)
    }

    return (
        <div onClick={alterLanguage}>
            <img src={`${portuguese ? "/br-flag.png" : "/us-flag.png"}`} alt=""  className={styles.btn} />
        </div>
    )
}