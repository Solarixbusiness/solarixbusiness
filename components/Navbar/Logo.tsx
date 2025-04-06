'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Logo.module.css'

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <Image
        src="/images/logo/logo.png"
        alt="solariXbusiness Logo"
        width={170} 
        height={45}
        loading="eager"
        className={styles.logo_img}
      />
    </Link>
  )
}
