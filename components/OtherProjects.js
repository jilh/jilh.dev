import Image from 'next/image'
import styles from '../styles/OtherProjects.module.css';

const OtherProjects = () => {
    return(
        <div className={styles.otherProjects}>
            <b className={styles.subHeading}>OTHER PROJECTS</b>
            <div className={styles.otherProjectWrapper}>
                <div className={styles.otherProjectCard}>
                    <div className={styles.cardInfo}>
                        <div className={styles.cardTitleGroup}>
                            <b className={styles.cardTitle}>Grachef Restaurant</b>
                            <small className={styles.cardSubTitle}>REACT</small>
                        </div>
                        <p className={styles.cardDetails}>A food ordering app that brings conveniency to customers</p>
                        <p className={styles.cardLinks}>Check Online</p>
                    </div>
                </div>

                <div className={styles.otherProjectCard}>
                    <div className={styles.cardInfo}>
                        <div className={styles.cardTitleGroup}>
                            <b className={styles.cardTitle}>Grachef Restaurant</b>
                            <small className={styles.cardSubTitle}>REACT</small>
                        </div>
                        <p className={styles.cardDetails}>A food ordering app that brings conveniency to customers</p>
                        <p className={styles.cardLinks}>Check Online</p>
                    </div>
                </div>
                <div className={styles.otherProjectCard}>
                    <div className={styles.cardInfo}>
                        <div className={styles.cardTitleGroup}>
                            <b className={styles.cardTitle}>Grachef Restaurant</b>
                            <small className={styles.cardSubTitle}>REACT</small>
                        </div>
                        <p className={styles.cardDetails}>A food ordering app that brings conveniency to customers</p>
                        <p className={styles.cardLinks}>Check Online</p>
                    </div>
                </div>
                <div className={styles.otherProjectCard}>
                    <div className={styles.cardInfo}>
                        <div className={styles.cardTitleGroup}>
                            <b className={styles.cardTitle}>Grachef Restaurant</b>
                            <small className={styles.cardSubTitle}>REACT</small>
                        </div>
                        <p className={styles.cardDetails}>A food ordering app that brings conveniency to customers</p>
                        <p className={styles.cardLinks}>Check Online</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherProjects