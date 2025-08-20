'use client'

import { useState, useEffect, useRef, KeyboardEvent } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

interface NavMenuProps {
  isOpen: boolean;
  onCloseAction: () => void;
}

export default function NavMenu({ isOpen, onCloseAction }: NavMenuProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuItemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const pathname = usePathname();

  // Chiude solo il dropdown quando si clicca fuori
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (target.closest(`.${styles.dropdown_toggle}`)) {
        return;
      }
      
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

  // Chiude sia il dropdown che il menu quando si clicca su un link
  const handleLinkClick = () => {
    setActiveDropdown(null);
    onCloseAction(); // Chiude il menu
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
      className={`${styles.navbar_menu} ${isOpen ? styles.active : ''}`}
      aria-label="Menu principale"
      role="navigation"
    >
      <ul className={styles.menu_items} role="menubar">
        <li className={styles.menu_item} role="none">
          <Link 
            href="/" 
            className={styles.menu_link} 
            role="menuitem" 
            tabIndex={0}
            onClick={handleLinkClick}
          >
            HOME
          </Link>
        </li>
        <li className={styles.menu_item} role="none">
          <Link 
            href="/chi-siamo" 
            className={styles.menu_link} 
            role="menuitem" 
            tabIndex={0}
            onClick={handleLinkClick}
          >
            CHI SIAMO
          </Link>
        </li>
        <li className={styles.menu_item} role="none">
          <Link 
            href="/conto-termico-3-0" 
            className={styles.menu_link} 
            role="menuitem" 
            tabIndex={0}
            onClick={handleLinkClick}
          >
            CONTO TERMICO 3.0
          </Link>
        </li>
        
        {/* Dropdown Servizi */}
        <li className={`${styles.menu_item} ${styles.dropdown}`} role="none">
          <button 
            ref={(el) => {
              menuItemRefs.current['servizi'] = el;
            }}
            onClick={() => handleDropdownClick('servizi')}
            onKeyDown={(e) => handleDropdownKeyDown(e, 'servizi')}
            className={`${styles.dropdown_toggle} ${styles.bold_link}`}
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'servizi'}
            role="menuitem"
            tabIndex={0}
          >
            SERVIZI
          </button>
          <div 
            className={`${styles.dropdown_menu} ${activeDropdown === 'servizi' ? styles.active : ''}`}
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

        {/* Dropdown Strumenti */}
        <li className={`${styles.menu_item} ${styles.dropdown}`} role="none">
          <button 
            ref={(el) => {
              menuItemRefs.current['strumenti'] = el;
            }}
            onClick={() => handleDropdownClick('strumenti')}
            onKeyDown={(e) => handleDropdownKeyDown(e, 'strumenti')}
            className={`${styles.dropdown_toggle} ${styles.bold_link}`}
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'strumenti'}
            role="menuitem"
            tabIndex={0}
          >
            BANDI/INCENTIVI<br />NAZIONALI
          </button>
          <div 
            className={`${styles.dropdown_menu} ${activeDropdown === 'strumenti' ? styles.active : ''}`}
          >
            <Link 
              href="/sabatini-green" 
              className={styles.dropdown_link}
              onClick={handleLinkClick}
            >
              Sabatini GREEN
            </Link>
            <Link 
              href="/transizione-5-0" 
              className={styles.dropdown_link}
              onClick={handleLinkClick}
            >
              TRANSIZIONE 5.0
            </Link>
            <Link 
              href="/transizione-4-0" 
              className={styles.dropdown_link}
              onClick={handleLinkClick}
            >
              TRANSIZIONE 4.0
            </Link>
            <Link 
              href="/simest" 
              className={styles.dropdown_link}
              onClick={handleLinkClick}
            >
              SIMEST
            </Link>
            <Link 
              href="/bando-invitalia" 
              className={styles.dropdown_link}
              onClick={handleLinkClick}
            >
              BANDO INVITALIA
            </Link>
            <Link 
              href="/strumenti/fondo-perduto-cer" 
              className={styles.dropdown_link}
              onClick={handleLinkClick}
            >
              Fondo Perduto CER e tariffa incentivante
            </Link>
          </div>
        </li>

        {/* Dropdown Incentivi Europei */}
        <li className={`${styles.menu_item} ${styles.dropdown}`} role="none">
          <button 
            ref={(el) => {
              menuItemRefs.current['incentivi-europei'] = el;
            }}
            onClick={() => handleDropdownClick('incentivi-europei')}
            onKeyDown={(e) => handleDropdownKeyDown(e, 'incentivi-europei')}
            className={`${styles.dropdown_toggle} ${styles.bold_link}`}
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'incentivi-europei'}
            role="menuitem" 
            tabIndex={0}
          >
            BANDI/INCENTIVI<br />EUROPEI
          </button>
          <div className={`${styles.dropdown_menu} ${activeDropdown === 'incentivi-europei' ? styles.active : ''}`}>
            <Link href="/horizon-europe" className={styles.dropdown_link} onClick={handleLinkClick}>HORIZON EUROPE</Link>
            <Link href="/life-programme" className={styles.dropdown_link} onClick={handleLinkClick}>LIFE PROGRAMME</Link>
            <Link href="/innovation-fund" className={styles.dropdown_link} onClick={handleLinkClick}>INNOVATION FUND</Link>
            <Link href="/eic" className={styles.dropdown_link} onClick={handleLinkClick}>EIC</Link>
            <Link href="/investeu" className={styles.dropdown_link} onClick={handleLinkClick}>INVESTEU</Link>
            <Link href="/psr" className={styles.dropdown_link} onClick={handleLinkClick}>PSR</Link>
            <Link href="/eurostars" className={styles.dropdown_link} onClick={handleLinkClick}>EUROSTARS</Link>
          </div>
        </li>
        
        <li className={styles.menu_item} role="none">
          <Link 
            href="/rating-esg" 
            className={styles.menu_link} 
            role="menuitem" 
            tabIndex={0}
            onClick={handleLinkClick}
          >
            RATING ESG
          </Link>
        </li>
        
        <li className={styles.menu_item} role="none">
          <Link 
            href="/faq" 
            className={styles.menu_link} 
            role="menuitem" 
            tabIndex={0}
            onClick={handleLinkClick}
          >
            FAQ
          </Link>
        </li>
        
        <li className={styles.menu_item} role="none">
          <Link 
            href="/contatti" 
            className={styles.menu_link} 
            role="menuitem" 
            tabIndex={0}
            onClick={handleLinkClick}
          >
            CONTATTI
          </Link>
        </li>
      </ul>
    </nav>
  )
}
