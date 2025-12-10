import React from 'react';
import styles from './AnnouncementBanner.module.css';

export function AnnouncementBanner() {
  return (
    <div className={styles.banner}>
      <h3 className={styles.title}>Announcement</h3>
      <p className={styles.text}>
        Welcome to the Mental Wealth Academy Message Board. For first-time visitors, we strongly encourage you to familiarize yourself with our community guidelines and forum rules prior to engaging in discussions.
      </p>
    </div>
  );
}

