'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import QuestPage from '@/components/quests/QuestPage';
import { Footer } from '@/components/footer/Footer';

export default function QuestsPage() {
  return (
    <>
      <Navbar />
      <QuestPage />
      <Footer />
    </>
  );
}

