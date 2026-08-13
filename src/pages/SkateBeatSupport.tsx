import { useState } from 'react';
import { Mail, ChevronDown, Mic, HelpCircle, FileText, Smartphone, ArrowLeft } from 'lucide-react';
import skatebeatIcon from '../assets/skatebeat-icon.jpg';
import './SkateBeatSupport.css';

const faqs = [
  {
    question: "How do I add a new verbal cue to my music?",
    answer: "Open your track in the editor, scrub to the desired timestamp, and tap the '+' button. Select 'Verbal Cue' and you can either record your voice or type out the text for our text-to-speech engine."
  },
  {
    question: "Can I adjust the BPM after adding beats?",
    answer: "Yes! You can tap on any beat marker to adjust its individual timing, or use the global BPM slider in the track settings to adjust all generated beats simultaneously."
  },
  {
    question: "Why can't I hear my cues when I play the track?",
    answer: "Please ensure your device isn't on silent mode and the master volume is turned up. Also, check the 'Cue Volume' slider in the mix settings."
  },
  {
    question: "How do I export my finished program music?",
    answer: "Once you are satisfied with your cues and beats, tap the 'Export' icon in the top right corner. You can save it directly to your files or share it via AirDrop."
  }
];

export default function SkateBeatSupport() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeLegalTab, setActiveLegalTab] = useState<'privacy' | 'terms'>('privacy');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="skatebeat-support-container">
      {/* Navigation */}
      <nav className="support-nav">
        <div className="support-brand">
          <img src={skatebeatIcon} alt="SkateBeat Icon" className="brand-icon" style={{ width: '32px', height: '32px', borderRadius: '8px', objectFit: 'cover' }} />
          <span className="brand-name">SkateBeat</span>
        </div>
        <div className="support-links">
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
          <a href="#legal">Legal</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="support-hero">
        <div className="hero-content">
          <div className="badge">Support Center</div>
          <h1>How can we help you nail your program?</h1>
          <p>Find answers, troubleshooting guides, and get in touch with our support team.</p>
        </div>
        <div className="hero-background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="support-main">
        {/* Features / Quick Links */}
        <section className="quick-links">
          <div className="quick-link-card">
            <Mic className="card-icon" />
            <h3>Voice Cues</h3>
            <p>Troubleshoot recording and text-to-speech features.</p>
          </div>
          <div className="quick-link-card">
            <Smartphone className="card-icon" />
            <span className="card-icon-pulse"></span>
            <h3>App Sync</h3>
            <p>Help with exporting and device compatibility.</p>
          </div>
          <div className="quick-link-card">
            <FileText className="card-icon" />
            <h3>Billing</h3>
            <p>Manage your subscription and purchases.</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="faq-section">
          <div className="section-header">
            <HelpCircle size={32} className="section-icon" />
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openFaq === index ? 'open' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <ChevronDown className="chevron" size={20} />
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="contact-card glass-panel">
            <h2>Still need help?</h2>
            <p>Our support team is ready to assist you with any issues.</p>
            <a href="mailto:support@skatebeat.app" className="contact-button">
              <Mail size={20} />
              Contact Support
            </a>
            <p className="response-time">Average response time: 24 hours</p>
          </div>
        </section>

        {/* Legal Section */}
        <section id="legal" className="legal-section">
          <h2>Legal & Privacy</h2>
          
          <div className="legal-tabs" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
            <button 
              onClick={() => setActiveLegalTab('privacy')}
              style={{
                background: activeLegalTab === 'privacy' ? 'var(--sb-primary)' : 'rgba(255,255,255,0.05)',
                color: activeLegalTab === 'privacy' ? 'white' : 'var(--sb-text-secondary)',
                border: '1px solid',
                borderColor: activeLegalTab === 'privacy' ? 'var(--sb-primary)' : 'rgba(255,255,255,0.1)',
                padding: '0.75rem 1.5rem',
                borderRadius: '99px',
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setActiveLegalTab('terms')}
              style={{
                background: activeLegalTab === 'terms' ? 'var(--sb-primary)' : 'rgba(255,255,255,0.05)',
                color: activeLegalTab === 'terms' ? 'white' : 'var(--sb-text-secondary)',
                border: '1px solid',
                borderColor: activeLegalTab === 'terms' ? 'var(--sb-primary)' : 'rgba(255,255,255,0.1)',
                padding: '0.75rem 1.5rem',
                borderRadius: '99px',
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
            >
              Terms of Service
            </button>
          </div>

          <div className="legal-content glass-panel">
            {activeLegalTab === 'privacy' ? (
            <div style={{ textAlign: 'left' }}>
              <p><strong>Last updated: August 13, 2026</strong></p>
              <p style={{ marginBottom: '1rem' }}>SkateBeat (“we,” “our,” or “the App”) is a practice tool for ice dance and program choreography. This Privacy Policy explains what information the App handles.</p>

              <h4 style={{ color: 'var(--sb-primary-light)', marginBottom: '0.5rem' }}>1. Summary</h4>
              <p style={{ marginBottom: '1rem' }}>SkateBeat is designed to work primarily on your device. We do not require an account, and we do not operate a SkateBeat user database that collects your personal profile.</p>

              <h4 style={{ color: 'var(--sb-primary-light)', marginBottom: '0.5rem' }}>2. Information stored on your device</h4>
              <p style={{ marginBottom: '0.5rem' }}>Depending on how you use the App, it may store locally on your device:</p>
              <ul style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', color: 'var(--sb-text-secondary)' }}>
                <li>Projects you create (names, timing settings, metronome settings, cue markers)</li>
                <li>Music files you import</li>
                <li>Audio you record for cues (if you use the microphone)</li>
                <li>Exported files you choose to save or share (such as .skatebeat packages or mixed audio)</li>
              </ul>
              <p style={{ marginBottom: '1rem' }}>This data stays on your device unless you choose to share or export it yourself (for example through the iOS share sheet, Files, AirDrop, or email).</p>

              <h4 style={{ color: 'var(--sb-primary-light)', marginBottom: '0.5rem' }}>3. Permissions</h4>
              <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem', color: 'var(--sb-text-secondary)' }}>
                <li><strong>Microphone:</strong> used only if you record verbal cues. You can deny access; recording features will not work without it.</li>
                <li><strong>Photos/Files/Media access (as provided by iOS):</strong> used when you import music or open/share project files.</li>
              </ul>

              <h4 style={{ color: 'var(--sb-primary-light)', marginBottom: '0.5rem' }}>4. What we do not collect</h4>
              <p style={{ marginBottom: '0.5rem' }}>We do not knowingly collect:</p>
              <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem', color: 'var(--sb-text-secondary)' }}>
                <li>Account login information</li>
                <li>Precise location for advertising</li>
                <li>Contacts</li>
                <li>Analytics profiles sold to third parties</li>
                <li>Payment card data inside the App (purchases, if any, are handled by Apple)</li>
              </ul>

              <h4 style={{ color: 'var(--sb-primary-light)', marginBottom: '0.5rem' }}>5. Sharing</h4>
              <p style={{ marginBottom: '1rem' }}>We do not sell your personal information. Content leaves your device only when you explicitly export or share it.</p>

              <h4 style={{ color: 'var(--sb-primary-light)', marginBottom: '0.5rem' }}>6. Children’s privacy</h4>
              <p style={{ marginBottom: '1rem' }}>SkateBeat is a general practice utility. If you are a parent/guardian and believe a child has provided personal information to us through support email, contact us and we will help delete it from our inbox/records where applicable.</p>

              <h4 style={{ color: 'var(--sb-primary-light)', marginBottom: '0.5rem' }}>7. Data retention and deletion</h4>
              <p style={{ marginBottom: '1rem' }}>Because project data is stored on your device, you can delete projects or the App at any time to remove local App data (subject to iOS behavior and any copies you exported yourself).</p>

              <h4 style={{ color: 'var(--sb-primary-light)', marginBottom: '0.5rem' }}>8. Changes</h4>
              <p style={{ marginBottom: '1rem' }}>We may update this Privacy Policy. The “Last updated” date will change when we do.</p>

              <h4 style={{ color: 'var(--sb-primary-light)', marginBottom: '0.5rem' }}>9. Contact</h4>
              <p>Questions about privacy:<br />
                Email: xuechunlu7@gmail.com<br />
                Developer: Xuechun Lu</p>
            </div>
            ) : (
            <div style={{ textAlign: 'left' }}>
              <p><strong>Last updated: August 13, 2026</strong></p>
              <p style={{ marginBottom: '1rem' }}>These Terms govern your use of the SkateBeat mobile application (“App”). By downloading or using the App, you agree to these Terms.</p>

              <h4 style={{ color: 'var(--sb-primary-light)', marginBottom: '0.5rem' }}>1. The App</h4>
              <p style={{ marginBottom: '1rem' }}>SkateBeat helps users practice ice dance and choreography by importing music, aligning a metronome, adding cues, and exporting/sharing practice projects.</p>

              <h4 style={{ color: 'var(--sb-primary-light)', marginBottom: '0.5rem' }}>2. Eligibility and acceptance</h4>
              <p style={{ marginBottom: '1rem' }}>You must be able to enter a binding agreement under the laws of your country. If you use the App on behalf of an organization, you represent that you have authority to accept these Terms.</p>

              <h4 style={{ color: 'var(--sb-primary-light)', marginBottom: '0.5rem' }}>3. Your content and music rights (important)</h4>
              <p style={{ marginBottom: '0.5rem' }}>You are solely responsible for the audio and other content you import, record, or share.</p>
              <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem', color: 'var(--sb-text-secondary)' }}>
                <li>Only use music and media you own or have a valid license/right to use.</li>
                <li>SkateBeat does not provide copyrighted ice-dance recordings in the Sample Library.</li>
                <li>Sample Library items are practice presets (such as BPM and meter). You must supply your own music.</li>
                <li>Do not use the App to infringe copyrights or other rights.</li>
              </ul>

              <h4 style={{ color: 'var(--sb-primary-light)', marginBottom: '0.5rem' }}>4. License to use the App</h4>
              <p style={{ marginBottom: '1rem' }}>We grant you a personal, non-exclusive, non-transferable, revocable license to use the App for lawful practice and coaching purposes, subject to these Terms and Apple’s App Store terms.</p>

              <h4 style={{ color: 'var(--sb-primary-light)', marginBottom: '0.5rem' }}>5. Acceptable use</h4>
              <p style={{ marginBottom: '0.5rem' }}>You agree not to:</p>
              <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem', color: 'var(--sb-text-secondary)' }}>
                <li>Reverse engineer or misuse the App except as allowed by law</li>
                <li>Use the App for unlawful activity</li>
                <li>Interfere with the App’s normal operation</li>
                <li>Upload or share harmful or illegal content</li>
              </ul>

              <h4 style={{ color: 'var(--sb-primary-light)', marginBottom: '0.5rem' }}>6. Projects and sharing</h4>
              <p style={{ marginBottom: '1rem' }}>Exported .skatebeat packages and mixes are created at your direction. If you share them with others, you are responsible for what you share and for having the rights to share any included audio.</p>

              <h4 style={{ color: 'var(--sb-primary-light)', marginBottom: '0.5rem' }}>7. No professional guarantee</h4>
              <p style={{ marginBottom: '1rem' }}>SkateBeat is a practice aid. It does not guarantee competition results, judging outcomes, coaching quality, or perfect tempo detection. Always verify timing for your own training needs.</p>

              <h4 style={{ color: 'var(--sb-primary-light)', marginBottom: '0.5rem' }}>8. Disclaimer of warranties</h4>
              <p style={{ marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem' }}>The App is provided “as is” and “as available,” without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, and non-infringement, to the maximum extent permitted by law.</p>

              <h4 style={{ color: 'var(--sb-primary-light)', marginBottom: '0.5rem' }}>9. Limitation of liability</h4>
              <p style={{ marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem' }}>To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential, or lost-data damages, or for losses arising from music rights issues, device failures, or exported files. Our total liability for any claim relating to the App will not exceed the amount you paid for the App in the 12 months before the claim (or USD $0 if the App was free).</p>

              <h4 style={{ color: 'var(--sb-primary-light)', marginBottom: '0.5rem' }}>10. Apple App Store</h4>
              <p style={{ marginBottom: '0.5rem' }}>If you downloaded the App from the App Store, you also agree that:</p>
              <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem', color: 'var(--sb-text-secondary)' }}>
                <li>These Terms are between you and the developer, not Apple</li>
                <li>Apple has no obligation to provide maintenance or support for the App</li>
                <li>Apple is a third-party beneficiary of these Terms and may enforce them</li>
                <li>In the event of a failure to conform to any applicable warranty, you may notify Apple, and Apple may refund the purchase price (if any) to the extent required by its terms; to the maximum extent permitted by law, Apple has no other warranty obligation</li>
              </ul>

              <h4 style={{ color: 'var(--sb-primary-light)', marginBottom: '0.5rem' }}>11. Termination</h4>
              <p style={{ marginBottom: '1rem' }}>You may stop using the App at any time by deleting it. We may stop offering the App or update these Terms as needed.</p>

              <h4 style={{ color: 'var(--sb-primary-light)', marginBottom: '0.5rem' }}>12. Changes</h4>
              <p style={{ marginBottom: '1rem' }}>We may update these Terms. Continued use after an update means you accept the revised Terms.</p>

              <h4 style={{ color: 'var(--sb-primary-light)', marginBottom: '0.5rem' }}>13. Contact</h4>
              <p>Email: xuechunlu7@gmail.com<br/>
              Developer: Xuechun Lu</p>
            </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="support-footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} SkateBeat. All rights reserved.</p>
          <a href="/" className="return-link">
            <ArrowLeft size={16} />
            Return to Portfolio
          </a>
        </div>
      </footer>
    </div>
  );
}
