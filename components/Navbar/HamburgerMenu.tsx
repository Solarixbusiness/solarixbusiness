'use client'

import React from 'react'
import clsx from 'clsx'
import styles from './HamburgerMenu.module.css'

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function HamburgerMenu({ isOpen, toggleMenu }: HamburgerMenuProps) {
  return (
    <button 
      className={clsx(styles.hamburger, {
        [styles['hamburger--active']]: isOpen
      })}
      onClick={toggleMenu}
      aria-label="Menu di navigazione"
      aria-expanded={isOpen}
      aria-controls="main-menu"
    >
      <span className={styles.hamburger__line} aria-hidden="true"></span>
      <span className={styles.hamburger__line} aria-hidden="true"></span>
      <span className={styles.hamburger__line} aria-hidden="true"></span>
    </button>
  )
}
