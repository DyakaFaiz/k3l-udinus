import React from 'react';
import { Head, Link } from '@inertiajs/react';

const NewsDetail = ({ newsId }) => {
    // Simulasi data berita
    const newsData = {
        title: 'Pelatihan Pemadaman Kebakaran Bersama Damkar Semarang',
        date: '28 Juni 2026',
        imgUrl: 'https://via.placeholder.com/1200x500/0A3A69/FFFFFF?text=Berita+K3L',
        content: `
            <p>Satgas Keselamatan, Kesehatan Kerja, dan Lingkungan (K3L) Universitas Dian Nuswantoro bekerjasama dengan Dinas Pemadam Kebakaran (Damkar) Kota Semarang sukses menyelenggarakan simulasi tanggap darurat dan pelatihan penggunaan Alat Pemadam Api Ringan (APAR) di pelataran Gedung G, Kamis pagi.</p>
            <p>Kegiatan yang diikuti oleh puluhan perwakilan mahasiswa, dosen, serta tenaga kependidikan ini bertujuan untuk meningkatkan kesiapsiagaan seluruh elemen kampus dalam menghadapi situasi darurat kebakaran. Dalam simulasi tersebut, peserta tidak hanya diberikan pemahaman teoritis tentang klasifikasi api, tetapi juga praktek langsung memadamkan titik api buatan.</p>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; color: var(--primary);">Pentingnya Kesiapsiagaan Dini</h3>
            <p>Koordinator K3L UDINUS menekankan bahwa pengetahuan cara penggunaan APAR adalah kemampuan dasar yang wajib dimiliki oleh sivitas akademika. "Banyak kasus kebakaran besar berawal dari titik api kecil yang gagal dipadamkan karena kepanikan dan ketidaktahuan cara menggunakan alat pemadam," jelasnya.</p>
            <p>Ke depannya, Satgas K3L berencana untuk menjadikan agenda pelatihan semacam ini sebagai kegiatan rutin setiap semester. Sivitas akademika diimbau untuk selalu memeriksa jalur evakuasi dan lokasi APAR terdekat di masing-masing gedung tempat mereka beraktivitas.</p>
        `
    };

    return (
        <>
            <Head title={`${newsData.title} - K3L Udinus`} />
            
            <header className="main-header">
                <div className="container header-container">
                    <div className="header-logo">
                        <Link href="/">
                            <img 
                                src="https://dinus.ac.id/wp-content/uploads/2023/11/LogoUdinus.png" 
                                alt="Logo Udinus" 
                            />
                        </Link>
                        <h2 className="header-title">K3L Udinus</h2>
                    </div>
                    <nav style={{ display: 'flex', gap: '1.5rem', fontWeight: 600 }}>
                        <Link href="/" style={{ color: '#fff' }}>Beranda</Link>
                    </nav>
                </div>
            </header>

            <main style={{ padding: '3rem 0 5rem', backgroundColor: '#fff', minHeight: '100vh' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <Link href="/" style={{ display: 'inline-block', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                        ⬅ Kembali ke Beranda
                    </Link>
                    
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary)', lineHeight: 1.3 }}>{newsData.title}</h1>
                    <p style={{ color: 'var(--secondary)', fontWeight: 700, marginBottom: '2rem' }}>{newsData.date}</p>
                    
                    <img 
                        src={newsData.imgUrl} 
                        alt="News Cover" 
                        style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '2.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }} 
                    />
                    
                    <div 
                        className="article-content" 
                        style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: 1.8 }}
                        dangerouslySetInnerHTML={{ __html: newsData.content }}
                    />
                </div>
            </main>
            
            <footer style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)', borderTop: '1px solid var(--border-color)', backgroundColor: 'var(--bg-main)' }}>
                <div className="container">
                    &copy; {new Date().getFullYear()} K3L Universitas Dian Nuswantoro.
                </div>
            </footer>
        </>
    );
};

export default NewsDetail;
