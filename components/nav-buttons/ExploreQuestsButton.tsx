import React from 'react';
import styles from './ExploreQuestsButton.module.css';

const ExploreQuestsButton: React.FC = () => {
  return (
    <button className={styles.exploreQuestsButton} data-intro="explore-quests">
      <span className={styles.buttonText}>Explore Quests</span>
    </button>
  );
};

export default ExploreQuestsButton;

