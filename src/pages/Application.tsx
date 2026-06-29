export default function Application() {
  return (
    <div className="page-container">
      <h2 className="page-title">Applications</h2>
      <p className="page-subtitle">Featured projects and enterprise solutions.</p>

      <div className="page-card glass">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>Project SkateBeat</h3>
          <span style={{
            background: 'var(--accent-light)',
            color: 'var(--text-primary)',
            padding: '0.25rem 0.75rem',
            borderRadius: '99px',
            fontSize: '0.85rem',
            fontWeight: 500
          }}>Active Development</span>
        </div>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '1rem' }}>
          An IOS application to help users add verbal cues and beats to program music. This app is especially helpful for figure skaters who need to practice their programs with cues.
        </p>
        <button style={{
          background: 'var(--accent-color)',
          color: 'white',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: 'var(--radius-md)',
          fontWeight: 500,
          fontSize: '0.95rem',
          cursor: 'pointer',
          transition: 'background var(--transition-speed)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
          onMouseOver={(e) => e.currentTarget.style.background = 'var(--accent-hover)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'var(--accent-color)'}>
          View Case Study
        </button>
      </div>

      <div className="page-card glass">
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>Internal Tooling</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ borderLeft: '3px solid var(--accent-light)', paddingLeft: '1rem' }}>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 500, marginBottom: '0.25rem' }}>DataSync ETL</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Automated data pipeline generator processing over 10TB/month.</p>
          </div>
          <div style={{ borderLeft: '3px solid var(--accent-light)', paddingLeft: '1rem' }}>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 500, marginBottom: '0.25rem' }}>UI Design System</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Comprehensive React component library utilized across 5 product lines.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
