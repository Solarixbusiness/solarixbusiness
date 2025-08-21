export const revalidate = 86400;
export const runtime = 'nodejs';

export default function Template({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}