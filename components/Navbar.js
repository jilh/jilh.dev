import Link from 'next/link'
import Image from 'next/image'
import { IoMenuOutline } from 'react-icons/io5'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return(
        <nav className={styles.navbar}>
            <Image src="/logo.png" alt="Jilh Logo" width={45} height={45} />
            <div className={styles.menu}>
            <div className={styles.links}>
                <Link href="#"><a>Home</a></Link>
                <Link href="#"><a>Projects</a></Link>
                <Link href="#"><a>Talks</a></Link>
                <Link href="#"><a>Resume</a></Link>
            </div>
            <IoMenuOutline size={40} />
            </div>
        </nav>
    )
}

export default Navbar