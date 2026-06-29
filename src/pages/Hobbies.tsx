import { useState } from 'react';
import { ChevronRight, Camera, X } from 'lucide-react';

export default function Hobbies() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const hobbies = [
    { 
      name: 'Figure Skating', 
      desc: 'I\'m an adult figure skater, and it\'s never too late to start chasing a passion. I\'m currently working towards my STAR 3 ice dance and my freeskate program...',
      youtubeIds: ['UGOokSuToSY', '_6o5TD-cPxQ'],
      imageUrls: []
    },
    { 
      name: 'Sewing', 
      desc: 'Inspired by figure skating, I sew my own skating dresses. I also enjoy sewing ice dance skirts, and... hanbok!',
      youtubeIds: ['zWKE9XIbtAI', 't-_pYnSJ0QI'],
      imageUrls: ['/IMG_4365.jpg', '/IMG_4389.jpg', '/IMG_4398.jpg', '/IMG_4691.jpg', '/IMG_5467.jpg', '/IMG_5507.jpg']
    },
    { 
      name: 'Piano', 
      desc: 'I\'m also an adult piano player. My goal is to play Bach and understand the underlying musical structure.',
      youtubeIds: ['GmfWirwA2XI'],
      imageUrls: []
    },
    { 
      name: 'Animal', 
      desc: 'I\'m a big animal lover. I have 3 dogs, 3 cats and 3 birds. I love them so much!',
      youtubeIds: ['o1aWSvGzL08'],
      imageUrls: ['/IMG_3050.jpg', '/IMG_3144.jpg', '/IMG_4007.jpg', '/IMG_5075.jpg']
    }
  ];

  return (
    <div className="page-container" style={{ paddingBottom: '3rem' }}>
      <h2 className="page-title">Interests</h2>
      <p className="page-subtitle" style={{ marginBottom: '2rem' }}>Personal pursuits and recreational activities.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {hobbies.map((hobby, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div 
              key={index} 
              className={`page-card glass animate-fade-in ${isExpanded ? 'expanded' : ''}`} 
              style={{ 
                marginBottom: 0, 
                cursor: isExpanded ? 'default' : 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gridColumn: isExpanded ? '1 / -1' : 'auto'
              }}
              onClick={() => {
                if (!isExpanded) setExpandedIndex(index);
              }}
            >
              {isExpanded && (
                <button 
                  onClick={(e) => { e.stopPropagation(); setExpandedIndex(null); }}
                  style={{
                    position: 'absolute', top: '1.5rem', right: '1.5rem',
                    background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%',
                    width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', color: 'var(--text-primary)', zIndex: 10
                  }}
                >
                  <X size={20} />
                </button>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: isExpanded ? '1.5rem' : '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0, transition: 'all 0.3s' }}>
                  {hobby.name}
                </h3>
                {!isExpanded && <ChevronRight size={20} style={{ color: 'var(--accent-blue)' }} />}
              </div>
              
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: isExpanded ? '1rem' : '0.95rem', marginBottom: isExpanded ? '2rem' : 0 }}>
                {hobby.desc}
              </p>

              {isExpanded && (
                <div className="animate-fade-in" style={{ marginTop: 'auto', borderTop: '2px dashed rgba(255,255,255,0.2)', paddingTop: '2rem' }}>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Camera size={18} /> Gallery & Media
                  </h4>
                  
                  {/* Gallery Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', maxWidth: '500px', margin: '0 auto' }}>
                    {((hobby.youtubeIds && hobby.youtubeIds.length > 0) || (hobby.imageUrls && hobby.imageUrls.length > 0)) ? (
                      <>
                        {/* Render Images */}
                        {hobby.imageUrls?.map((url, idx) => (
                          <div key={`img-${idx}`} style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                            <img src={url} alt={`Gallery image ${idx + 1}`} style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'contain', background: 'rgba(0,0,0,0.03)' }} />
                          </div>
                        ))}
                        
                        {/* Render Videos */}
                        {hobby.youtubeIds?.map((id, idx) => (
                          <div key={`vid-${idx}`} style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                            <iframe 
                              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                              src={`https://www.youtube.com/embed/${id}`} 
                              title="YouTube video player" 
                              frameBorder="0" 
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                              allowFullScreen
                            ></iframe>
                          </div>
                        ))}
                      </>
                    ) : (
                      [1, 2, 3].map((num) => (
                        <div key={num} style={{ 
                          background: 'rgba(0,0,0,0.05)', 
                          border: '2px dashed rgba(0,0,0,0.1)', 
                          borderRadius: '12px', 
                          height: '180px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--text-secondary)',
                          fontSize: '0.9rem'
                        }}>
                          <Camera size={24} style={{ marginBottom: '0.5rem', opacity: 0.5 }} />
                          <span>Add Photo or Video</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
