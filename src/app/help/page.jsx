import Link from 'next/link'
import styles from './styles.module.scss'
import Header from '@/components/header'
import ChangeLanguage from '@/components/changeLanguage'

export default function About() {
    return (
        <main className={""}>
            <Header/>
            <ChangeLanguage/>
        </main>
    )
}