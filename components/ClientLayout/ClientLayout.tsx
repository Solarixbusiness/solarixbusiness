'use client';

import { ReactNode } from 'react';
import AnimatedLayout from '../AnimatedLayout/AnimatedLayout';

interface ClientLayoutProps {
  children: ReactNode;
}

// Esportazione come funzione normale
function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <AnimatedLayout>
      {children}
    </AnimatedLayout>
  );
}

// Esportazione come oggetto per consentire l'importazione dinamica
export { ClientLayout };

// Esportazione di default per l'importazione standard
export default ClientLayout;
