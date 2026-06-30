import React from 'react';
import { Head, Link } from '@inertiajs/react';

const NewsDetail = ({ newsId }) => {
    // Simulasi data berita
    const newsData = {
        title: 'Pelatihan Pemadaman Kebakaran Bersama Damkar Semarang',
        date: '28 Juni 2026',
        imgUrl: 'https://via.placeholder.com/1200x500/0A3A69/FFFFFF?text=Berita+K3L',
        content: `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; color: var(--primary);">Sub Judul Berita</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
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
