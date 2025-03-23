'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import styles from './ErrorBoundary.module.css';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Registra l'errore in un servizio di monitoraggio
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    
    // Chiama il callback onError se fornito
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Mostra il fallback personalizzato se fornito
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      // Altrimenti mostra un messaggio di errore predefinito
      return (
        <div className={styles.errorContainer}>
          <div className={styles.errorContent}>
            <h2>Qualcosa è andato storto</h2>
            <p>Ci scusiamo per l'inconveniente. Si è verificato un errore durante il caricamento di questa pagina.</p>
            <div className={styles.errorDetails}>
              <p>{this.state.error?.toString()}</p>
            </div>
            <button 
              className={styles.retryButton}
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
            >
              Riprova
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
