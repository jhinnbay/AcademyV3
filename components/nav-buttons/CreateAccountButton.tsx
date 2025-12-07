import React from 'react';
import styles from './CreateAccountButton.module.css';

const CreateAccountButton: React.FC = () => {
  return (
    <button className={styles.createAccountButton}>
      <span className={styles.buttonText}>Welcome User!</span>
      <div className={styles.logo}></div>
    </button>
  );
};

export default CreateAccountButton;

