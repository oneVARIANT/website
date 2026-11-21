import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import type { TabId } from './data/navigation';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { TalentPage } from './pages/TalentPage';

const VALID_TABS: TabId[] = ['home', 'about', 'talent', 'contact'];

function getTabFromHash(): TabId {
  const raw = window.location.hash.replace('#', '').toLowerCase() as TabId;
  return VALID_TABS.includes(raw) ? raw : 'home';
}

export function App() {
  const [activeTab, setActiveTab] = useState<TabId>(getTabFromHash);

  useEffect(() => {
    const onHashChange = () => {
      setActiveTab(getTabFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleSelectTab = (tab: TabId) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <Navbar activeTab={activeTab} onSelectTab={handleSelectTab} />

      <main className="main-content">
        {activeTab === 'home' && <HomePage onNavigate={handleSelectTab} />}
        {activeTab === 'about' && <AboutPage onNavigate={handleSelectTab} />}
        {activeTab === 'talent' && <TalentPage />}
        {activeTab === 'contact' && <ContactPage />}
      </main>

      <Footer onSelectTab={handleSelectTab} />
      <Analytics />
    </div>
  );
}

export default App;
