import Hero from '@/components/hero/Hero';
import Banner from '@/components/banner/Banner';
import SideNavigation from '@/components/side-navigation/SideNavigation';
import BannerCard from '@/components/banner-card/BannerCard';
import PromptLibraryCard from '@/components/prompt-library-card/PromptLibraryCard';
import LibraryCard from '@/components/library-card/LibraryCard';
import Quests from '@/components/quests/Quests';
import FarcasterFriends from '@/components/farcaster-friends/FarcasterFriends';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Banner />
      <div className={styles.content}>
        <SideNavigation />
        <div className={styles.middleSection}>
          <BannerCard />
          <div className={styles.cardsRow}>
            <div className={styles.promptSection}>
              <PromptLibraryCard />
            </div>
            <div className={styles.membershipSection}>
              <LibraryCard />
            </div>
          </div>
          <Quests />
          <FarcasterFriends />
        </div>
      </div>
    </main>
  );
}

