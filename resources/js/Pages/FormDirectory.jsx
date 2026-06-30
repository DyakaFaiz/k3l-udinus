import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';

const FormDirectory = () => {
    const [activeTab, setActiveTab] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const categories = [
        {
            id: 'izin-kerja',
            title: 'Formulir Izin Kerja (Permit to Work)',
            forms: [
                { id: 1, name: 'Izin Kerja Panas (Hot Work Permit)', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
                { id: 2, name: 'Izin Kerja di Ketinggian', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
                { id: 3, name: 'Izin Kerja Ruang Terbatas (Confined Space)', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
            ]
        },
        {
            id: 'inspeksi',
            title: 'Formulir Inspeksi & Checklist',
            forms: [
                { id: 4, name: 'Checklist Inspeksi APAR Mingguan', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
                { id: 5, name: 'Checklist Inspeksi Kotak P3K', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
                { id: 6, name: 'Formulir Inspeksi Bengkel/Laboratorium', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
            ]
        },
        {
            id: 'laporan',
            title: 'Formulir Laporan & Investigasi',
            forms: [
                { id: 7, name: 'Formulir Laporan Kecelakaan Kerja', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
                { id: 8, name: 'Formulir Investigasi Insiden', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
            ]
        }
    ];

    const toggleAccordion = (id) => {
        setActiveTab(activeTab === id ? null : id);
    };

    return (
        <>
            <Head title="Katalog Formulir K3L - Udinus" />
            
            <div className="container" style={{ paddingBottom: '4rem' }}>
                <div className="page-header">
                    <Link href="/" style={{ display: 'inline-block', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                        ⬅ Kembali ke Beranda
                    </Link>
                    <h1>Katalog Formulir K3L</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Unduh atau pratinjau berbagai formulir standar Keselamatan dan Kesehatan Kerja.</p>
                </div>

                <div className="accordion-container">
                    {categories.map((category) => (
                        <div key={category.id} className="accordion-item">
                            <button 
                                className="accordion-header" 
                                onClick={() => toggleAccordion(category.id)}
                            >
                                <span>📄 {category.title}</span>
                                <span style={{ transform: activeTab === category.id ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>▼</span>
                            </button>
                            <div className={`accordion-wrapper ${activeTab === category.id ? 'open' : ''}`}>
                                <div className="accordion-content">
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {category.forms.map((form, index) => (
                                            <li key={form.id} style={{ 
                                                padding: '1rem 0', 
                                                borderBottom: index === category.forms.length - 1 ? 'none' : '1px solid var(--border-color)', 
                                                display: 'flex', 
                                                justifyContent: 'space-between', 
                                                alignItems: 'center',
                                                gap: '1rem'
                                            }}>
                                                <span style={{ fontWeight: 500, color: 'var(--text-main)', lineHeight: 1.4 }}>{form.name}</span>
                                                <button 
                                                    onClick={() => setPreviewUrl(form.url)}
                                                    style={{ 
                                                        background: 'var(--primary)', color: '#fff', border: 'none', 
                                                        padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer', 
                                                        fontSize: '0.9rem', fontWeight: 600, whiteSpace: 'nowrap',
                                                        transition: 'background 0.3s ease'
                                                    }}
                                                    onMouseOver={(e) => e.currentTarget.style.background = 'var(--primary-hover)'}
                                                    onMouseOut={(e) => e.currentTarget.style.background = 'var(--primary)'}
                                                >
                                                    Lihat PDF
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Preview PDF */}
            {previewUrl && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.85)',
                    zIndex: 2000,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '1.5rem',
                    backdropFilter: 'blur(4px)'
                }} onClick={() => setPreviewUrl(null)}>
                    <div style={{
                        width: '100%', maxWidth: '900px', height: '85vh',
                        backgroundColor: '#fff', borderRadius: '12px',
                        display: 'flex', flexDirection: 'column', overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                    }} onClick={e => e.stopPropagation()}>
                        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F8FAFC' }}>
                            <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
                                Pratinjau Dokumen
                            </h3>
                            <button 
                                onClick={() => setPreviewUrl(null)} 
                                style={{ background: 'none', border: 'none', fontSize: '1.8rem', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                &times;
                            </button>
                        </div>
                        <iframe 
                            src={previewUrl} 
                            style={{ width: '100%', height: '100%', border: 'none', backgroundColor: '#e9e9e9' }}
                            title="PDF Preview"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default FormDirectory;
