import React from 'react';
import Image from 'next/image';
import CreateAccountButton from '@/components/nav-buttons/CreateAccountButton';
import SignInButton from '@/components/nav-buttons/SignInButton';
import ExploreQuestsButton from '@/components/nav-buttons/ExploreQuestsButton';
import NewsletterCard from '@/components/newsletter-card/NewsletterCard';
import FarcasterFriends from '@/components/farcaster-friends/FarcasterFriends';
import LibraryCard from '@/components/library-card/LibraryCard';
import styles from './SideNavigation.module.css';

const SideNavigation: React.FC = () => {
  return (
    <div className={styles.sideNavigation}>
      <div className={styles.membershipImage}>
        <Image 
          src="https://i.imgur.com/875phfv.png" 
          alt="Membership" 
          fill
          className={styles.membershipImg}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <CreateAccountButton />
      <SignInButton />
      <ExploreQuestsButton />
      <FarcasterFriends />
      <LibraryCard />
      <NewsletterCard />
    </div>
  );
};

export default SideNavigation;

