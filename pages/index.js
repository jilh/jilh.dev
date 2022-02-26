import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { IoMenuOutline } from 'react-icons/io5'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jilh - Afolayan Stephen</title>
        <meta name="description" content="Personal portfolio of Afolayan Stephen" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main>
        <div className={styles.container}>
          {/* <nav className={styles.navbar}>
            <Image src="/logo.png" alt="Jilh Logo" width={45} height={45} />
            <div className={styles.menu}>
              <div className={styles.links}>
                <Link href="#"><a>Home</a></Link>
                <Link href="#"><a>Projects</a></Link>
                <Link href="#"><a>Talks</a></Link>
                <Link href="#"><a>Resume</a></Link>
              </div>
              <IoMenuOutline size={40}/>
            </div>
          </nav> */}
        </div>
        <div className={styles.pageContainer}>
        <div className={styles.container}>
        <nav className={styles.navbar}>
            <Image src="/logo.png" alt="Jilh Logo" width={45} height={45} />
            <div className={styles.menu}>
              <div className={styles.links}>
                <Link href="#"><a>Home</a></Link>
                <Link href="#"><a>Projects</a></Link>
                <Link href="#"><a>Talks</a></Link>
                <Link href="#"><a>Resume</a></Link>
              </div>
              <IoMenuOutline size={40}/>
            </div>
          </nav>
          <div className={styles.pageContent}>
            <div className={styles.infoSection}>
              <h1>Hello, I'm Stephen Afolayan.</h1>
              <p>I'm a community organizer, frontend developer, and UI/UX design enthusiast.
                I create amazing user facing experience with modern technologies to solve business needs.
              </p>
              <p>Whe I'm not found hitting the keyboard, speaking at events, or putting pixels in place,
                I must be somewhere trying to fill up a 4GB space of camera memory with mouth watering pictures.
              </p>
            </div>
            <div className={styles.projectSection}>
                <span>James</span>
                <h1>Hello, I'm Stephen Afolayan.</h1>
              <p>I'm a community organizer, frontend developer, and UI/UX design enthusiast.
                I create amazing user facing experience with modern technologies to solve business needs.
              </p>
              <p>Whe I'm not found hitting the keyboard, speaking at events, or putting pixels in place,
                I must be somewhere trying to fill up a 4GB space of camera memory with mouth watering pictures.
              </p>
              <h1>Hello, I'm Stephen Afolayan.</h1>
              <p>I'm a community organizer, frontend developer, and UI/UX design enthusiast.
                I create amazing user facing experience with modern technologies to solve business needs.
              </p>
              <p>Whe I'm not found hitting the keyboard, speaking at events, or putting pixels in place,
                I must be somewhere trying to fill up a 4GB space of camera memory with mouth watering pictures.
              </p>
              <h1>Hello, I'm Stephen Afolayan.</h1>
              <p>I'm a community organizer, frontend developer, and UI/UX design enthusiast.
                I create amazing user facing experience with modern technologies to solve business needs.
              </p>
              <p>Whe I'm not found hitting the keyboard, speaking at events, or putting pixels in place,
                I must be somewhere trying to fill up a 4GB space of camera memory with mouth watering pictures.
              </p>
              <h1>Hello, I'm Stephen Afolayan.</h1>
              <p>I'm a community organizer, frontend developer, and UI/UX design enthusiast.
                I create amazing user facing experience with modern technologies to solve business needs.
              </p>
              <p>Whe I'm not found hitting the keyboard, speaking at events, or putting pixels in place,
                I must be somewhere trying to fill up a 4GB space of camera memory with mouth watering pictures.
              </p>
              <h1>Hello, I'm Stephen Afolayan.</h1>
              <p>I'm a community organizer, frontend developer, and UI/UX design enthusiast.
                I create amazing user facing experience with modern technologies to solve business needs.
              </p>
              <p>Whe I'm not found hitting the keyboard, speaking at events, or putting pixels in place,
                I must be somewhere trying to fill up a 4GB space of camera memory with mouth watering pictures.
              </p>
              <h1>Hello, I'm Stephen Afolayan.</h1>
              <p>I'm a community organizer, frontend developer, and UI/UX design enthusiast.
                I create amazing user facing experience with modern technologies to solve business needs.
              </p>
              <p>Whe I'm not found hitting the keyboard, speaking at events, or putting pixels in place,
                I must be somewhere trying to fill up a 4GB space of camera memory with mouth watering pictures.
              </p>
              <h1>Hello, I'm Stephen Afolayan.</h1>
              <p>I'm a community organizer, frontend developer, and UI/UX design enthusiast.
                I create amazing user facing experience with modern technologies to solve business needs.
              </p>
              <p>Whe I'm not found hitting the keyboard, speaking at events, or putting pixels in place,
                I must be somewhere trying to fill up a 4GB space of camera memory with mouth watering pictures.
              </p>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  )
}
