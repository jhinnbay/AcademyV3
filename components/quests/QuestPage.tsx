'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import styles from './QuestPage.module.css';

// USDC Icon Component
const USDCIcon: React.FC<{ size?: number }> = ({ size = 18.83 }) => {
  return (
    <Image
      src="/icons/usd-coin-usdc-logo.svg"
      alt="USDC"
      width={size}
      height={size}
      className={styles.usdcIcon}
    />
  );
};

// Arrow Right Circle Icon Component
const ArrowRightCircleIcon: React.FC<{ size?: number }> = ({ size = 24 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arrowIcon}>
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M10 8L14 12L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

// Search Icon Component
const SearchIcon: React.FC<{ size?: number }> = ({ size = 20 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.searchIcon}>
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

// Quest Card Component
interface QuestCardProps {
  title: string;
  academy: string;
  date: string;
  time: string;
  questName: string;
  usdcBonded: string;
  usdcReward: string;
}

const QuestCard: React.FC<QuestCardProps> = ({
  title,
  academy,
  date,
  time,
  questName,
  usdcBonded,
  usdcReward,
}) => {
  return (
    <div className={styles.questCard}>
      <div className={styles.questCardContent}>
        <div className={styles.questImageWrapper}>
          <Image
            src="/icons/questbadge.png"
            alt="Quest Badge"
            width={44}
            height={44}
            className={styles.questImage}
          />
        </div>
        
        <div className={styles.questDetailsSection}>
          <div className={styles.questCardTitle}>{title}</div>
          <div className={styles.descriptionWrapper}>
            <span className={styles.academyName}>{academy}</span>
            <span className={styles.separator}>|</span>
            <span className={styles.date}>{date}</span>
            <span className={styles.separator}>|</span>
            <span className={styles.time}>{time}</span>
          </div>
        </div>

        <div className={styles.questInfoGroup}>
          <div className={styles.questInfo}>
            <div className={styles.questName}>{questName}</div>
            <div className={styles.usdcBonded}>
              <USDCIcon />
              <span>{usdcBonded}</span>
            </div>
            <div className={styles.usdcReward}>
              <USDCIcon />
              <span>{usdcReward}</span>
            </div>
          </div>
          <div className={styles.arrowIconWrapper}>
            <ArrowRightCircleIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

// Quest Data Interface
interface QuestData {
  id: string;
  title: string;
  academy: string;
  date: string;
  time: string;
  questName: string;
  usdcBonded: string;
  usdcReward: string;
  status: 'active' | 'available' | 'ending';
}

type TabType = 'active' | 'available' | 'ending';

const QuestPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('active');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter quests based on active tab and search query
  const filteredQuests = useMemo(() => {
    // Mock quest data - moved inside useMemo to prevent dependency issues
    const allQuests: QuestData[] = [
      // Active Quests
      {
        id: '1',
        title: 'Your First Quest',
        academy: 'Mental Wealth Academy',
        date: '03/16/2025',
        time: '12:33 PM',
        questName: 'Academy V3 Oracle',
        usdcBonded: '700',
        usdcReward: '5',
        status: 'active',
      },
      {
        id: '2',
        title: 'Community Builder',
        academy: 'Digital Skills Academy',
        date: '03/17/2025',
        time: '10:15 AM',
        questName: 'Build Community Hub',
        usdcBonded: '1,200',
        usdcReward: '15',
        status: 'active',
      },
      {
        id: '3',
        title: 'Content Creator',
        academy: 'Creative Arts Academy',
        date: '03/18/2025',
        time: '2:45 PM',
        questName: 'Create Tutorial Series',
        usdcBonded: '850',
        usdcReward: '8',
        status: 'active',
      },
      // Available Quests
      {
        id: '4',
        title: 'Blockchain Explorer',
        academy: 'Tech Innovation Academy',
        date: '03/20/2025',
        time: '9:00 AM',
        questName: 'Learn Blockchain Basics',
        usdcBonded: '500',
        usdcReward: '10',
        status: 'available',
      },
      {
        id: '5',
        title: 'Design Master',
        academy: 'Visual Design Academy',
        date: '03/21/2025',
        time: '11:30 AM',
        questName: 'UI/UX Design Challenge',
        usdcBonded: '600',
        usdcReward: '12',
        status: 'available',
      },
      {
        id: '6',
        title: 'Code Warrior',
        academy: 'Programming Academy',
        date: '03/22/2025',
        time: '1:00 PM',
        questName: 'Build Full Stack App',
        usdcBonded: '1,500',
        usdcReward: '20',
        status: 'available',
      },
      {
        id: '7',
        title: 'Marketing Guru',
        academy: 'Business Academy',
        date: '03/23/2025',
        time: '3:15 PM',
        questName: 'Social Media Campaign',
        usdcBonded: '900',
        usdcReward: '18',
        status: 'available',
      },
      // Ending Quests
      {
        id: '8',
        title: 'Early Adopter',
        academy: 'Innovation Academy',
        date: '03/19/2025',
        time: '4:00 PM',
        questName: 'Beta Testing Program',
        usdcBonded: '400',
        usdcReward: '6',
        status: 'ending',
      },
      {
        id: '9',
        title: 'Research Pioneer',
        academy: 'Science Academy',
        date: '03/19/2025',
        time: '5:30 PM',
        questName: 'Research Paper Review',
        usdcBonded: '750',
        usdcReward: '9',
        status: 'ending',
      },
      {
        id: '10',
        title: 'Mentor Program',
        academy: 'Leadership Academy',
        date: '03/19/2025',
        time: '6:00 PM',
        questName: 'Mentor New Students',
        usdcBonded: '1,000',
        usdcReward: '25',
        status: 'ending',
      },
    ];

    let filtered = allQuests.filter(quest => quest.status === activeTab);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(quest =>
        quest.title.toLowerCase().includes(query) ||
        quest.academy.toLowerCase().includes(query) ||
        quest.questName.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [activeTab, searchQuery]);

  return (
    <div className={styles.questPageContainer}>
      {/* Outer wrapper matching hero banner width */}
      <div className={styles.outerWrapper}>
        {/* Outermost wrapper with F4F5FE background and 40px padding */}
        <div className={styles.blackWrapper}>
          {/* Innermost wrapper with black background and black border */}
          <div className={styles.additionalWrapper}>
                {/* Bento Grid Layout */}
                <div className={styles.bentoGrid}>
            {/* Left/Middle Section */}
            <div className={styles.leftSection}>
              {/* Main Large Card - Crypto Reserve Card */}
              <div className={styles.mainCard}>
                <div className={styles.mainCardContent}>
                  <div className={styles.mainCardLeft}>
                    <h2 className={styles.vaultedReservesTitle}>Vaulted Reserves</h2>
                    <div className={styles.amountValue}>$324,946,254.84</div>
                    <div className={styles.cryptoList}>ETH, BTC, DOT, INU, & SOL</div>
                    <div className={styles.cryptoIconsGroup}>
                      <div className={styles.cryptoIcon}>
                        <div className={styles.cryptoIconBg}>
                          <Image
                            src="/icons/ethcolored.svg"
                            alt="ETH"
                            width={48}
                            height={48}
                            className={styles.cryptoIconImage}
                          />
                        </div>
                      </div>
                      <div className={styles.cryptoIcon}>
                        <div className={styles.cryptoIconBg}>
                          <Image
                            src="/icons/bitcoin-btc-logo.svg"
                            alt="BTC"
                            width={48}
                            height={48}
                            className={styles.cryptoIconImage}
                          />
                        </div>
                      </div>
                      <div className={styles.cryptoIcon}>
                        <div className={styles.cryptoIconBg}>
                          <Image
                            src="/icons/polkadot.svg"
                            alt="DOT"
                            width={48}
                            height={48}
                            className={styles.cryptoIconImage}
                          />
                        </div>
                      </div>
                      <div className={styles.cryptoIcon}>
                        <div className={styles.cryptoIconBg}>
                          <Image
                            src="/icons/shibainu.svg"
                            alt="INU"
                            width={48}
                            height={48}
                            className={styles.cryptoIconImage}
                          />
                        </div>
                      </div>
                      <div className={styles.cryptoIcon}>
                        <div className={styles.cryptoIconBg}>
                          <Image
                            src="/icons/sol-logo.svg"
                            alt="SOL"
                            width={48}
                            height={48}
                            className={styles.cryptoIconImage}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.percentageChange}>
                      <svg className={styles.arrowUp} width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 0L10 20M10 0L0 10M10 0L20 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className={styles.percentageText}>9.23% LAST 24h</span>
                    </div>
                  </div>
                  <div className={styles.mainCardRight}>
                  </div>
                </div>
              </div>

              {/* Quest Alert */}
              <div className={styles.questAlert}>
                <div className={styles.questAlertContent}>
                  <div className={styles.questAlertLeft}>
                    <Image
                      src="/icons/Survey.svg"
                      alt="Survey"
                      width={32}
                      height={32}
                      className={styles.questAlertIcon}
                    />
                    <div className={styles.questAlertText}>
                      This week holds several voting opportunities...
                    </div>
                  </div>
                  <button className={styles.questAlertButton}>
                    <span className={styles.questAlertButtonLabel}>New Quest</span>
                    <svg className={styles.questAlertButtonIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Voting Cards */}
              <div className={styles.votingCardsContainer}>
                {/* Voting Card 1 */}
                <div className={styles.votingCard}>
                  <div className={styles.votingCardContent}>
                    {/* Featured Badge */}
                    <div className={styles.featuredBadge}>
                      <span className={styles.featuredText}>Featured</span>
                    </div>

                    {/* Title and Description */}
                    <div className={styles.votingCardHeader}>
                      <h3 className={styles.votingCardTitle}>Otaku Library Expansion</h3>
                      <p className={styles.votingCardDescription}>
                        Description: Expand our digital library to include manga, anime theory essays, and curated playlists for members exploring the intersection of animation, mental health, and cultural storytelling.
                      </p>
                      <p className={styles.votingCardPublisher}>Published by 0x252...eg0d</p>
                    </div>

                    {/* Votes Section */}
                    <div className={styles.votesSection}>
                      <h4 className={styles.votesTitle}>Votes</h4>
                      
                      {/* Vote Option 1 */}
                      <div className={styles.voteOption}>
                        <div className={styles.voteOptionHeader}>
                          <span className={styles.voteNumber}>10</span>
                          <span className={styles.votePercentage}>74%</span>
                        </div>
                        <div className={styles.voteProgressBar}>
                          <div className={styles.voteProgressBarBg}></div>
                          <div className={styles.voteProgressBarFill} style={{ width: '74%' }}></div>
                        </div>
                        <span className={styles.voteCount}>1633 votes</span>
                      </div>

                      {/* Vote Option 2 */}
                      <div className={styles.voteOption}>
                        <div className={styles.voteOptionHeader}>
                          <span className={styles.voteNumber}>10</span>
                          <span className={styles.votePercentage}>14%</span>
                        </div>
                        <div className={styles.voteProgressBar}>
                          <div className={styles.voteProgressBarBg}></div>
                          <div className={styles.voteProgressBarFill} style={{ width: '14%' }}></div>
                        </div>
                        <span className={styles.voteCount}>154 votes</span>
                      </div>

                      {/* Vote Buttons */}
                      <div className={styles.voteButtons}>
                        <button className={styles.voteButtonYes}>Yes</button>
                        <button className={styles.voteButtonNo}>No</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Voting Card 2 */}
                <div className={styles.votingCard}>
                  <div className={styles.votingCardContent}>
                    {/* Featured Badge */}
                    <div className={styles.featuredBadge}>
                      <span className={styles.featuredText}>Featured</span>
                    </div>

                    {/* Title and Description */}
                    <div className={styles.votingCardHeader}>
                      <h3 className={styles.votingCardTitle}>Otaku Library Expansion</h3>
                      <p className={styles.votingCardDescription}>
                        Description: Expand our digital library to include manga, anime theory essays, and curated playlists for members exploring the intersection of animation, mental health, and cultural storytelling.
                      </p>
                      <p className={styles.votingCardPublisher}>Published by 0x252...eg0d</p>
                    </div>

                    {/* Votes Section */}
                    <div className={styles.votesSection}>
                      <h4 className={styles.votesTitle}>Votes</h4>
                      
                      {/* Vote Option 1 */}
                      <div className={styles.voteOption}>
                        <div className={styles.voteOptionHeader}>
                          <span className={styles.voteNumber}>10</span>
                          <span className={styles.votePercentage}>74%</span>
                        </div>
                        <div className={styles.voteProgressBar}>
                          <div className={styles.voteProgressBarBg}></div>
                          <div className={styles.voteProgressBarFill} style={{ width: '74%' }}></div>
                        </div>
                        <span className={styles.voteCount}>1633 votes</span>
                      </div>

                      {/* Vote Option 2 */}
                      <div className={styles.voteOption}>
                        <div className={styles.voteOptionHeader}>
                          <span className={styles.voteNumber}>10</span>
                          <span className={styles.votePercentage}>14%</span>
                        </div>
                        <div className={styles.voteProgressBar}>
                          <div className={styles.voteProgressBarBg}></div>
                          <div className={styles.voteProgressBarFill} style={{ width: '14%' }}></div>
                        </div>
                        <span className={styles.voteCount}>154 votes</span>
                      </div>

                      {/* Vote Buttons */}
                      <div className={styles.voteButtons}>
                        <button className={styles.voteButtonYes}>Yes</button>
                        <button className={styles.voteButtonNo}>No</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quest Components Section */}
              <div className={styles.questsSection}>
                {/* Quest List */}
                <div className={styles.questsList}>
                  {filteredQuests.length > 0 ? (
                    filteredQuests.map((quest) => (
                      <QuestCard
                        key={quest.id}
                        title={quest.title}
                        academy={quest.academy}
                        date={quest.date}
                        time={quest.time}
                        questName={quest.questName}
                        usdcBonded={quest.usdcBonded}
                        usdcReward={quest.usdcReward}
                      />
                    ))
                  ) : (
                    <div className={styles.noQuests}>
                      <p>No quests found matching your search criteria.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Section - 2 Rectangles */}
            <div className={styles.rightSection}>
              {/* Your Profile Card */}
              <div className={styles.profileCard}>
                <div className={styles.profileCardContent}>
                  {/* Your Profile Title - Top and Centered */}
                  <h3 className={styles.profileCardTitle}>Your Profile</h3>
                  
                  {/* Top Image */}
                  <div className={styles.profileCardTopImage}>
                    <Image
                      src="https://i.imgur.com/875phfv.png"
                      alt="Profile"
                      width={400}
                      height={200}
                      className={styles.profileCardImage}
                    />
                  </div>
                  
                  {/* Locked Button */}
                  <button className={styles.lockedButton}>
                    Locked
                  </button>
                  
                  {/* Stats Section */}
                  <div className={styles.statsSection}>
                    <h4 className={styles.statsTitle}>TOTAL ATTESTATIONS</h4>
                    
                    <div className={styles.statsList}>
                      {/* Credit Score */}
                      <div className={styles.statRow}>
                        <span className={styles.statLabel}>Credit Score</span>
                        <span className={styles.statValue}>534</span>
                      </div>
                      
                      {/* Tokens Held */}
                      <div className={styles.statRow}>
                        <span className={styles.statLabel}>Tokens Held</span>
                        <span className={styles.statValue}>3,254</span>
                      </div>
                      
                      {/* Onchain Votes */}
                      <div className={styles.statRow}>
                        <span className={styles.statLabel}>Onchain Votes</span>
                        <span className={styles.statValue}>63</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.rightRectangle}>
                <p className={styles.rectanglePlaceholder}>Rectangle 2</p>
              </div>
            </div>
          </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default QuestPage;

