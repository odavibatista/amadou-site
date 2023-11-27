import Link from 'next/link'
import styles from './styles.module.scss'
import Header from '@/components/header'

export default function About() {
    return (
        <main className={styles.main}>
            <Header/>
            <ChangeLanguage/>
        </main>
    )
}