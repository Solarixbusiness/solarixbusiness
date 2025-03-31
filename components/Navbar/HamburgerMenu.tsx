'use client'

import React from 'react'
import styles from './Navbar.module.css'

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenuAction: () => void;
}

export default function HamburgerMenu({ isOpen, toggleMenuAction }: HamburgerMenuProps) {
  return (
    <button 
      className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
      onClick={toggleMenuAction}
      aria-label="Menu di navigazione"
      aria-expanded={isOpen}
      aria-controls="main-menu"
    >
      <span className={styles.hamburger_line} aria-hidden="true"></span>
      <span className={styles.hamburger_line} aria-hidden="true"></span>
      <span className={styles.hamburger_line} aria-hidden="true"></span>
    </button>
  )
}
