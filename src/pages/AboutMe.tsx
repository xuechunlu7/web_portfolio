import { useState } from 'react';

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState<'overview' | 'experience' | 'education'>('overview');

  return (
    <div className="page-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
        <div>
          <h2 className="page-title" style={{ marginBottom: '0.5rem' }}>Profile Overview</h2>
          <p className="page-subtitle" style={{ margin: 0, lineHeight: 1.6 }}>From Credit Risk Measurement and Data Analytics to Software Engineering. I write code to solve real-world puzzles, from high-level data to low-level systems.</p>
        </div>
      </div>

      {/* Internal Tab Navigation */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '2px solid rgba(255,255,255,0.2)', paddingBottom: '1.5rem', overflowX: 'auto' }}>
        <button
          onClick={() => setActiveTab('overview')}
          style={{
            padding: '0.5rem 1.25rem',
            borderRadius: '20px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.95rem',
            background: activeTab === 'overview' ? 'var(--accent-blue)' : 'rgba(255,255,255,0.3)',
            color: activeTab === 'overview' ? '#fff' : 'var(--text-primary)',
            transition: 'all 0.2s',
            whiteSpace: 'nowrap'
          }}>
          Overview
        </button>
        <button
          onClick={() => setActiveTab('experience')}
          style={{
            padding: '0.5rem 1.25rem',
            borderRadius: '20px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.95rem',
            background: activeTab === 'experience' ? 'var(--accent-blue)' : 'rgba(255,255,255,0.3)',
            color: activeTab === 'experience' ? '#fff' : 'var(--text-primary)',
            transition: 'all 0.2s',
            whiteSpace: 'nowrap'
          }}>
          Experience
        </button>
        <button
          onClick={() => setActiveTab('education')}
          style={{
            padding: '0.5rem 1.25rem',
            borderRadius: '20px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.95rem',
            background: activeTab === 'education' ? 'var(--accent-blue)' : 'rgba(255,255,255,0.3)',
            color: activeTab === 'education' ? '#fff' : 'var(--text-primary)',
            transition: 'all 0.2s',
            whiteSpace: 'nowrap'
          }}>
          Education & Skills
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="page-card glass animate-fade-in">
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>Executive Summary</h3>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0', fontSize: '1rem', paddingLeft: '1.25rem' }}>
            <li style={{ marginBottom: '0.75rem' }}><strong>Enterprise Experience:</strong> 4 years driving risk engineering, financial metrics modeling, and analytics at industry-leading institutions.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Academic Rigor:</strong> Master’s in Statistics coupled with an ongoing Bachelor’s in Computer Science, providing a rare blend of high-level mathematical intuition and low-level system understanding.</li>
            <li style={{ marginBottom: '0' }}><strong>Engineering Execution:</strong> Independent developer operating across data analytics, full stack development, and system engineering, utilizing AI-driven tools to architect, build, and ship functional software applications.</li>
          </ul>

          <div style={{ marginTop: '2.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>Why the Shift to Software Engineering?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem', fontSize: '0.95rem' }}>
              After years of building complex risk engines, I realized that my favorite part of the job was always writing the code to implement, optimize, and scale those models. While my background in statistics gave me a deep understanding of data logic, I wanted to dive deeper into the underlying systems that bring that data to life as a builder myself.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0', fontSize: '0.95rem' }}>
              This realization led me to pursue a degree in Computer Science. My goal is to bridge the gap between high-level mathematical intuition and low-level system design—combining a strong analytical foundation with rigorous software engineering practices to build robust, scalable applications.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'experience' && (
        <div className="page-card glass animate-fade-in">
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontWeight: 600, fontSize: '1.125rem' }}>Professional Experience</h4>

          <div style={{ marginBottom: '2rem', borderLeft: '3px solid var(--accent-blue)', paddingLeft: '1.25rem' }}>
            <h5 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 600, margin: '0 0 0.25rem 0' }}>Solo Founder @ Floppa Lab</h5>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.75rem', fontWeight: 500 }}>July 2025 – Present | Waterloo, ON</p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.6, paddingLeft: '1.25rem', fontSize: '0.95rem', margin: 0 }}>
              <li style={{ marginBottom: '0.25rem' }}><strong>iOS Development:</strong> Developing a figure skating-focused iOS application designed to assist athletes with training and musical cues.</li>
              <li style={{ marginBottom: '0.25rem' }}><strong>Business & Sales:</strong> Initiating and spearheading direct B2C sales and marketing initiatives directly at local ice rinks.</li>
              <li><strong>Costume Design:</strong> Designing, drafting, and hand-crafting custom figure skating costumes.</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem', borderLeft: '3px solid var(--accent-blue)', paddingLeft: '1.25rem' }}>
            <h5 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 600, margin: '0 0 0.25rem 0' }}>Portfolio and Strategy Manager @ RBC</h5>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.75rem', fontWeight: 500 }}>May 2024 – June 2025 | Toronto, ON</p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.6, paddingLeft: '1.25rem', fontSize: '0.95rem', margin: 0 }}>
              <li style={{ marginBottom: '0.25rem' }}>Engineered data pipelines in SQL and Tableau to architect monitoring system for portfolio health and client acquisition metrics.</li>
              <li>Developed high-performance data mining scripts to extract and identify insightful client features within the Greater Toronto Area, directly influencing the deployment of a new automated credit strategy.</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem', borderLeft: '3px solid var(--accent-blue)', paddingLeft: '1.25rem' }}>
            <h5 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 600, margin: '0 0 0.25rem 0' }}>Senior Risk Modelling Analyst @ RBC</h5>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.75rem', fontWeight: 500 }}>Aug 2022 – May 2024 | Toronto, ON</p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.6, paddingLeft: '1.25rem', fontSize: '0.95rem', margin: 0 }}>
              <li style={{ marginBottom: '0.25rem' }}><strong>Model Development:</strong> Architected and implemented a SAS solution to integrate Python-based risk models into core engines, leading up to elimination of manual processes.</li>
              <li style={{ marginBottom: '0.25rem' }}><strong>Metrics Measurement:</strong> Product owner for quarterly released financial metrics. Automated manual processes and designed parallel processing using SAS threads for a major loss projection process, reducing running time by &gt;40%. Identified abnormal data trends through data mining, decreasing ad-hoc investigation time by &gt;50%.</li>
              <li><strong>Leadership:</strong> Coached interns and juniors on understanding project specifications and improving deliverable quality.</li>
            </ul>
          </div>

          <div style={{ borderLeft: '3px solid var(--accent-blue)', paddingLeft: '1.25rem' }}>
            <h5 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 600, margin: '0 0 0.25rem 0' }}>Credit Risk Analyst @ Deloitte</h5>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.75rem', fontWeight: 500 }}>Sep 2021 – Aug 2022 | Toronto, ON</p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.6, paddingLeft: '1.25rem', fontSize: '0.95rem', margin: 0 }}>
              <li style={{ marginBottom: '0.25rem' }}><strong>sas2py:</strong> Migrated a legacy fraud monitoring engine for 100+ scorecard models in SAS to Azure Databricks for a major Canadian bank.</li>
              <li style={{ marginBottom: '0.25rem' }}>Automated and standardized a comprehensive performance metric calculation engine for robust and compliant fraud model monitoring in Python.</li>
              <li>Reviewed legacy code, standardized data sourcing and extraction process in PySpark to elevate code quality and readability.</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'education' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <div className="page-card glass animate-fade-in" style={{ marginBottom: 0 }}>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontWeight: 600, fontSize: '1.125rem' }}>Education</h4>

            <div style={{ marginBottom: '1.25rem' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '0.25rem', fontSize: '0.95rem' }}>
                <strong>B.Sc in Computer Science</strong>
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>Wilfrid Laurier University</p>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '0.25rem', fontSize: '0.95rem' }}>
                <strong>M.Math in Statistics</strong>
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>University of Waterloo</p>
            </div>

            <div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '0.25rem', fontSize: '0.95rem' }}>
                <strong>B.Sc. in Statistics</strong>
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>University of British Columbia</p>
            </div>
          </div>

          <div className="page-card glass animate-fade-in" style={{ marginBottom: 0 }}>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontWeight: 600, fontSize: '1.125rem' }}>Skills</h4>

            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.75rem' }}>Language</h5>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Python', 'SQL', 'SAS', 'Java', 'C', 'PySpark', 'R', 'LaTeX'].map(skill => (
                  <span key={skill} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.85rem', color: 'var(--text-primary)' }}>{skill}</span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.75rem' }}>CS Core Topics</h5>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Data Structures & Algorithms', 'Web Development', 'Software Engineering', 'Database', 'Computer Networks', 'AI & ML'].map(skill => (
                  <span key={skill} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.85rem', color: 'var(--text-primary)' }}>{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h5 style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.75rem' }}>Cloud & Tools</h5>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Github', 'Azure Databricks', 'Tableau', 'JupyterNotebook'].map(skill => (
                  <span key={skill} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.85rem', color: 'var(--text-primary)' }}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
