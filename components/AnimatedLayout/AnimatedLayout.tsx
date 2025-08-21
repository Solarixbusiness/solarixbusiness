import { ReactNode } from 'react';

interface AnimatedLayoutProps {
  children: ReactNode;
}

export default function AnimatedLayout({ children }: AnimatedLayoutProps) {
  return (
    <main className="flex-grow">
      {children}
    </main>
  );
}
