'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'
import PolicyModal from '../PolicyModal/PolicyModal'
import { SEO_CONSTANTS } from '../../utils/seoConstants'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false)
  const [policyType, setPolicyType] = useState<'cookie' | 'privacy' | 'terms'>('privacy')

  const openPolicyModal = (type: 'cookie' | 'privacy' | 'terms') => {
    setPolicyType(type)
    setIsPolicyModalOpen(true)
  }

  const closePolicyModal = () => {
    setIsPolicyModalOpen(false)
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_top}>
          <div className={styles.footer_logo}>
            <Link href="/">
              <Image
                src="/images/logobus.png"
                alt="solariXbusiness Logo"
                width={150}
                height={80}
                className={styles.logo}
              />
            </Link>
            <p className={styles.slogan}>Energia per il tuo business</p>
          </div>
          
          <div className={styles.footer_links}>
            <div className={styles.footer_column}>
              <h3 className={styles.footer_title}>Azienda</h3>
              <ul className={styles.footer_menu}>
                <li><Link href="/chi-siamo">Chi Siamo</Link></li>
                <li><Link href="/contatti">Contatti</Link></li>
              </ul>
            </div>
            
            <div className={styles.footer_column}>
              <h3 className={styles.footer_title}>Servizi</h3>
              <ul className={styles.footer_menu}>
                <li><Link href="/fotovoltaico-aziende">Fotovoltaico per Aziende</Link></li>
                <li><Link href="/cer">Comunità Energetiche</Link></li>
                <li><Link href="/conto-termico">Conto Termico 3.0</Link></li>
              </ul>
            </div>
            
            <div className={styles.footer_column}>
              <h3 className={styles.footer_title}>Contatti</h3>
              <address className={styles.contact_info}>
                <p>Via Esempio, 123</p>
                <p>10100 Torino (TO)</p>
                <p>Email: <a href={`mailto:${SEO_CONSTANTS.COMPANY_EMAIL}`}>{SEO_CONSTANTS.COMPANY_EMAIL}</a></p>
                <p>Tel: <a href={`tel:${SEO_CONSTANTS.COMPANY_PHONE.replace('-', '')}`}>{SEO_CONSTANTS.COMPANY_PHONE.replace('-', ' ')}</a></p>
              </address>
            </div>
          </div>
        </div>
        
        <div className={styles.footer_bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} solariXbusiness. Tutti i diritti riservati.
          </p>
          <div className={styles.legal_links}>
            <button 
              className={styles.policy_link}
              onClick={() => openPolicyModal('privacy')}
            >
              Privacy Policy
            </button>
            <button 
              className={styles.policy_link}
              onClick={() => openPolicyModal('cookie')}
            >
              Cookie Policy
            </button>
            <button 
              className={styles.policy_link}
              onClick={() => openPolicyModal('terms')}
            >
              Termini e Condizioni
            </button>
          </div>
        </div>
      </div>
      
      <PolicyModal 
        isOpen={isPolicyModalOpen}
        onCloseAction={closePolicyModal}
        type={policyType}
      />
    </footer>
  )
}
