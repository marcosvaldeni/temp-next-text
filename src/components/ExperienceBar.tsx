import { useContext } from 'react';
// import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

const ExperienceBar: React.FC = () => {
  // const { currentExperience, experienceToNextlevel } = useContext(ChallengesContext);

  // const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextlevel);
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `42%`}}></div>
        <span className={styles.currentExperience} style={{ left: `42%`}}>
        42 xp
        </span>
      </div>
      <span>42 xp</span>
    </header>
  );
}

export default ExperienceBar;