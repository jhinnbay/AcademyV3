'use client';

import { useEffect } from 'react';
import 'intro.js/introjs.css';

const getTourSteps = () => [
  {
    title: 'Welcome to Mental Wealth Academy! 👋',
    intro: 'Welcome to Mental Wealth Academy - a modular learning management framework designed to help you achieve your educational goals. Let\'s take a quick tour to explore all the features and get you started!',
    element: 'body',
  },
  {
    title: 'Create Your Account',
    intro: 'Start by creating your account to access personalized learning paths and track your progress.',
    element: '[data-intro="create-account"]',
    position: 'right',
  },
  {
    title: 'Sign In With Ethereum',
    intro: 'Connect your Ethereum wallet to sign in securely and access blockchain-powered features.',
    element: '[data-intro="sign-in"]',
    position: 'right',
  },
  {
    title: 'Explore Quests',
    intro: 'Browse available quests and challenges. Complete them to earn USDC rewards and advance your learning journey.',
    element: '[data-intro="explore-quests"]',
    position: 'right',
  },
  {
    title: 'IPFS Library',
    intro: 'Browse educational content stored on IPFS. Explore books, resources, and learning materials in our decentralized library.',
    element: '[data-intro="library-card"]',
    position: 'right',
  },
  {
    title: 'Farcaster Friends',
    intro: 'Connect with friends from Farcaster and build your learning community. See top contributors and engage with the community.',
    element: '[data-intro="farcaster-friends"]',
    position: 'right',
  },
  {
    title: 'AI Learning Paths',
    intro: 'Discover personalized learning paths recommended by Rubi AI. Click "Daily Faucet" to get AI-powered recommendations tailored to your goals!',
    element: '[data-intro="banner-card"]',
    position: 'left',
  },
  {
    title: 'Prompt Library & Messageboard',
    intro: 'Access the prompt library and messageboard to connect with the community, share knowledge, and collaborate on learning projects.',
    element: '[data-intro="prompt-library"]',
    position: 'left',
  },
  {
    title: 'Active Quests',
    intro: 'Complete quests to earn USDC rewards! View all available quests to start your journey and track your progress.',
    element: '[data-intro="quests"]',
    position: 'left',
  },
  {
    title: 'You\'re All Set! 🎉',
    intro: 'You\'re ready to start your learning journey! You can access this tour again from your profile settings. Happy learning!',
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
    tooltipClass: 'customTooltip',
    highlightClass: 'customHighlight',
  });

  // Set initial tooltip width to prevent abrupt changes and improve readability
  intro.onbeforechange(() => {
    const tooltip = document.querySelector('.introjs-tooltip') as HTMLElement;
    if (tooltip) {
      const viewportWidth = window.innerWidth;
      const maxTooltipWidth = Math.min(400, viewportWidth - 80);
      const minTooltipWidth = Math.min(320, viewportWidth - 80);
      
      // Better sizing for readability
      tooltip.style.minWidth = `${Math.max(320, minTooltipWidth)}px`;
      tooltip.style.maxWidth = `${maxTooltipWidth}px`;
      tooltip.style.width = 'auto';
      tooltip.style.boxSizing = 'border-box';
      
      // Improve text readability
      tooltip.style.color = '#ffffff';
      tooltip.style.backgroundColor = '#1a1a1a';
      tooltip.style.border = '2px solid #4a4a4a';
      tooltip.style.borderRadius = '8px';
      tooltip.style.padding = '20px';
      tooltip.style.fontSize = '14px';
      tooltip.style.lineHeight = '1.6';
      tooltip.style.zIndex = '999999';
      
      // Ensure tooltip text is readable
      const titleElement = tooltip.querySelector('.introjs-tooltiptitle') as HTMLElement;
      if (titleElement) {
        titleElement.style.color = '#ffffff';
        titleElement.style.fontSize = '18px';
        titleElement.style.fontWeight = '600';
        titleElement.style.marginBottom = '12px';
      }
      
      const contentElement = tooltip.querySelector('.introjs-tooltipcontent') as HTMLElement;
      if (contentElement) {
        contentElement.style.color = '#e0e0e0';
        contentElement.style.fontSize = '14px';
        contentElement.style.lineHeight = '1.6';
      }
    }
    return true;
  });

  // Set consistent tooltip width and ensure it stays within viewport with improved readability
  intro.onafterchange(() => {
    setTimeout(() => {
      const tooltip = document.querySelector('.introjs-tooltip') as HTMLElement;
      if (tooltip) {
        const currentStep = (intro as any)._currentStep;
        const steps = getTourSteps();
        const step = steps[currentStep];
        
        // Calculate max width based on viewport to prevent overflow
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Better sizing - smaller for individual components, larger for body elements
        let maxTooltipWidth: number;
        let minTooltipWidth: number;
        
        if (step && step.element === 'body') {
          maxTooltipWidth = Math.min(500, viewportWidth - 80);
          minTooltipWidth = Math.min(400, viewportWidth - 80);
        } else {
          maxTooltipWidth = Math.min(400, viewportWidth - 80);
          minTooltipWidth = Math.min(320, viewportWidth - 80);
        }
        
        tooltip.style.minWidth = `${Math.max(320, minTooltipWidth)}px`;
        tooltip.style.maxWidth = `${maxTooltipWidth}px`;
        tooltip.style.width = 'auto';
        tooltip.style.boxSizing = 'border-box';
        
        // Improve readability with better styling
        tooltip.style.color = '#ffffff';
        tooltip.style.backgroundColor = '#1a1a1a';
        tooltip.style.border = '2px solid #4a4a4a';
        tooltip.style.borderRadius = '8px';
        tooltip.style.padding = '20px';
        tooltip.style.fontSize = '14px';
        tooltip.style.lineHeight = '1.6';
        tooltip.style.zIndex = '999999';
        tooltip.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        
        // Position tooltip to stay within viewport
        const tooltipRect = tooltip.getBoundingClientRect();
        if (tooltipRect.bottom > viewportHeight) {
          tooltip.style.top = `${viewportHeight - tooltipRect.height - 20}px`;
        }
        if (tooltipRect.right > viewportWidth) {
          tooltip.style.left = `${viewportWidth - tooltipRect.width - 20}px`;
        }
        if (tooltipRect.left < 0) {
          tooltip.style.left = '20px';
        }
        if (tooltipRect.top < 0) {
          tooltip.style.top = '20px';
        }
        
        // Ensure tooltip text is readable
        const titleElement = tooltip.querySelector('.introjs-tooltiptitle') as HTMLElement;
        if (titleElement) {
          titleElement.style.color = '#ffffff';
          titleElement.style.fontSize = '18px';
          titleElement.style.fontWeight = '600';
          titleElement.style.marginBottom = '12px';
        }
        
        const contentElement = tooltip.querySelector('.introjs-tooltipcontent') as HTMLElement;
        if (contentElement) {
          contentElement.style.color = '#e0e0e0';
          contentElement.style.fontSize = '14px';
          contentElement.style.lineHeight = '1.6';
        }
        
        // Ensure buttons container doesn't overflow and is readable
        const buttonsContainer = tooltip.querySelector('.introjs-tooltipbuttons') as HTMLElement;
        if (buttonsContainer) {
          buttonsContainer.style.width = '100%';
          buttonsContainer.style.boxSizing = 'border-box';
          buttonsContainer.style.overflow = 'hidden';
          buttonsContainer.style.marginTop = '16px';
          buttonsContainer.style.paddingTop = '16px';
          buttonsContainer.style.borderTop = '1px solid #4a4a4a';
        }
        
        // Style buttons for better readability
        const buttons = tooltip.querySelectorAll('.introjs-button') as NodeListOf<HTMLElement>;
        buttons.forEach((button) => {
          button.style.color = '#ffffff';
          button.style.backgroundColor = '#4a4a4a';
          button.style.border = '1px solid #6a6a6a';
          button.style.borderRadius = '4px';
          button.style.padding = '8px 16px';
          button.style.cursor = 'pointer';
          button.style.transition = 'all 0.2s';
        });
        
        const nextButton = tooltip.querySelector('.introjs-nextbutton') as HTMLElement;
        if (nextButton) {
          nextButton.style.backgroundColor = '#0066cc';
          nextButton.style.borderColor = '#0080ff';
        }
      }
      
      // Improve highlight overlay readability
      const overlay = document.querySelector('.introjs-overlay') as HTMLElement;
      if (overlay) {
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      }
      
      const highlight = document.querySelector('.introjs-helperLayer') as HTMLElement;
      if (highlight) {
        highlight.style.border = '3px solid #0066cc';
        highlight.style.borderRadius = '8px';
        highlight.style.boxShadow = '0 0 0 9999px rgba(0, 0, 0, 0.7)';
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

