'use client'
import Image from 'next/image'
import styles from './page.module.scss'
import ChangeLanguage from '@/components/changeLanguage'
import "bootstrap/dist/js/bootstrap.min.js";
import { useEffect } from 'react'
import Header from '@/components/header';

export default function Home() {
  useEffect(()  =>  {
    if (localStorage.getItem('portuguese') === null) {
      localStorage.setItem('portuguese', true)
    }
  })

  return (
    <main className={styles.main}>
      <Header />
      <ChangeLanguage />
    </main>
  )
}
