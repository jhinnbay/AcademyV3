'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/hero/Hero';
import QuestPage from '@/components/quests/QuestPage';

export default function QuestsPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <QuestPage />
    </>
  );
}

