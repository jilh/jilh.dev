import Image from 'next/image'
import styles from '../styles/OtherProjects.module.css';

const OtherProjects = () => {
    return(
        <div className={styles.otherProjects} id="projects">
            <b className={styles.subHeading}>OTHER PROJECTS</b>
            <div className={styles.otherProjectWrapper}>
                <div className={styles.otherProjectCard}>
                    <div className={styles.cardInfo}>
                        <div className={styles.cardTitleGroup}>
                            <b className={styles.cardTitle}>Prunater Website</b>
                            <small className={styles.cardSubTitle}>REACT</small>
                        </div>
                        <p className={styles.cardDetails}>Official registration page of Prunater initiative</p>
                        <a href="https://www.prunater.com" className={styles.cardLinks}>Check Online</a>
                    </div>
                </div>

                <div className={styles.otherProjectCard}>
                    <div className={styles.cardInfo}>
                        <div className={styles.cardTitleGroup}>
                            <b className={styles.cardTitle}>Scepter Global Missions</b>
                            <small className={styles.cardSubTitle}>REACT</small>
                        </div>
                        <p className={styles.cardDetails}>Official Website of Scepter global missions</p>
                        <a href="https://www.scepterglobalmissions.org" className={styles.cardLinks}>Check Online</a>
                    </div>
                </div>
                <div className={styles.otherProjectCard}>
                    <div className={styles.cardInfo}>
                        <div className={styles.cardTitleGroup}>
                            <b className={styles.cardTitle}>TeamHyk Event Registration</b>
                            <small className={styles.cardSubTitle}>REACT</small>
                        </div>
                        <p className={styles.cardDetails}>Registration page for TeamHyk's #AllRoundAdventure2021</p>
                        <a href="https://teamhyk.netlify.app" className={styles.cardLinks}>Check Online</a>
                    </div>
                </div>
                {/* <div className={styles.otherProjectCard}>
                    <div className={styles.cardInfo}>
                        <div className={styles.cardTitleGroup}>
                            <b className={styles.cardTitle}>Grachef Restaurant</b>
                            <small className={styles.cardSubTitle}>REACT</small>
                        </div>
                        <p className={styles.cardDetails}>A food ordering app that brings conveniency to customers</p>
                        <p className={styles.cardLinks}>Check Online</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default OtherProjects