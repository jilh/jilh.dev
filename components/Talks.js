import Image from 'next/image'
import styles from '../styles/Talks.module.css';

const Talks = () => {
    return(
        <div className={styles.talks} id="talks">
            <b className={styles.subHeading}>TALKS</b>
            <div className={styles.talksWrapper}>
                <div className={styles.talksCard}>
                    <div className={styles.cardInfo}>
                        <div className={styles.cardTitleGroup}>
                            <b className={styles.cardTitle}>Grachef Restaurant</b>
                            <small className={styles.cardSubTitle}>Egbe, Kogi, Nigeria<br />29/08/2019</small>
                        </div>
                        <div className='image-container'>
                            <Image src="/project-image.png" width={200} height={200} className={styles.cardImage} alt="" />
                        </div>
                        <p className={styles.cardDetails}>A food ordering app that brings conveniency to customers</p>
                        <p className={styles.cardLinks}>Slides</p>
                    </div>
                </div>

                <div className={styles.talksCard}>
                    <div className={styles.cardInfo}>
                        <div className={styles.cardTitleGroup}>
                            <b className={styles.cardTitle}>Grachef Restaurant</b>
                            <small className={styles.cardSubTitle}>Egbe, Kogi, Nigeria<br />29/08/2019</small>
                        </div>
                        <div className='image-container'>
                            <Image src="/project-image.png" width={200} height={200} className={styles.cardImage} alt="" />
                        </div>
                        <p className={styles.cardDetails}>A food ordering app that brings conveniency to customers</p>
                        <p className={styles.cardLinks}>Slides</p>
                    </div>
                </div>
                <div className={styles.talksCard}>
                    <div className={styles.cardInfo}>
                        <div className={styles.cardTitleGroup}>
                            <b className={styles.cardTitle}>Grachef Restaurant</b>
                            <small className={styles.cardSubTitle}>Egbe, Kogi, Nigeria<br />29/08/2019</small>
                        </div>
                        <div className='image-container'>
                            <Image src="/project-image.png" width={200} height={200} className={styles.cardImage} alt="" />
                        </div>
                        <p className={styles.cardDetails}>A food ordering app that brings conveniency to customers</p>
                        <p className={styles.cardLinks}>Slides</p>
                    </div>
                </div>
                <div className={styles.talksCard}>
                    <div className={styles.cardInfo}>
                        <div className={styles.cardTitleGroup}>
                            <b className={styles.cardTitle}>Grachef Restaurant</b>
                            <small className={styles.cardSubTitle}>Egbe, Kogi, Nigeria<br />29/08/2019</small>
                        </div>
                        <div className='image-container'>
                            <Image src="/project-image.png" width={200} height={200} className={styles.cardImage} alt="" />
                        </div>
                        <p className={styles.cardDetails}>A food ordering app that brings conveniency to customers</p>
                        <p className={styles.cardLinks}>Slides</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Talks