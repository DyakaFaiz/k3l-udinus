import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';

const SopDirectory = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const sops = [
        { id: 1, title: 'SOP Penggunaan APAR (Alat Pemadam Api Ringan)', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
        { id: 2, title: 'Panduan Evakuasi Gempa Bumi', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
        { id: 3, title: 'SOP Penanganan Tumpahan Bahan Kimia (Spill Kit)', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
        { id: 4, title: 'Prosedur Laporan Kecelakaan Kerja', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
        { id: 5, title: 'Panduan Keselamatan Bengkel dan Studio', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
    ];

    const filteredSops = sops.filter(sop => 
        sop.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        sop.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Head title="Panduan K3L - Udinus" />
            
            <div className="container" style={{ paddingBottom: '4rem' }}>
                <div className="page-header">
                    <Link href="/" style={{ display: 'inline-block', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                        ⬅ Kembali ke Beranda
                    </Link>
                    <h1>SOP & Panduan K3L</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Cari dokumen prosedur keselamatan standar universitas.</p>
                </div>

                <div className="search-bar">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="🔍 Cari SOP (contoh: APAR, Gempa)..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ fontSize: '1.1rem', padding: '1rem' }}
                    />
                </div>

                <div className="sop-list">
                    {filteredSops.length > 0 ? (
                        filteredSops.map(sop => (
                            <div key={sop.id} className="sop-card">
                                <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{sop.title}</h3>
                                <p style={{ color: 'var(--text-main)' }}>{sop.desc}</p>
                                <button style={{ marginTop: '1rem', background: 'transparent', color: 'var(--secondary)', fontWeight: 'bold', fontSize: '0.95rem' }}>
                                    Baca Dokumen ➔
                                </button>
                            </div>
                        ))
                    ) : (
                        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                            Tidak ada dokumen yang sesuai dengan pencarian Anda.
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SopDirectory;
