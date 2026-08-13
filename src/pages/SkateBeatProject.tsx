import { useState } from 'react';
import { ArrowLeft, Play, Mic, Zap, Smartphone, ExternalLink } from 'lucide-react';
import skatebeatIcon from '../assets/skatebeat-icon.jpg';
import skatebeatFreeskate from '../assets/skatebeat-freeskate.png';
import skatebeatIceDance from '../assets/skatebeat-icedance.png';
import skatebeatAddCue from '../assets/skatebeat-addcue.png';
import './SkateBeatProject.css';

export default function SkateBeatProject() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: skatebeatFreeskate, alt: "SkateBeat Freeskate Cues" },
    { src: skatebeatIceDance, alt: "SkateBeat Ice Dance Metronome" },
    { src: skatebeatAddCue, alt: "SkateBeat Add Cue" },
  ];

  const getPositionClass = (index: number) => {
    if (index === activeIndex) return 'sb-screen-center';
    if (index === (activeIndex + 1) % 3) return 'sb-screen-right';
    return 'sb-screen-left';
  };

  return (
    <div className="sb-project-container">
      {/* Navigation */}
      <nav className="sb-project-nav">
        <a href="/" className="back-link">
          <ArrowLeft size={20} />
          Back to Portfolio
        </a>
        <div className="sb-brand">
          <img src={skatebeatIcon} alt="SkateBeat Icon" className="sb-brand-icon" style={{ width: '32px', height: '32px', borderRadius: '8px', objectFit: 'cover' }} />
          <span className="sb-brand-name">SkateBeat</span>
        </div>
        <div className="nav-actions">
          <a href="/skatebeat-support" className="support-link">Support Center</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="sb-hero">
        <div className="sb-hero-content">
          <div className="sb-badge">Featured iOS App</div>
          <h1>Nail your program with perfect timing.</h1>
          <p>
            SkateBeat is the ultimate practice companion for figure skaters. 
            Seamlessly add verbal cues, custom beats, and precise timing markers to your program music.
          </p>
          <div className="sb-hero-actions">
            <button className="sb-btn sb-btn-primary">
              <Play size={20} className="btn-icon" />
              Download on App Store
            </button>
            <a href="/skatebeat-support" className="sb-btn sb-btn-secondary">
              <ExternalLink size={20} className="btn-icon" />
              View Support Page
            </a>
          </div>
        </div>
        
        {/* App Screenshot Showcase */}
        <div 
          className="sb-showcase-carousel"
          onClick={() => setActiveIndex(prev => (prev + 1) % 3)}
          style={{ cursor: 'pointer' }}
          title="Click to cycle images"
        >
          {images.map((img, idx) => (
            <img 
              key={idx}
              src={img.src} 
              alt={img.alt} 
              className={`sb-real-screenshot ${getPositionClass(idx)}`} 
            />
          ))}
        </div>
      </header>

      {/* Features Section */}
      <section className="sb-features">
        <div className="sb-section-header">
          <h2>Designed for Skaters</h2>
          <p>Everything you need to practice efficiently off and on the ice.</p>
        </div>

        <div className="sb-feature-grid">
          <div className="sb-feature-card glass-panel">
            <div className="feature-icon-wrapper">
              <Mic size={24} />
            </div>
            <h3>Verbal Cues</h3>
            <p>Record your own voice or use our premium text-to-speech engine to drop reminders exactly where you need them in the music.</p>
          </div>
          
          <div className="sb-feature-card glass-panel">
            <div className="feature-icon-wrapper">
              <Zap size={24} />
            </div>
            <h3>Custom Beats</h3>
            <p>Overlay a metronome click track or custom percussion beats to help you stay precisely on tempo during complex step sequences.</p>
          </div>

          <div className="sb-feature-card glass-panel">
            <div className="feature-icon-wrapper">
              <Smartphone size={24} />
            </div>
            <h3>Seamless Export</h3>
            <p>Export your annotated track directly to your music library or share it with your coach via AirDrop in seconds.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sb-cta-section">
        <div className="sb-cta-content glass-panel">
          <h2>Ready to perfect your program?</h2>
          <p>Join thousands of skaters who are already using SkateBeat to improve their practice sessions.</p>
          <a href="/skatebeat-support" className="sb-text-link">Need help? Visit our Support Center →</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="sb-footer">
        <p>&copy; {new Date().getFullYear()} SkateBeat. Created by FloppaLab.</p>
      </footer>
    </div>
  );
}
