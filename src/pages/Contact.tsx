import { Mail, Terminal, Briefcase, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="page-container">
      <h2 className="page-title">Contact</h2>
      <p className="page-subtitle">Let's connect and build something amazing together.</p>

      <div className="page-card glass animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px', margin: '2rem auto' }}>

        <a
          href="mailto:xuechunlu7@gmail.com"
          style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--text-primary)', textDecoration: 'none', padding: '1.25rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', transition: 'background 0.2s', cursor: 'pointer' }}
          onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
        >
          <Mail size={28} style={{ color: 'var(--accent-blue)' }} />
          <div>
            <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Email</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Send me an email to connect</div>
          </div>
        </a>

        <a
          href="https://github.com/xuechunlu7/"
          target="_blank"
          rel="noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--text-primary)', textDecoration: 'none', padding: '1.25rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', transition: 'background 0.2s', cursor: 'pointer' }}
          onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
        >
          <Terminal size={28} style={{ color: 'var(--accent-blue)' }} />
          <div>
            <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.25rem' }}>GitHub</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Check out my open-source projects</div>
          </div>
        </a>

        <a
          href="https://linkedin.com/in/xuechun-lu"
          target="_blank"
          rel="noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--text-primary)', textDecoration: 'none', padding: '1.25rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', transition: 'background 0.2s', cursor: 'pointer' }}
          onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
        >
          <Briefcase size={28} style={{ color: 'var(--accent-blue)' }} />
          <div>
            <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.25rem' }}>LinkedIn</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Connect with me professionally</div>
          </div>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--text-primary)', padding: '1.25rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)' }}>
          <MapPin size={28} style={{ color: 'var(--accent-blue)' }} />
          <div>
            <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Location</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Waterloo, ON / Toronto, ON</div>
          </div>
        </div>

      </div>
    </div>
  );
}
