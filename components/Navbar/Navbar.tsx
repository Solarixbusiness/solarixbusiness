'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import NavMenu from './NavMenu'
import styles from './Navbar.module.css'
import HamburgerMenu from './HamburgerMenu'
import Logo from './Logo'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Verifica se siamo in ambiente browser
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Imposta lo stato iniziale
    handleResize()
    
    // Aggiungi gli event listener
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Chiudi il menu quando si passa da mobile a desktop
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [isMobile, isMenuOpen])

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_logo}>
          <Logo />
        </div>

        {/* Il menu è sempre presente nel DOM */}
        <NavMenu 
          isOpen={isMenuOpen} 
          onCloseAction={() => setIsMenuOpen(false)}
        />

        <div className={styles.navbar_right}>
          {/* Mostra l'hamburger menu solo in modalità mobile */}
          {isMobile && (
            <HamburgerMenu 
              isOpen={isMenuOpen} 
              toggleMenuAction={() => setIsMenuOpen(!isMenuOpen)} 
            />
          )}
        </div>
      </div>
    </header>
  )
}
