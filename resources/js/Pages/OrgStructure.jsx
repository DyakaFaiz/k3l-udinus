import React from 'react';
import { Head, Link } from '@inertiajs/react';

const OrgStructure = () => {
    const universityLevel = [
        { role: 'Ketua Pengarah K3L Universitas', name: 'Dr. John Doe, M.Kom.', position: 'Rektor' },
        { role: 'Ketua Pelaksana Satgas K3L', name: 'Jane Smith, Ph.D.', position: 'Wakil Rektor Bidang Operasional' },
        { role: 'Koordinator Tanggap Darurat', name: 'Alan Smithee, S.T.', position: 'Kepala Biro Umum & Fasilitas' }
    ];

    const facultyLevel = [
        { faculty: 'Fakultas Ilmu Komputer (FASILKOM)', name: 'Dr. Robert Roe', location: 'Gedung H' },
        { faculty: 'Fakultas Ekonomi dan Bisnis (FEB)', name: 'Prof. Dr. Richard Miles', location: 'Gedung C' },
        { faculty: 'Fakultas Ilmu Budaya (FIB)', name: 'Mary Major, M.Hum.', location: 'Gedung G' },
        { faculty: 'Fakultas Kesehatan (FIK)', name: 'John Appleseed, SKM, M.Kes', location: 'Gedung D' },
        { faculty: 'Fakultas Teknik (FT)', name: 'Dr. Jane Roe, M.T.', location: 'Gedung E' },
    ];

    return (
        <>
            <Head title="Struktur Organisasi Satgas K3L - Udinus" />
            
            <div className="container" style={{ paddingBottom: '5rem' }}>
                <div className="page-header" style={{ marginBottom: '3rem' }}>
                    <Link href="/" style={{ display: 'inline-block', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                        ⬅ Kembali ke Beranda
                    </Link>
                    <h1 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '2.2rem' }}>Struktur Organisasi Satgas K3L</h1>
                    <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', maxWidth: '800px', lineHeight: 1.6 }}>
                        Transparansi dan akuntabilitas adalah kunci keselamatan. Berikut adalah daftar penanggung jawab (otoritas fisik) K3L di tingkat universitas maupun fakultas yang memiliki wewenang dan dapat dimintai pertanggungjawaban terkait keselamatan di lingkungan kampus.
                    </p>
                </div>

                {/* Tingkat Universitas */}
                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ color: 'var(--secondary)', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.8rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        Tingkat Universitas
                    </h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {universityLevel.map((person, idx) => (
                            <div key={idx} style={{ background: 'transparent', borderRadius: '12px', padding: '2rem', borderTop: '4px solid var(--primary)', boxShadow: 'none' }}>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
                                    {person.role}
                                </div>
                                <h3 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0', fontSize: '1.3rem' }}>{person.name}</h3>
                                <p style={{ color: 'var(--text-muted)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                    {person.position}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tingkat Fakultas */}
                <section>
                    <h2 style={{ color: 'var(--secondary)', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.8rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        Penanggung Jawab Tingkat Fakultas
                    </h2>
                    <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>Bagi mahasiswa dan staf, silakan hubungi penanggung jawab berikut apabila menemukan masalah keselamatan fisik di area gedung fakultas Anda.</p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {facultyLevel.map((faculty, idx) => (
                            <div key={idx} style={{ background: 'transparent', borderRadius: '12px', padding: '1.5rem', borderLeft: '4px solid var(--secondary)', boxShadow: 'none' }}>
                                <div style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '0.5rem' }}>
                                    {faculty.faculty}
                                </div>
                                <h3 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{faculty.name}</h3>
                                <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    Lokasi Kantor: {faculty.location}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default OrgStructure;
