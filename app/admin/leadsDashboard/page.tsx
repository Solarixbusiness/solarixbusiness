'use client';

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'

interface Lead {
  nome: string;
  email: string;
  telefono: string;
  tipo_form: string;
  note: string;
  data: string;
}

const LeadsDashboard = () => {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    console.log('LeadsDashboard - Inizio fetching dei leads');
    const fetchLeads = async () => {
      try {
        console.log('LeadsDashboard - Richiesta API in corso');
        const response = await fetch('/api/getLeads')
        console.log('LeadsDashboard - Risposta API ricevuta, status:', response.status);
        
        if (!response.ok) {
          console.log('LeadsDashboard - Errore nella risposta API');
          throw new Error('Errore nel caricare i leads')
        }
        
        const data = await response.json()
        console.log('LeadsDashboard - Dati ricevuti:', data.length);
        setLeads(data)
        setError(null)
      } catch (err) {
        console.error('LeadsDashboard - Errore:', err);
        setError('Errore nel caricare i leads. Riprova più tardi.')
      } finally {
        setLoading(false)
      }
    }

    fetchLeads()
  }, [])

  if (loading) {
    console.log('LeadsDashboard - Stato: Caricamento in corso');
    return <div>Caricamento in corso...</div>
  }

  if (error) {
    console.log('LeadsDashboard - Stato: Errore', error);
    return <div className={styles.error}>{error}</div>
  }

  console.log('LeadsDashboard - Stato: Successo, leads trovati:', leads.length);
  return (
    <div className={styles['leads-dashboard']}>
      <h1 className={styles.title}>Dashboard dei Leads</h1>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <h2>Totale Leads</h2>
          <p>{leads.length}</p>
        </div>
      </div>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Data</th>
              <th>Tipo Form</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={index}>
                <td>{lead.nome}</td>
                <td>{lead.email}</td>
                <td>{lead.telefono}</td>
                <td>{new Date(lead.data).toLocaleDateString()}</td>
                <td>{lead.tipo_form}</td>
                <td>{lead.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LeadsDashboard
