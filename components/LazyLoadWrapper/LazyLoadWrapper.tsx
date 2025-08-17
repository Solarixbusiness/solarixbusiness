'use client';

import React, { lazy, Suspense, useState, useEffect } from 'react';
import { useTaskOptimization } from '../../hooks/useTaskOptimization';

interface LazyLoadWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export default function LazyLoadWrapper({
  children,
  fallback = <div>Caricamento...</div>,
  threshold = 0.1,
  rootMargin = '50px',
  delay = 0
}: LazyLoadWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const { withYielding } = useTaskOptimization();

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Usa yielding per non bloccare il thread principale
          await withYielding(async () => {
            if (delay > 0) {
              await new Promise(resolve => setTimeout(resolve, delay));
            }
            setShouldRender(true);
          });
          
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    const element = document.getElementById('lazy-wrapper');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, delay, withYielding]);

  return (
    <div id="lazy-wrapper">
      {shouldRender ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        isVisible ? fallback : null
      )}
    </div>
  );
}

// Hook per lazy loading di componenti
export const useLazyComponent = <T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  deps: any[] = []
) => {
  const [Component, setComponent] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { withYielding } = useTaskOptimization();

  const loadComponent = async () => {
    if (Component || loading) return;
    
    setLoading(true);
    setError(null);

    try {
      await withYielding(async () => {
        const module = await importFn();
        setComponent(() => module.default);
      });
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadComponent();
  }, deps);

  return { Component, loading, error, loadComponent };
};
