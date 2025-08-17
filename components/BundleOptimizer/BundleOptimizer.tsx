'use client';

import React, { lazy, Suspense } from 'react';

// Lazy load componenti esistenti che potrebbero essere pesanti
const FAQ = lazy(() => import('../FAQ/FAQ'));
const IncentiveSection = lazy(() => import('../IncentiveSection/IncentiveSection'));

// Componenti di fallback leggeri
const ChartSkeleton = () => (
  <div className="animate-pulse bg-gray-200 h-64 w-full rounded"></div>
);

const FormSkeleton = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    <div className="h-10 bg-gray-200 rounded"></div>
  </div>
);

interface BundleOptimizerProps {
  showFAQ?: boolean;
  showIncentives?: boolean;
}

export default function BundleOptimizer({
  showFAQ = false,
  showIncentives = false
}: BundleOptimizerProps) {
  return (
    <div className="bundle-optimizer">
      {showFAQ && (
        <Suspense fallback={<ChartSkeleton />}>
          <FAQ />
        </Suspense>
      )}
      
      {showIncentives && (
        <Suspense fallback={<ChartSkeleton />}>
          <IncentiveSection />
        </Suspense>
      )}
    </div>
  );
}

// Hook per preload condizionale
export const useConditionalPreload = (condition: boolean, importFn: () => Promise<any>) => {
  React.useEffect(() => {
    if (condition) {
      // Preload solo se la condizione è vera
      importFn();
    }
  }, [condition, importFn]);
};

// Componente per preload intelligente
export const IntelligentPreloader = ({ 
  children, 
  shouldPreload = false
}: { 
  children: React.ReactNode;
  shouldPreload?: boolean;
}) => {
  React.useEffect(() => {
    if (shouldPreload) {
      // Preload componenti quando necessario
      import('../FAQ/FAQ');
      import('../IncentiveSection/IncentiveSection');
    }
  }, [shouldPreload]);

  return <>{children}</>;
};
