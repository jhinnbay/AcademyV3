'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './QuestNavbar.module.css';

// Menu Icon Component
const MenuIcon: React.FC<{ size?: number }> = ({ size = 32 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.menuIcon}>
      <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

// Menu Alt Icon Component (for search)
const MenuAltIcon: React.FC<{ size?: number }> = ({ size = 32 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.menuAltIcon}>
      <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

// Search Icon Component
const SearchIcon: React.FC<{ size?: number }> = ({ size = 20 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.searchIcon}>
      <circle cx="11" cy="11" r="8" stroke="rgba(156, 163, 175, 1)" strokeWidth="2" fill="none"/>
      <path d="m21 21-4.35-4.35" stroke="rgba(156, 163, 175, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

// Notification Icon Component
const NotificationIcon: React.FC<{ size?: number }> = ({ size = 36 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.notificationIcon}>
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="rgba(17, 25, 40, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="rgba(17, 25, 40, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="9" y1="12" x2="9" y2="12" stroke="rgba(17, 25, 40, 1)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="9" y1="15" x2="9" y2="15" stroke="rgba(17, 25, 40, 1)" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};


// Filter Icon Component
const FilterIcon: React.FC<{ size?: number }> = ({ size = 20 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.filterIcon}>
      <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

const QuestNavbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <div className={styles.leftContent}>
          <div className={styles.logoWrapper}>
            <Image
              src="/icons/spacey2klogo.png"
              alt="Logo"
              width={152}
              height={152}
              className={styles.logo}
            />
          </div>
          <h1 className={styles.academyName}>Mental Wealth Academy</h1>
        </div>

        <div className={styles.rightContent}>
          <div className={styles.linksContainer}>
            {/* Home Button */}
            <Link href="/home" className={styles.navButton}>
              <Image
                src="/icons/home.svg"
                alt="Home"
                width={20}
                height={20}
                className={styles.homeIcon}
              />
              <span className={styles.buttonLabel}>Home</span>
            </Link>

            {/* Quests Button */}
            <Link href="/quests" className={`${styles.navButton} ${styles.navButtonActive}`}>
              <Image
                src="/icons/Venetian carnival.svg"
                alt="Quests"
                width={20}
                height={20}
                className={styles.questIcon}
              />
              <span className={styles.buttonLabelActive}>Quests</span>
            </Link>
          </div>

          <button className={styles.notificationButton}>
            <NotificationIcon />
          </button>

          <button className={styles.menuButton}>
            <MenuIcon size={32} />
          </button>
        </div>
      </div>

      {/* Bottom Section - Search */}
      <div className={styles.bottomSection}>
        <div className={styles.searchContainer}>
          <div className={styles.searchIconWrapper}>
            <MenuAltIcon size={32} />
          </div>

          <div className={styles.searchInputContainer}>
            <div className={styles.searchInputWrapper}>
              <div className={styles.searchIconLeft}>
                <SearchIcon size={20} />
              </div>
              <input
                type="text"
                placeholder="Search with daemon agent"
                className={styles.searchInput}
              />
              <div className={styles.searchRightContent}>
                <span className={styles.searchRightText}>Filter</span>
                <div className={styles.searchRightIcon}>
                  <FilterIcon size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default QuestNavbar;

