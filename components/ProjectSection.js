import styles from '../styles/ProjectSection.module.css'
import FeaturedProjects from './FeaturedProjects'
import OtherProjects from './OtherProjects'
import Talks from './Talks'
const ProjectSection = () => {
    return(
        <div className={styles.projectSection}>
            <FeaturedProjects />
            <OtherProjects />
            <Talks />
        </div>
    )
}

export default ProjectSection