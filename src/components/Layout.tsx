import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <header className="main-header">
        <div className="brand">
          <span className="brand-logo">♪</span>
          <h1>SoundVault</h1>
        </div>
        <p className="brand-tagline">Curate • Organize • Discover Your Sound</p>
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="main-footer">
        <p>&copy; {new Date().getFullYear()} SoundVault • Your Personal Music Archive</p>
      </footer>
    </div>
  );
}