'use client'
import Image from 'next/image'
import styles from './page.module.scss'
import ChangeLanguage from '@/components/changeLanguage'
import { useEffect } from 'react'
import Header from '@/components/header';
import Container from '@/components/container';
import Carousel from '@/components/carousel';
import IndexHero from '@/components/indexHero';
import Footer from '@/components/footer';

export default function Home() {
  useEffect(()  =>  {
    if (localStorage.getItem('portuguese') === null) {
      localStorage.setItem('portuguese', true)
    }
  })

  return (
    <main className={styles.main}>
      <Header />
      <Container>
        <IndexHero/>
        <Carousel/>
      </Container>
      <Footer/>
    </main>
  )
}
