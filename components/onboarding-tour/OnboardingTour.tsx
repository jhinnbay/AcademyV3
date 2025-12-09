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
    title: 'AI Learning Paths',
    intro: 'Discover personalized learning paths recommended by Rubi AI. Click "Daily Faucet" to get AI-powered recommendations tailored to your goals!',
    element: '[data-intro="banner-card"]',
  },
  {
    title: 'Messageboard',
    intro: 'Jump into the messageboard to connect with the community, share knowledge, and collaborate on learning projects.',
    element: '[data-intro="messageboard-card"]',
  },
  {
    title: 'Active Quests',
    intro: 'Complete quests to earn USDC rewards! View all available quests to start your journey and track your progress.',
    element: '[data-intro="quests"]',
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
  
  // Track positioning to prevent jumping
  let isPositioning = false;
  
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
    overlayOpacity: 0.5,
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
    // Use requestAnimationFrame for better timing with DOM updates
    requestAnimationFrame(() => {
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
        
        // Center tooltip in the viewport to avoid edge shifting
        const tooltipRect = tooltip.getBoundingClientRect();
        const centeredLeft = (viewportWidth - tooltipRect.width) / 2;
        const centeredTop = (viewportHeight - tooltipRect.height) / 2;
        tooltip.style.position = 'fixed';
        tooltip.style.left = `${Math.max(20, centeredLeft)}px`;
        tooltip.style.top = `${Math.max(20, centeredTop)}px`;
        tooltip.style.margin = '0';
        tooltip.style.transform = 'none';
        
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
          buttonsContainer.style.overflow = 'visible';
          buttonsContainer.style.marginTop = '16px';
          buttonsContainer.style.paddingTop = '16px';
          buttonsContainer.style.borderTop = '1px solid #4a4a4a';
          buttonsContainer.style.display = 'flex';
          buttonsContainer.style.justifyContent = 'space-between';
          buttonsContainer.style.alignItems = 'center';
          buttonsContainer.style.gap = '12px';
          buttonsContainer.style.position = 'relative';
          
          // Get buttons
          const prevButton = tooltip.querySelector('.introjs-prevbutton') as HTMLElement;
          const skipButton = tooltip.querySelector('.introjs-skipbutton') as HTMLElement;
          const nextButton = tooltip.querySelector('.introjs-nextbutton') as HTMLElement;
          
          // Position buttons: Previous (left), Skip (center), Next (right)
          if (prevButton) {
            prevButton.style.order = '1';
            prevButton.style.marginRight = 'auto';
          }
          
          if (skipButton) {
            skipButton.style.order = '2';
            skipButton.style.position = 'relative';
            skipButton.style.left = '0';
            skipButton.style.transform = 'none';
            skipButton.style.margin = '0 auto';
            skipButton.style.flex = '0 0 auto';
          }
          
          if (nextButton) {
            nextButton.style.order = '3';
            nextButton.style.marginLeft = 'auto';
          }
        }
        
        // Style buttons for better readability and prevent clipping
        const buttons = tooltip.querySelectorAll('.introjs-button') as NodeListOf<HTMLElement>;
        buttons.forEach((button) => {
          button.style.color = '#ffffff';
          button.style.backgroundColor = '#4a4a4a';
          button.style.border = '1px solid #6a6a6a';
          button.style.borderRadius = '4px';
          button.style.padding = '8px 16px';
          button.style.cursor = 'pointer';
          button.style.transition = 'all 0.2s';
          button.style.whiteSpace = 'nowrap';
          button.style.overflow = 'visible';
          button.style.textOverflow = 'clip';
        });
        
        const prevButton = tooltip.querySelector('.introjs-prevbutton') as HTMLElement;
        if (prevButton) {
          prevButton.style.overflow = 'visible';
        }
        
        const skipButton = tooltip.querySelector('.introjs-skipbutton') as HTMLElement;
        if (skipButton) {
          skipButton.style.overflow = 'visible';
          skipButton.style.whiteSpace = 'nowrap';
        }
        
        const nextButton = tooltip.querySelector('.introjs-nextbutton') as HTMLElement;
        if (nextButton) {
          nextButton.style.backgroundColor = '#0066cc';
          nextButton.style.borderColor = '#0080ff';
          nextButton.style.overflow = 'visible';
        }
        
        // Ensure tooltip itself doesn't clip content
        tooltip.style.overflow = 'visible';
      }
      
      // Improve highlight overlay readability
      const overlay = document.querySelector('.introjs-overlay') as HTMLElement;
      if (overlay) {
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      }
      
      const highlight = document.querySelector('.introjs-helperLayer') as HTMLElement;
      if (highlight) {
        highlight.style.border = '3px solid #0066cc';
        highlight.style.borderRadius = '8px';
        highlight.style.boxShadow = '0 0 0 9999px rgba(0, 0, 0, 0.7)';
      }
      }, 50);
    });
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

