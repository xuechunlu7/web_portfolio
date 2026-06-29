import { useState } from 'react';
import { User, Laptop, BarChart3, Gamepad2, ArrowLeft, Mail } from 'lucide-react';
import AboutMe from './pages/AboutMe';
import Application from './pages/Application';
import DataAnalysis from './pages/DataAnalysis';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';
import './App.css';
import floppaImg from './assets/floppa.png';

function App() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const renderContent = () => {
    switch (activeTab) {
      case 'about': return <AboutMe />;
      case 'app': return <Application />;
      case 'data': return <DataAnalysis />;
      case 'hobbies': return <Hobbies />;
      case 'contact': return <Contact />;
      default: return (
        <div className="empty-state">
          <ArrowLeft size={64} style={{ color: 'var(--accent-blue)', animation: 'float 2s infinite' }} />
          <h2>Select a tab on the left to start!</h2>
        </div>
      );
    }
  };

  const tabs = [
    { id: 'about', label: 'About Me!', icon: <User size={32} /> },
    { id: 'app', label: 'My Work', icon: <Laptop size={32} /> },
    { id: 'data', label: 'Analytics', icon: <BarChart3 size={32} /> },
    { id: 'hobbies', label: 'Fun Stuff', icon: <Gamepad2 size={32} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={32} /> }
  ];

  return (
    <div className="scene-container">
      
      {/* Left Sidebar */}
      <div className="sidebar-area">
        {/* Main Floppa Lab Sign */}
        <div className="main-sign-container">
          <img src={floppaImg} alt="Big Floppa Mascot" className="floppa-mascot" />
          <div className="wooden-sign">
            <h1 className="sign-text">Floppa Lab</h1>
            <p className="created-by-text">created by Leonie</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="nav-items-container">
          {tabs.map((tab) => (
            <div 
              key={tab.id}
              className={`interactive-object ${activeTab === tab.id ? 'active' : ''}`} 
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="object-icon-wrapper">
                {tab.icon}
              </div>
              <span className="object-label">{tab.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content Area */}
      <div className="content-area">
        {activeTab ? (
          <div className="content-wrapper" key={activeTab}>
             {renderContent()}
          </div>
        ) : (
          renderContent()
        )}
      </div>
      
    </div>
  );
}

export default App;
