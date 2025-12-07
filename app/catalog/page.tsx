'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import PromptCatalog from '@/components/prompt-catalog/PromptCatalog';

export default function Catalog() {
  return (
    <>
      <Navbar />
      <main>
        <PromptCatalog />
      </main>
    </>
  );
}

