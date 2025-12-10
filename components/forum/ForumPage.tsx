'use client';

import React from 'react';
import styles from './ForumPage.module.css';
import { AnnouncementBanner } from './AnnouncementBanner';
import { ForumCard } from './ForumCard';
import { Footer } from '@/components/footer/Footer';
import { PixelIcon } from './PixelIcon';

export function ForumPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Community Forum</h1>
          <p className={styles.heroSubtitle}>
            Join discussions, share insights, and connect with the community.
            <br />
            Explore threads on quests, proposals, and general topics.
          </p>
          <div className={styles.heroActions}>
            <button className={styles.primaryCta} type="button">Start Discussion</button>
            <button className={styles.secondaryCta} type="button">Browse Threads</button>
          </div>
        </div>
        <div className={styles.heroGlow} />
      </section>

      <div className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <AnnouncementBanner />

          <div className={styles.forumHeaders}>
            <div className={styles.headerLabel}>Threads</div>
            <div className={styles.headerLabel}>Posts</div>
          </div>

          <div className={styles.forumContent}>
            <div className={styles.categoryHeader}>
              <div className={styles.categoryTitle}>
                General Discussion
              </div>
            </div>

            <ForumCard
              title="General Discussion"
              description="Discuss ongoing events and upcoming cleanup projects, share experiences from past events."
              badge={{ text: 'Public', variant: 'default' }}
              icon={<PixelIcon />}
            />

            <ForumCard
              title="General Discussion"
              description="Discuss ongoing events and upcoming cleanup projects, share experiences from past events."
              badge={{ text: 'Members', variant: 'default' }}
              icon={<PixelIcon />}
            />

            <ForumCard
              title="General Discussion"
              description="Discuss ongoing events and upcoming cleanup projects, share experiences from past events."
              badge={{ text: 'Members', variant: 'default' }}
              icon={<PixelIcon />}
            />

            <ForumCard
              title="General Discussion"
              description="Discuss ongoing events and upcoming cleanup projects, share experiences from past events."
              badge={{ text: 'Members', variant: 'default' }}
              icon={<PixelIcon />}
            />

            <div className={styles.categoryHeader}>
              <div className={styles.categoryTitle}>
                Daemon Database
              </div>
            </div>

            <ForumCard
              title="Quest Discussions"
              description="Discuss ongoing proposals and public goods, contribute to the ethos and conversation by sharing your valuable insight with the ecosystem."
              badge={{ text: 'Public', variant: 'default' }}
              icon={<PixelIcon />}
            />

            <ForumCard
              title="Token Talk"
              description="Best practices for organizing your proposals and pitches."
              badge={{ text: '500 $DAEMON', variant: 'cyan' }}
              icon={<PixelIcon />}
            />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

