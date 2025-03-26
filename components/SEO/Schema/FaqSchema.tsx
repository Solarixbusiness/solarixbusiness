import { SEO_CONSTANTS } from '@/utils/seoConstants';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSchemaProps {
  faqs: FaqItem[];
  title?: string;
}

export default function FaqSchema({ faqs, title = 'Domande frequenti' }: FaqSchemaProps) {
  // Implementazione esistente
} 