import React from 'react';

const SwotSection = () => {
    return (
        <section className="swot-section" style={{ padding: '4rem 0', backgroundColor: '#FAFCFF' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Analisis SWOT K3L</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Tinjauan strategis terhadap kondisi Keselamatan, Kesehatan Kerja, dan Lingkungan di Universitas Dian Nuswantoro.
                    </p>
                </div>

                <div className="swot-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {/* Strengths */}
                    <div className="swot-card" style={{ background: 'transparent', padding: '1.5rem 0', borderTop: '3px solid var(--primary)', transition: 'transform 0.3s ease' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--primary)', fontSize: '1.4rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                <path d="m9 12 2 2 4-4"/>
                            </svg> Strengths
                        </h3>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Kekuatan internal K3L Udinus:</p>
                        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.95rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li>Dukungan penuh dari pimpinan universitas terhadap program K3L.</li>
                            <li>Ketersediaan APAR dan perlengkapan keselamatan di setiap lantai gedung utama.</li>
                            <li>Sistem pelaporan darurat digital yang terintegrasi.</li>
                        </ul>
                    </div>

                    {/* Weaknesses */}
                    <div className="swot-card" style={{ background: 'transparent', padding: '1.5rem 0', borderTop: '3px solid #757575', transition: 'transform 0.3s ease' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#757575', fontSize: '1.4rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                                <path d="M12 9v4"/><path d="M12 17h.01"/>
                            </svg> Weaknesses
                        </h3>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Kelemahan internal yang perlu diperbaiki:</p>
                        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.95rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li>Kurangnya kesadaran beberapa mahasiswa akan jalur evakuasi darurat.</li>
                            <li>Kapasitas jalur evakuasi di beberapa gedung lama yang terbatas saat jam sibuk perkuliahan.</li>
                        </ul>
                    </div>

                    {/* Opportunities */}
                    <div className="swot-card" style={{ background: 'transparent', padding: '1.5rem 0', borderTop: '3px solid var(--secondary)', transition: 'transform 0.3s ease' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--secondary)', fontSize: '1.4rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                                <polyline points="16 7 22 7 22 13"/>
                            </svg> Opportunities
                        </h3>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Peluang eksternal untuk dikembangkan:</p>
                        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.95rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li>Kerja sama rutin dengan Dinas Pemadam Kebakaran dan BPBD Kota Semarang.</li>
                            <li>Pemanfaatan teknologi IoT untuk mendeteksi suhu panas/asap di Lab Fasilkom.</li>
                            <li>Audit Mutu Internal (AMI) sebagai pendorong perbaikan sistem berkelanjutan.</li>
                        </ul>
                    </div>

                    {/* Threats */}
                    <div className="swot-card" style={{ background: 'transparent', padding: '1.5rem 0', borderTop: '3px solid var(--danger)', transition: 'transform 0.3s ease' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--danger)', fontSize: '1.4rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/>
                                <line x1="12" y1="8" x2="12" y2="12"/>
                                <line x1="12" y1="16" x2="12.01" y2="16"/>
                            </svg> Threats
                        </h3>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Ancaman eksternal yang harus diantisipasi:</p>
                        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.95rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li>Risiko korsleting listrik pada peralatan laboratorium dan server 24 jam.</li>
                            <li>Potensi bencana alam regional (seperti banjir atau gempa bumi).</li>
                            <li>Risiko penyebaran penyakit menular di area kampus yang padat.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SwotSection;
