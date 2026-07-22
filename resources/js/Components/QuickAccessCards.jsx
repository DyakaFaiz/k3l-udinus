import React from 'react';
import { Link } from '@inertiajs/react';

const QuickAccessCards = () => {
    return (
        <section className="quick-access-section">
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '2.5rem' }}>Akses Cepat</h2>
                <div className="cards-grid">
                    <Link href="/peta-evakuasi" className="card background-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem', color: 'var(--primary)' }}>
                            <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/>
                            <path d="M15 5.764v15"/><path d="M9 3.236v15"/>
                        </svg>
                        <h3>Peta Evakuasi Gedung</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </Link>
                    
                    <Link href="/sop-panduan" className="card background-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem', color: 'var(--primary)' }}>
                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                        </svg>
                        <h3>Panduan K3L & SOP</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </Link>

                    <Link href="/komplain" className="card background-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem', color: 'var(--primary)' }}>
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                        </svg>
                        <h3>Layanan Komplain</h3>
                        <p>Laporkan kerusakan fasilitas, pencemaran, atau pelanggaran K3L secara mendetail.</p>
                    </Link>

                    <Link href="/formulir" className="card background-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem', color: 'var(--primary)' }}>
                            <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                            <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/>
                        </svg>
                        <h3>Katalog Formulir</h3>
                        <p>Akses berbagai jenis formulir izin kerja dan pelaporan standar K3L.</p>
                    </Link>

                    <Link href="/struktur-organisasi" className="card background-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem', color: 'var(--primary)' }}>
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                        <h3>Struktur Organisasi</h3>
                        <p>Lihat daftar penanggung jawab Satgas K3L tingkat Universitas dan Fakultas.</p>
                    </Link>

                    <Link href="/hse" className="card background-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem', color: 'var(--primary)' }}>
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                        <h3>HSE</h3>
                        <p>Informasi dan pelaporan terkait Health, Safety, dan Environment (HSE).</p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default QuickAccessCards;
