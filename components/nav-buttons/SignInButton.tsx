import React from 'react';
import Image from 'next/image';
import styles from './SignInButton.module.css';

const SignInButton: React.FC = () => {
  return (
    <button className={styles.signInButton}>
      <Image 
        src="/icons/ethlogo.svg" 
        alt="Ethereum logo" 
        width={24}
        height={24}
        className={styles.ethLogo}
      />
      <span className={styles.buttonText}>Sign In With Ethereum</span>
    </button>
  );
};

export default SignInButton;

