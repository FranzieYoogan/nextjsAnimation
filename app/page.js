'use client';
import React, { useState } from 'react';
import styles from './styles/Home.module.css'; 
import Header from './header/page';

export default function Home() {

  const [isAnimating, setAnimating] = useState(false);

 
  const handleAnimation = () => {
    setAnimating(!isAnimating); 
  };

  return (
    <div>
      <Header />

      <section className={styles.containerAll}>
        <div>
          <button
            onClick={handleAnimation}
            type="button"
            className={`${styles.buttonStyle} focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}
          >
            Green
          </button>

        
          <div
            style={{
              animationPlayState: isAnimating ? 'running' : 'paused', 
            }}
            className={styles.square}
          ></div>
        </div>
      </section>
    </div>
  );
}
