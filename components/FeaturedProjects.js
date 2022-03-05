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
                    <p className={styles.cardLinks}>Check Online</p>
                </div>
                <div className='image-container'>
                    <Image src="/project-image.png" width={200} height={200} className={styles.cardImage} alt="Grachef Website" />
                </div>
            </div>

            <div className={styles.featuredProjectCard}>
                <div className={styles.cardInfo}>
                    <div className={styles.cardTitleGroup}>
                        <b className={styles.cardTitle}>Grachef Restaurant</b>
                        <small className={styles.cardSubTitle}>REACT</small>
                    </div>
                    <p className={styles.cardDetails}>A food ordering app that brings conveniency to customers</p>
                    <p className={styles.cardLinks}>Check Online</p>
                </div>
                <div className='image-container'>
                    <Image src="/project-image.png" width={200} height={200} className={styles.cardImage} alt="Grachef Website" />
                </div>
            </div>
        </div>
    )
}

export default FeaturedProjects