import Link from 'next/link'
import { 
    IoLogoAngular, 
    IoLogoGithub, 
    IoLogoLinkedin, 
    IoLogoTwitter, 
    IoOpenOutline,
    IoLogoNpm,
    IoLogoJavascript,
    IoLogoReact,
    IoLogoHtml5,
    IoLogoCss3 
} from 'react-icons/io5'
import styles from '../styles/InfoSection.module.css'

const InfoSection = () => {
    return(
        <div className={styles.infoSection}>
            <h1 className={styles.header}>Hello, I am <br />Stephen Afolayan.</h1>
            <p className={styles.paragraph}>I am a community organizer, frontend developer, and UI/UX design enthusiast.
                I create amazing user facing experience with modern technologies to solve business needs.
            </p>
            <p className={styles.paragraph}>When I am not found hitting the keyboard, speaking at events, or putting pixels in place,
                I must be somewhere trying to fill up a 4GB space of camera memory with mouth watering pictures.
            </p>

            <div className={styles.tools}>
                <b className={styles.subHeading}>TOOLS I WORK WITH</b>
                <div className={styles.toolsIconWrapper}>
                    <IoLogoHtml5 className={styles.toolsIcon} size={40} />
                    <IoLogoCss3 className={styles.toolsIcon} size={40} />
                    <IoLogoJavascript className={styles.toolsIcon} size={40} />
                    <IoLogoReact className={styles.toolsIcon} size={40} />
                    <IoLogoGithub className={styles.toolsIcon} size={40} />
                    <IoLogoNpm className={styles.toolsIcon} size={40} />
                </div>
            </div>
            <div className={styles.connect}>
                <b className={styles.subHeading}>CONNECT WITH ME</b>
                <div className={styles.connectIconWrapper}>
                    <Link href={'#'} ><a className={styles.link}><IoLogoGithub className={styles.connectIcon} />&nbsp;Github&nbsp;<IoOpenOutline /></a></Link>
                    <Link href={'#'}><a className={styles.link}><IoLogoLinkedin className={styles.connectIcon} />&nbsp;LinkedIn&nbsp;<IoOpenOutline /></a></Link>
                    <Link href={'#'}><a className={styles.link}><IoLogoTwitter className={styles.connectIcon} />&nbsp;Twitter&nbsp;<IoOpenOutline /></a></Link>
                    <Link href={'#'}><a className={styles.link}>Email</a></Link>
                </div>
            </div>
        </div>
    )
}

export default InfoSection