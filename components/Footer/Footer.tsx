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
                src="/images/logo/logo.png"
                alt="solariXbusiness Logo"
                width={150}
                height={40}
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
                <li><Link href="/strategia-energetica">Strategia Energetica Aziendale</Link></li>
                <li><Link href="/accesso-incentivi">Accesso agli Incentivi e Bandi</Link></li>
                <li><Link href="/comunita-energetiche">Comunità Energetiche e Autoconsumo Incentivato</Link></li>
                <li><Link href="/monetizzazione-ambientale">Monetizzazione Ambientale</Link></li>
                <li><Link href="/consulenza-finanziaria">Consulenza Finanziaria Integrata</Link></li>
              </ul>
            </div>
            
            <div className={styles.footer_column}>
              <h3 className={styles.footer_title}>Contatti</h3>
              <address className={styles.contact_info}>
                <p><strong>Sede Piemonte:</strong> Via Bertolotti 7 | 10121 Torino (TO)</p>
                <p><strong>Sede Lombardia:</strong> Via delle Scuole 1G | 25128 Brescia (BS)</p>
                <p>Email: <a href="mailto:info@solarixbusiness.it">info@solarixbusiness.it</a></p>
                <p>Tel: <a href="tel:01118837752">011 1883 7752</a></p>
                <p>P.IVA: <span className={styles.vat_number}>IT04696370982</span></p>
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
