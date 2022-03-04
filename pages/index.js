import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navbar from '../components/Navbar'

import { IoMenuOutline, IoLogoAngular, IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io5'
import styles from '../styles/Home.module.css'
import InfoSection from '../components/InfoSection'
import ProjectSection from '../components/ProjectSection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jilh - Afolayan Stephen</title>
        <meta name="description" content="Personal portfolio of Afolayan Stephen" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main  id="home">
        <div className={styles.pageContainer}>
          <div className={styles.container}>
            <Navbar />
            <div className={styles.pageContent}>
              <InfoSection />
              <ProjectSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
