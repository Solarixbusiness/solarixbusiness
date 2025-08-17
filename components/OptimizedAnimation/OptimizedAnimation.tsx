'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTaskOptimization } from '../../hooks/useTaskOptimization';

interface AnimationFrame {
  timestamp: number;
  progress: number;
}

interface OptimizedAnimationProps {
  duration?: number;
  easingType?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';
  onUpdate?: (progress: number) => void;
  onComplete?: () => void;
  autoStart?: boolean;
  children?: React.ReactNode;
}

// Easing functions
const easingFunctions = {
  linear: (t: number) => t,
  easeIn: (t: number) => t * t,
  easeOut: (t: number) => t * (2 - t),
  easeInOut: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
};

export default function OptimizedAnimation({
  duration = 1000,
  easingType = 'linear',
  onUpdate,
  onComplete,
  autoStart = true,
  children
}: OptimizedAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const { yieldToMain } = useTaskOptimization();

  // Ottimizzazione animazione con yielding
  const animate = async (currentTime: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = currentTime;
    }

    const elapsed = currentTime - startTimeRef.current;
    const rawProgress = Math.min(elapsed / duration, 1);
    const easing = easingFunctions[easingType];
    const easedProgress = easing(rawProgress);

    setProgress(easedProgress);
    onUpdate?.(easedProgress);

    if (rawProgress < 1) {
      // Yield ogni frame per mantenere responsività
      await yieldToMain();
      animationRef.current = requestAnimationFrame(animate);
    } else {
      setIsAnimating(false);
      startTimeRef.current = null;
      onComplete?.();
    }
  };

  const startAnimation = async () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setProgress(0);
    startTimeRef.current = null;
    
    // Usa yielding per non bloccare il thread principale
    await yieldToMain();
    animationRef.current = requestAnimationFrame(animate);
  };

  const stopAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    setIsAnimating(false);
    startTimeRef.current = null;
  };

  const resetAnimation = () => {
    stopAnimation();
    setProgress(0);
  };

  useEffect(() => {
    if (autoStart) {
      startAnimation();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [autoStart]);

  return (
    <div className="optimized-animation">
      {children}
      
      <div className="animation-controls">
        <button 
          onClick={startAnimation} 
          disabled={isAnimating}
          className="animation-btn start"
        >
          {isAnimating ? 'Animating...' : 'Start'}
        </button>
        
        <button 
          onClick={stopAnimation} 
          disabled={!isAnimating}
          className="animation-btn stop"
        >
          Stop
        </button>
        
        <button 
          onClick={resetAnimation}
          className="animation-btn reset"
        >
          Reset
        </button>
      </div>
      
      <div className="animation-progress">
        <div 
          className="progress-bar"
          style={{ width: `${progress * 100}%` }}
        />
        <span>{Math.round(progress * 100)}%</span>
      </div>
    </div>
  );
}

// Hook per animazioni ottimizzate
export const useOptimizedAnimation = (
  duration: number = 1000,
  easingType: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut' = 'linear'
) => {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const { yieldToMain } = useTaskOptimization();

  const animate = async (currentTime: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = currentTime;
    }

    const elapsed = currentTime - startTimeRef.current;
    const rawProgress = Math.min(elapsed / duration, 1);
    const easing = easingFunctions[easingType];
    const easedProgress = easing(rawProgress);

    setProgress(easedProgress);

    if (rawProgress < 1) {
      await yieldToMain();
      animationRef.current = requestAnimationFrame(animate);
    } else {
      setIsAnimating(false);
      startTimeRef.current = null;
    }
  };

  const start = async () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setProgress(0);
    startTimeRef.current = null;
    
    await yieldToMain();
    animationRef.current = requestAnimationFrame(animate);
  };

  const stop = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    setIsAnimating(false);
    startTimeRef.current = null;
  };

  const reset = () => {
    stop();
    setProgress(0);
  };

  return {
    progress,
    isAnimating,
    start,
    stop,
    reset
  };
};
