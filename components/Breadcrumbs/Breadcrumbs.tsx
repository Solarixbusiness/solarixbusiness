'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Breadcrumbs.module.css';

interface BreadcrumbItem {
  label: string;
  path: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  showHome?: boolean;
  className?: string;
}

export default function Breadcrumbs({
  items,
  showHome = true,
  className = '',
}: BreadcrumbsProps) {
  const pathname = usePathname();
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  if (pathname === '/') {
    return null;
  }

  const t = (key: string): string => {
    const translations: Record<string, string> = {
      home: 'Home',
      about: 'Chi Siamo',
      solar_business: 'Fotovoltaico Aziende',
      energy_communities: 'CER',
      thermal_account: 'Conto Termico',
      faq: 'FAQ',
      contacts: 'Contatti',
    };

    return translations[key] || key;
  };

  const breadcrumbItems = items || generateBreadcrumbsFromPath(pathname, t);

  const allItems = showHome
    ? [{ label: t('home'), path: '/', isCurrentPage: false }, ...breadcrumbItems]
    : breadcrumbItems;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': `https://www.solarixbusiness.it${item.path}`,
        name: item.label,
      },
    })),
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !document) return;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);

    document.head.appendChild(script);
    scriptRef.current = script;

    return () => {
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
      }
    };
  }, [structuredData]);

  if (allItems.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className={`${styles.breadcrumbs} ${className}`}>
      <ol itemScope itemType="https://schema.org/BreadcrumbList">
        {allItems.map((item, index) => (
          <li
            key={item.path}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className={styles.breadcrumbItem}
          >
            {item.isCurrentPage ? (
              <span itemProp="name" aria-current="page" className={styles.currentPage}>
                {item.label}
              </span>
            ) : (
              <Link href={item.path} itemProp="item" className={styles.breadcrumbLink}>
                <span itemProp="name">{item.label}</span>
              </Link>
            )}
            <meta itemProp="position" content={String(index + 1)} />
            {index < allItems.length - 1 && (
              <span className={styles.separator} aria-hidden="true">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function generateBreadcrumbsFromPath(pathname: string, t: (key: string) => string): BreadcrumbItem[] {
  const pathWithoutLang = pathname.replace(/^\/(it|en)/, '');
  const segments = pathWithoutLang.split('/').filter(Boolean);

  const pageNames: Record<string, string> = {
    'chi-siamo': t('about'),
    'fotovoltaico-aziende': t('solar_business'),
    cer: t('energy_communities'),
    'conto-termico': t('thermal_account'),
    faq: t('faq'),
    contatti: t('contacts'),
  };

  return segments.map((segment, index) => {
    const path = '/' + segments.slice(0, index + 1).join('/');
    const isCurrentPage = index === segments.length - 1;
    const label = pageNames[segment] || segment.replace(/-/g, ' ');

    return {
      label,
      path,
      isCurrentPage,
    };
  });
}
