import skatebeatIcon from '../assets/skatebeat-icon.jpg';

export default function Application() {
  return (
    <div className="page-container">
      <h2 className="page-title">Applications</h2>
      <p className="page-subtitle">Featured projects and enterprise solutions.</p>

      <div className="page-card glass">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <h3
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', cursor: 'pointer', margin: 0 }}
            onClick={() => window.location.href = '/skatebeat'}
          >
            <img src={skatebeatIcon} alt="SkateBeat Logo" style={{ width: '32px', height: '32px', borderRadius: '8px' }} />
            Project SkateBeat
          </h3>
          <span style={{
            background: 'var(--accent-light)',
            color: 'var(--text-primary)',
            padding: '0.25rem 0.75rem',
            borderRadius: '99px',
            fontSize: '0.85rem',
            fontWeight: 500
          }}>In Review, Launching Soon</span>
        </div>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '1rem' }}>
          A specialized iOS application designed to revolutionize how figure skaters practice. It allows athletes to seamlessly overlay custom verbal cues, precise metronome beats, and choreography markers directly onto their program music. Whether you're perfecting your free skate or mastering intricate ice dance patterns, SkateBeat provides the ultimate auditory training toolkit.
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
          onClick={() => window.location.href = '/skatebeat'}
          onMouseOver={(e) => e.currentTarget.style.background = 'var(--accent-hover)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'var(--accent-color)'}>
          View Case Study
        </button>
      </div>



      <div className="page-card glass">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            Project SlideMind (AI PDF Assistant)
          </h3>
          <span style={{
            background: 'rgba(255, 255, 255, 0.1)',
            color: 'var(--text-secondary)',
            padding: '0.25rem 0.75rem',
            borderRadius: '99px',
            fontSize: '0.85rem',
            fontWeight: 500,
            border: '1px solid rgba(255,255,255,0.2)'
          }}>Planning Stage</span>
        </div>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '1rem' }}>
          An upcoming intelligent web application designed to collect and process PDF lecture slides. It automatically extracts keywords to build a searchable database, and leverages AI to generate comprehensive summaries, making studying and reviewing materials incredibly efficient.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--accent-color)', background: 'var(--accent-light)', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>RAG System</span>
          <span style={{ fontSize: '0.85rem', color: 'var(--accent-color)', background: 'var(--accent-light)', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>Vector Database</span>
          <span style={{ fontSize: '0.85rem', color: 'var(--accent-color)', background: 'var(--accent-light)', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>LLM Integration</span>
          <span style={{ fontSize: '0.85rem', color: 'var(--accent-color)', background: 'var(--accent-light)', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>Web App</span>
        </div>
      </div>

    </div>
  );
}
