'use client'

import styles from './styles.module.scss';

export default function ChangeLanguage()    {
    const portuguese = JSON.parse(localStorage.getItem('portuguese'))

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