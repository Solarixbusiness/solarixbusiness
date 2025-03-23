'use client'

import { useState, useEffect, useRef, KeyboardEvent } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import styles from './NavMenu.module.css'
import navbarStyles from './Navbar.module.css'

interface NavMenuProps {
  isOpen: boolean
}

export default function NavMenu({ isOpen }: NavMenuProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const menuItemRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const handleDropdownClick = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
  }

  const handleDropdownKeyDown = (e: KeyboardEvent<HTMLButtonElement>, dropdownName: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleDropdownClick(dropdownName)
    } else if (e.key === 'Escape' && activeDropdown) {
      setActiveDropdown(null)
    }
  }

  useEffect(() => {
    // Verifica se siamo in ambiente browser
    if (typeof window === 'undefined' || !document) return;
    
    try {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setActiveDropdown(null)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    } catch (error) {
      console.error('Errore durante la gestione del click outside nel NavMenu:', error);
    }
  }, [])

  return (
    <nav 
      ref={dropdownRef} 
      className={clsx(styles.navbar_menu, {
        [styles['navbar_menu--active']]: isOpen
      })}
      aria-label="Menu principale"
      role="navigation"
    >
      <ul className={styles.menu_items} role="menubar">
        <li className={styles.menu_item} role="none">
          <Link href="/" className={styles.menu_link} role="menuitem" tabIndex={0}>HOME</Link>
        </li>
        <li className={styles.menu_item} role="none">
          <Link href="/chi-siamo" className={styles.menu_link} role="menuitem" tabIndex={0}>CHI SIAMO</Link>
        </li>
        
        {/* Dropdown Servizi */}
        <li className={clsx(styles.menu_item, styles.dropdown)} role="none">
          <button 
            ref={(el) => {
              menuItemRefs.current['servizi'] = el;
            }}
            onClick={() => handleDropdownClick('servizi')}
            onKeyDown={(e) => handleDropdownKeyDown(e, 'servizi')}
            className={clsx(styles.dropdown_toggle, navbarStyles.bold_link)}
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'servizi'}
            role="menuitem"
            tabIndex={0}
          >
            SERVIZI
          </button>
          <ul 
            className={clsx(styles.dropdown_menu, {
              [styles['dropdown_menu--active']]: activeDropdown === 'servizi'
            })}
            role="menu"
            aria-label="Servizi"
            hidden={activeDropdown !== 'servizi'}
          >
            <li role="none">
              <Link 
                href="/fotovoltaico-aziende" 
                className={styles.dropdown_link}
                role="menuitem"
                tabIndex={activeDropdown === 'servizi' ? 0 : -1}
              >
                Fotovoltaico per Aziende
              </Link>
            </li>
            <li role="none">
              <Link 
                href="/cer" 
                className={styles.dropdown_link}
                role="menuitem"
                tabIndex={activeDropdown === 'servizi' ? 0 : -1}
              >
                Comunità Energetiche
              </Link>
            </li>
            <li role="none">
              <Link 
                href="/conto-termico" 
                className={styles.dropdown_link}
                role="menuitem"
                tabIndex={activeDropdown === 'servizi' ? 0 : -1}
              >
                Conto Termico 3.0
              </Link>
            </li>
          </ul>
        </li>

        <li className={styles.menu_item} role="none">
          <Link href="/faq" className={styles.menu_link} role="menuitem" tabIndex={0}>FAQ</Link>
        </li>
        
        <li className={styles.menu_item} role="none">
          <Link href="/contatti" className={styles.menu_link} role="menuitem" tabIndex={0}>CONTATTI</Link>
        </li>
      </ul>
    </nav>
  )
}
