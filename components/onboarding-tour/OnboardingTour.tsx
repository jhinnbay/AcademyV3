'use client';

import { useEffect } from 'react';
import 'intro.js/introjs.css';

const getTourSteps = () => [
  {
    title: 'Welcome to Mental Wealth Academy! 👋',
    intro: 'Welcome! Let\'s take a quick tour to help you get started and explore all the features.',
    element: 'body',
  },
  {
    title: 'Navigation & Account',
    intro: 'Create an account, sign in, or explore quests and resources from here.',
    element: '[data-intro="side-navigation"]',
  },
  {
    title: 'AI Learning Paths',
    intro: 'Discover personalized learning paths recommended by Rubi AI. Click "Daily Faucet" to begin!',
    element: '[data-intro="banner-card"]',
  },
  {
    title: 'Prompt Library',
    intro: 'Access the prompt library and messageboard to connect with the community.',
    element: '[data-intro="prompt-library"]',
  },
  {
    title: 'IPFS Library',
    intro: 'Browse educational content stored on IPFS. Explore books and resources in the library. You can find this in the side navigation.',
    element: '[data-intro="side-navigation"]',
  },
  {
    title: 'Active Quests',
    intro: 'Complete quests to earn USDC rewards! View all available quests to start your journey.',
    element: '[data-intro="quests"]',
  },
  {
    title: 'Farcaster Friends',
    intro: 'Connect with friends from Farcaster and build your learning community.',
    element: '[data-intro="farcaster-friends"]',
  },
  {
    title: 'You\'re All Set! 🎉',
    intro: 'You can access this tour again from your profile settings. Happy learning!',
    element: 'body',
  },
];

export const startOnboardingTour = async () => {
  // Dynamically import intro.js only on client side
  if (typeof window === 'undefined') return;
  
  const introJs = (await import('intro.js')).default;
  const intro = introJs();
  
  intro.setOptions({
    steps: getTourSteps(),
    showProgress: true,
    showBullets: true,
    exitOnOverlayClick: false,
    exitOnEsc: true,
    nextLabel: 'Next →',
    prevLabel: '← Previous',
    skipLabel: 'Skip Tour',
    doneLabel: 'Got it!',
  });

  // Set initial tooltip width to prevent abrupt changes
  intro.onbeforechange(() => {
    const tooltip = document.querySelector('.introjs-tooltip') as HTMLElement;
    if (tooltip) {
      const viewportWidth = window.innerWidth;
      const maxTooltipWidth = Math.min(850, viewportWidth - 40);
      const minTooltipWidth = Math.min(600, viewportWidth - 40);
      tooltip.style.minWidth = `${Math.max(600, minTooltipWidth)}px`;
      tooltip.style.maxWidth = `${maxTooltipWidth}px`;
      tooltip.style.width = 'auto';
      tooltip.style.boxSizing = 'border-box';
    }
    return true;
  });

  // Set consistent tooltip width and ensure it stays within viewport
  intro.onafterchange(() => {
    setTimeout(() => {
      const tooltip = document.querySelector('.introjs-tooltip') as HTMLElement;
      if (tooltip) {
        const currentStep = (intro as any)._currentStep;
        const steps = getTourSteps();
        const step = steps[currentStep];
        
        // Calculate max width based on viewport to prevent overflow
        const viewportWidth = window.innerWidth;
        const maxTooltipWidth = Math.min(850, viewportWidth - 40);
        const minTooltipWidth = Math.min(600, viewportWidth - 40);
        
        // Make first and last steps (body elements) wider, but respect viewport
        if (step && step.element === 'body') {
          tooltip.style.minWidth = `${Math.max(600, minTooltipWidth)}px`;
          tooltip.style.maxWidth = `${maxTooltipWidth}px`;
        } else {
          tooltip.style.minWidth = `${Math.max(600, minTooltipWidth)}px`;
          tooltip.style.maxWidth = `${maxTooltipWidth}px`;
        }
        
        // Ensure tooltip doesn't extend beyond viewport
        tooltip.style.width = 'auto';
        tooltip.style.boxSizing = 'border-box';
        
        // Ensure buttons container doesn't overflow
        const buttonsContainer = tooltip.querySelector('.introjs-tooltipbuttons') as HTMLElement;
        if (buttonsContainer) {
          buttonsContainer.style.width = '100%';
          buttonsContainer.style.boxSizing = 'border-box';
          buttonsContainer.style.overflow = 'hidden';
        }
      }
    }, 10);
  });

  intro.start();
  
  // Mark tour as seen when it's completed or skipped
  intro.oncomplete(() => {
    localStorage.setItem('hasSeenOnboardingTour', 'true');
  });
  
  intro.onexit(() => {
    localStorage.setItem('hasSeenOnboardingTour', 'true');
  });
};

const OnboardingTour: React.FC = () => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Check if user has already seen the tour
    const hasSeenTour = localStorage.getItem('hasSeenOnboardingTour');
    
    if (!hasSeenTour) {
      // Small delay to ensure DOM is fully rendered
      const timer = setTimeout(() => {
        startOnboardingTour();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, []);

  return null;
};

export default OnboardingTour;

