'use client'
import Link from 'next/link'
import styles from './styles.module.scss'
import Header from '@/components/header'
import ChangeLanguage from '@/components/changeLanguage'
import Container from '@/components/container'
import Footer from '@/components/footer'
import HelpHero from '@/components/helpHero'

export default function About() {
    return (
        <main className={""}>
            <Header/>
            <Container>
                <HelpHero/>
            </Container>
            <ChangeLanguage />
            <Footer/>
        </main>
    )
}