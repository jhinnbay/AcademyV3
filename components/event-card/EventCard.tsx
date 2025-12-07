import React from 'react';
import Image from 'next/image';
import styles from './EventCard.module.css';

interface EventCardProps {
  imageUrl?: string;
  heading?: string;
  badge1Text?: string;
  badge2Text?: string;
  authorName?: string;
  authorRole?: string;
  authorAvatar?: string;
  onClick?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  imageUrl = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop',
  heading = 'Blog Post Title',
  badge1Text = 'Category',
  badge2Text = 'Date',
  authorName = 'Author Name',
  authorRole = 'Author Role',
  authorAvatar = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=75&h=75&fit=crop&crop=face',
  onClick,
}) => {
  return (
    <div className={styles.eventCard} onClick={onClick}>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <Image
            src={imageUrl}
            alt={heading}
            fill
            className={styles.image}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.content}>
        <div className={styles.textSection}>
          <h3 className={styles.heading}>{heading}</h3>
          <div className={styles.badgesContainer}>
            <div className={styles.badge}>
              <svg
                className={styles.badgeIcon}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.67 2.67H13.33V13.33H2.67V2.67Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.33 2.67V13.33M10.67 2.67V13.33M2.67 8H13.33"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.67 5.33H9.33M6.67 10.67H9.33"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className={styles.badgeText}>{badge1Text}</span>
            </div>
            <div className={styles.badge}>
              <svg
                className={styles.badgeIcon}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2.67" y="2.67" width="10.67" height="10.67" rx="1" fill="currentColor" />
                <path
                  d="M5.33 1.33V4M10.67 1.33V4M2.67 6.67H13.33M2.67 10.67H13.33"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
              <span className={styles.badgeText}>{badge2Text}</span>
            </div>
          </div>
        </div>
        <div className={styles.authorSection}>
          <div className={styles.avatarContainer}>
            <Image
              src={authorAvatar}
              alt={authorName}
              width={40}
              height={40}
              className={styles.avatar}
            />
          </div>
          <div className={styles.authorText}>
            <div className={styles.authorName}>{authorName}</div>
            <div className={styles.authorRole}>{authorRole}</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

