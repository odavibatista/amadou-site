import Link from 'next/link'
import styles from './styles.module.scss'
import Header from '@/components/header'
import ChangeLanguage from '@/components/changeLanguage'
import Container from '@/components/container'
import Footer from '@/components/footer'

export default function About() {
    return (
        <main className={""}>
            <Header/>
            <Container>
            </Container>
            <Footer/>
            <ChangeLanguage />
        </main>
    )
}