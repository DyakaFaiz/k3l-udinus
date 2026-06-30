import React from 'react';

const KinerjaK3lStats = () => {
    const stats = [
        { label: 'Inspeksi APAR Bulan Ini', value: '100%', subtext: 'Seluruh unit APAR aktif' },
        { label: 'Insiden Fatal Tahun Ini', value: '0', subtext: 'Zero Accident' },
        { label: 'SOP Evakuasi Disosialisasikan', value: '15', subtext: 'Ke fakultas & unit kerja' },
        { label: 'Respon Kedaruratan', value: '< 5 Mnt', subtext: 'Rata-rata waktu tanggap' }
    ];

    return (
        <section style={{ padding: '3rem 0', backgroundColor: 'var(--primary)', color: '#fff', marginTop: '2rem' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <h2 style={{ color: '#fff', marginBottom: '0.5rem' }}>Kinerja K3L Udinus</h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)' }}>Komitmen kami dalam menjaga standar Audit Mutu Internal (AMI) & Keselamatan Kampus.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                    {stats.map((stat, index) => (
                        <div key={index} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.5rem' }}>
                                {stat.value}
                            </div>
                            <div style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                                {stat.label}
                            </div>
                            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                                {stat.subtext}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KinerjaK3lStats;
