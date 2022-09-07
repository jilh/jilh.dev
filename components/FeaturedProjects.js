import Image from 'next/image'
import styles from '../styles/FeaturedProjects.module.css';

const FeaturedProjects = () => {
    return(
        <div className={styles.featuredProjects}>
            <b className={styles.subHeading}>FEATURED PROJECTS</b>
            <div className={styles.featuredProjectCard}>
                <div className={styles.cardInfo}>
                    <div className={styles.cardTitleGroup}>
                        <b className={styles.cardTitle}>Grachef Restaurant</b>
                        <small className={styles.cardSubTitle}>REACT</small>
                    </div>
                    <p className={styles.cardDetails}>A food ordering app that brings conveniency to customers</p>
                    <a href="#" className={styles.cardLinks}>Check Online</a>
                </div>
                <div className='image-container'>
                    <Image src="/grachef-img.png" width={200} height={200} className={styles.cardImage} alt="Grachef Website" />
                </div>
            </div>

            <div className={styles.featuredProjectCard}>
                <div className={styles.cardInfo}>
                    <div className={styles.cardTitleGroup}>
                        <b className={styles.cardTitle}>Testing Budget</b>
                        <small className={styles.cardSubTitle}>REACT</small>
                    </div>
                    <p className={styles.cardDetails}>A simple budget demo app to learn software testing</p>
                    <a href="https://jilhbudget.netlify.app" className={styles.cardLinks}>Check Online</a>
                </div>
                <div className='image-container'>
                    <Image src="/budget-img.png" width={200} height={200} className={styles.cardImage} alt="Testing Budget" />
                </div>
            </div>
        </div>
    )
}

export default FeaturedProjects