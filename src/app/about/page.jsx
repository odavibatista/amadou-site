import Link from 'next/link'
import styles from './styles.module.scss'
import Header from '@/components/header'
import ChangeLanguage from '@/components/changeLanguage'
import Footer from '@/components/footer'
import Container from '@/components/container'
import AboutHero from '@/components/aboutHero'

export default function About() {
    return (
        <main>
            <Header/>
            <Container>
                <AboutHero/>
            </Container>
            <Footer/>
            <ChangeLanguage />
        </main>
    )
}