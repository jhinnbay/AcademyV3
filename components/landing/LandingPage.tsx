'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from './LandingPage.module.css';

// Dynamically import Scene to avoid SSR issues with Three.js
const Scene = dynamic(() => import('./Scene'), {
  ssr: false,
  loading: () => <div className={styles.canvas} style={{ background: 'var(--color-background)' }} />,
});

const LandingPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    router.push('/home');
  };

  // Memoize Scene to prevent re-renders when form state changes
  const memoizedScene = useMemo(() => <Scene />, []);

  return (
    <div className={styles.container}>
      <div className={styles.canvas}>
        {memoizedScene}
      </div>
      
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <div className={styles.cardContent}>

                        {/* Logo */}
                        <div className={styles.companyHeader}>
              <Image
                src="/icons/spacey2klogo.png"
                alt="Logo"
                width={300}
                height={275}
                className={styles.companyLogo}
                priority
              />
            </div>

            {/* Form */}
            <form className={styles.loginForm} onSubmit={handleLogin}>
              <div className={styles.inputForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email
                  </label>
                  <div className={styles.inputWrapper}>
                    <svg className={styles.inputIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M2.5 6.66667L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66667M4.16667 15H15.8333C16.7538 15 17.5 14.2538 17.5 13.3333V6.66667C17.5 5.74619 16.7538 5 15.8333 5H4.16667C3.24619 5 2.5 5.74619 2.5 6.66667V13.3333C2.5 14.2538 3.24619 15 4.16667 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input
                      type="text"
                      id="email"
                      className={styles.input}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="password" className={styles.label}>
                    Password
                  </label>
                  <div className={styles.inputWrapper}>
                    <svg className={styles.inputIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5.83333 9.16667V6.66667C5.83333 4.36548 7.69881 2.5 10 2.5C12.3012 2.5 14.1667 4.36548 14.1667 6.66667V9.16667M10 12.0833V14.1667M6.66667 17.5H13.3333C14.2538 17.5 15 16.7538 15 15.8333V10.8333C15 9.91286 14.2538 9.16667 13.3333 9.16667H6.66667C5.74619 9.16667 5 9.91286 5 10.8333V15.8333C5 16.7538 5.74619 17.5 6.66667 17.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input
                      type="password"
                      id="password"
                      className={styles.input}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>

                <div className={styles.checkboxGroup}>
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className={styles.checkbox}
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="rememberMe" className={styles.checkboxLabel}>
                    Remember me for 7 days?
                  </label>
                </div>
              </div>

              {/* Actions */}
              <div className={styles.actions}>
                <button
                  type="submit"
                  className={styles.loginButton}
                  disabled={isLoading}
                >
                  {isLoading ? 'Logging in...' : 'Sign up for beta'}
                </button>

                <button
                  type="button"
                  className={styles.linkedinButton}
                  onClick={() => {
                    // Handle LinkedIn login
                    console.log('LinkedIn login');
                  }}
                >
                  <svg className={styles.socialIcon} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </button>

                <button
                  type="button"
                  className={styles.walletButton}
                  onClick={() => {
                    router.push('/home');
                  }}
                >
                  <svg className={styles.socialIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                    <path d="M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                  </svg>
                  Connect Wallet
                </button>

                <div className={styles.signupLink}>
                  Don&apos;t have an account?{' '}
                  <a href="#" className={styles.link}>
                    Oh well...
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

