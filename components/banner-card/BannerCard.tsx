import React from 'react';
import Image from 'next/image';
import styles from './BannerCard.module.css';

const BannerCard: React.FC = () => {
  return (
    <div className={styles.bannerCard} data-intro="banner-card">
      <div className={styles.content}>
        <div className={styles.textSection}>
          <h2 className={styles.title}>DAEMON:// Recommend Me Learning Paths!</h2>
          <p className={styles.subtitle}>Reach your learning goals by finding hand-picked Digital Classes.</p>
        </div>
        <button className={styles.actionButton}>
          <span className={styles.buttonText}>Daily Faucet</span>
          <Image 
            src="/icons/Eye.svg" 
            alt="Eye icon" 
            width={16} 
            height={16} 
            className={styles.powerIcon}
          />
        </button>
      </div>
    </div>
  );
};

export default BannerCard;

