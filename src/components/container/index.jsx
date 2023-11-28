'use client'

import styles from './styles.module.scss';

export default function Container({children}) {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}