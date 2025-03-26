'use client'

import { useState, useEffect, useRef, KeyboardEvent } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import styles from './NavMenu.module.css'
import navbarStyles from './Navbar.module.css'

interface NavMenuProps {
  isOpen: boolean;
  onCloseAction: () => void;
}

export default function NavMenu({ isOpen, onCloseAction }: NavMenuProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuItemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const pathname = usePathname();

  // Chiude il menu quando cambia la route
  useEffect(() => {
    onCloseAction();
    setActiveDropdown(null);
  }, [pathname, onCloseAction]);

  // Chiude il dropdown quando si clicca fuori
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Verifica se il click è stato fatto su un pulsante del dropdown
      const target = event.target as HTMLElement;
      if (target.closest(`.${styles.dropdown_toggle}`)) {
        return;
      }
      
      // Verifica se il click è stato fatto fuori dal menu
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownClick = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Chiude il dropdown quando si seleziona un link
  const handleLinkClick = () => {
    setActiveDropdown(null);
    onCloseAction();
  };

  const handleDropdownKeyDown = (e: KeyboardEvent<HTMLButtonElement>, dropdownName: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleDropdownClick(dropdownName)
    } else if (e.key === 'Escape' && activeDropdown) {
      setActiveDropdown(null)
    }
  }

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
          <div 
            className={clsx(styles.dropdown_menu, {
              [styles.active]: activeDropdown === 'servizi'
            })}
          >
            <Link 
              href="/strategia-energetica" 
              className={styles.dropdown_link}
              onClick={handleLinkClick}
            >
              Strategia Energetica Aziendale
            </Link>
            <Link 
              href="/accesso-incentivi" 
              className={styles.dropdown_link}
              onClick={handleLinkClick}
            >
              Accesso agli Incentivi e Bandi
            </Link>
            <Link 
              href="/comunita-energetiche" 
              className={styles.dropdown_link}
              onClick={handleLinkClick}
            >
              Comunità Energetiche e Autoconsumo Incentivato
            </Link>
            <Link 
              href="/monetizzazione-ambientale" 
              className={styles.dropdown_link}
              onClick={handleLinkClick}
            >
              Monetizzazione Ambientale
            </Link>
            <Link 
              href="/consulenza-finanziaria" 
              className={styles.dropdown_link}
              onClick={handleLinkClick}
            >
              Consulenza Finanziaria Integrata
            </Link>
          </div>
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
