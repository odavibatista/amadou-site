'use client'

import styles from './styles.module.scss';
import { useEffect } from 'react'

export default function ChangeLanguage()    {
    let portuguese
    useEffect(()  =>  {
        portuguese = JSON.parse(localStorage.getItem('portuguese'))
        }
    )

    function alterLanguage () {
        if (portuguese === true) {
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
            <img src={`${portuguese === true ? "/br-flag.png" : "/us-flag.png"}`} alt=""  className={styles.btn} />
        </div>
    )
}