import React, { useState } from 'react';

const GallerySection = () => {
    const [zoomedImage, setZoomedImage] = useState(null);

    const images = [
        { id: 1, url: 'https://via.placeholder.com/600x400/0A3A69/FFFFFF?text=Kegiatan+1', alt: 'Simulasi Pemadam Kebakaran' },
        { id: 2, url: 'https://via.placeholder.com/600x400/F3A712/FFFFFF?text=Kegiatan+2', alt: 'Audit Keselamatan Gedung' },
        { id: 3, url: 'https://via.placeholder.com/600x400/0A3A69/FFFFFF?text=Kegiatan+3', alt: 'Sosialisasi K3L Mahasiswa Baru' },
        { id: 4, url: 'https://via.placeholder.com/600x400/D32F2F/FFFFFF?text=Kegiatan+4', alt: 'Pengecekan Jalur Evakuasi' },
    ];

    return (
        <section className="gallery-section" style={{ padding: '4rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <h2 style={{ marginBottom: '0.5rem' }}>Galeri Kegiatan K3L</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                
                <div className="gallery-grid">
                    {images.map(image => (
                        <div key={image.id} className="gallery-item" onClick={() => setZoomedImage(image.url)} style={{ cursor: 'zoom-in' }}>
                            <img src={image.url} alt={image.alt} loading="lazy" />
                            <div className="gallery-overlay">
                                <span>{image.alt}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Zoom Modal */}
            {zoomedImage && (
                <div className="modal-overlay" onClick={() => setZoomedImage(null)} style={{ zIndex: 1100, cursor: 'zoom-out' }}>
                    <div className="modal-content" style={{ padding: '0.5rem', background: 'transparent', boxShadow: 'none', maxWidth: '900px' }} onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setZoomedImage(null)} style={{ color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.5)', top: '-2rem', right: '0' }}>&times;</button>
                        <img 
                            src={zoomedImage} 
                            alt="Zoomed" 
                            style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)', animation: 'modalIn 0.3s forwards cubic-bezier(0.16, 1, 0.3, 1)' }} 
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default GallerySection;
