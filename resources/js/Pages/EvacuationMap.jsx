import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';

const EvacuationMap = () => {
    const [activeTab, setActiveTab] = useState(null);

    const maps = [
        { id: 1, name: 'Gedung H (Fakultas Ilmu Komputer)', imgUrl: 'https://via.placeholder.com/1200x800/1E293B/FFB300?text=Peta+Evakuasi+Gedung+H' },
        { id: 2, name: 'Gedung G (Fakultas Ekonomi)', imgUrl: 'https://via.placeholder.com/1200x800/1E293B/FFB300?text=Peta+Evakuasi+Gedung+G' },
        { id: 3, name: 'Gedung D (Fakultas Kesehatan)', imgUrl: 'https://via.placeholder.com/1200x800/1E293B/FFB300?text=Peta+Evakuasi+Gedung+D' },
    ];

    const toggleAccordion = (id) => {
        setActiveTab(activeTab === id ? null : id);
    };

    return (
        <>
            <Head title="Peta Evakuasi - K3L Udinus" />
            
            <div className="container" style={{ paddingBottom: '4rem' }}>
                <div className="page-header">
                    <Link href="/" style={{ display: 'inline-block', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                        ⬅ Kembali ke Beranda
                    </Link>
                    <h1>Peta & Denah Evakuasi</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Panduan rute evakuasi di seluruh area kampus Udinus.</p>
                </div>

                <div className="accordion-container">
                    {maps.map((map) => (
                        <div key={map.id} className="accordion-item">
                            <button 
                                className="accordion-header" 
                                onClick={() => toggleAccordion(map.id)}
                            >
                                <span>📍 {map.name}</span>
                                <span style={{ transform: activeTab === map.id ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>▼</span>
                            </button>
                            <div className={`accordion-wrapper ${activeTab === map.id ? 'open' : ''}`}>
                                <div className="accordion-content">
                                    <div>
                                        <p style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                            Ketuk atau cubit gambar untuk melakukan zoom.
                                        </p>
                                        <img 
                                            src={map.imgUrl} 
                                            alt={`Peta ${map.name}`} 
                                            loading="lazy" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default EvacuationMap;
