import { Link } from '@inertiajs/react';
import { useState } from 'react';

const NewsSection = () => {
    const [zoomedImage, setZoomedImage] = useState(null);

    const newsItems = [
        {
            id: 1,
            title: 'Pelatihan Pemadaman Kebakaran Bersama Damkar Semarang',
            date: '28 Juni 2026',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imgUrl: 'https://via.placeholder.com/600x400/0A3A69/FFFFFF?text=Pelatihan+Damkar'
        },
        {
            id: 2,
            title: 'Pemeliharaan Rutin Instalasi Listrik Gedung H',
            date: '25 Juni 2026',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imgUrl: 'https://via.placeholder.com/600x400/0A3A69/FFFFFF?text=Pemeliharaan+Listrik'
        },
        {
            id: 3,
            title: 'Audit K3L Tahunan Dinyatakan Sangat Baik',
            date: '10 Juni 2026',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imgUrl: 'https://via.placeholder.com/600x400/0A3A69/FFFFFF?text=Audit+K3L'
        }
    ];

    return (
        <section className="news-section" style={{ padding: '4rem 0', backgroundColor: 'var(--bg-card)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ marginBottom: 0 }}>Berita K3L Terkini</h2>
                    <a href="#" style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>Lihat Semua Berita ➔</a>
                </div>
                
                <div className="news-grid">
                    {newsItems.map(news => (
                        <div key={news.id} className="news-card">
                            <img 
                                src={news.imgUrl} 
                                alt={news.title} 
                                className="news-img" 
                                loading="lazy" 
                                onClick={() => setZoomedImage(news.imgUrl)}
                                style={{ cursor: 'zoom-in' }}
                            />
                            <div className="news-content">
                                <span className="news-date">{news.date}</span>
                                <h3>{news.title}</h3>
                                <p>{news.excerpt}</p>
                                <Link href={`/berita/${news.id}`} className="news-read-more">Baca Selengkapnya</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Zoom Modal */}
            {zoomedImage && (
                <div className="modal-overlay" onClick={() => setZoomedImage(null)} style={{ zIndex: 1100, cursor: 'zoom-out' }}>
                    <div className="modal-content" style={{ padding: '0.5rem', background: 'transparent', boxShadow: 'none', maxWidth: '800px' }} onClick={(e) => e.stopPropagation()}>
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

export default NewsSection;
