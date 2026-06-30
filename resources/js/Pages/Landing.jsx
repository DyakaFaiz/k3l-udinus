import React from 'react';
import NewsTicker from '../Components/NewsTicker';
import EmergencyButtons from '../Components/EmergencyButtons';
import BannerSlider from '../Components/BannerSlider';
import QuickAccessCards from '../Components/QuickAccessCards';
import KinerjaK3lStats from '../Components/KinerjaK3lStats';
import SwotSection from '../Components/SwotSection';
import GallerySection from '../Components/GallerySection';
import NewsSection from '../Components/NewsSection';
import WhatsAppReportForm from '../Components/WhatsAppReportForm';
import { Head } from '@inertiajs/react';

const Landing = () => {
    return (
        <>
            <Head title="K3L UDINUS - Darurat & Pelaporan" />
            <NewsTicker />
            
            <header className="main-header">
                <div className="container header-container">
                    <div className="header-logo">
                        <img 
                            src="https://dinus.ac.id/wp-content/uploads/2023/11/LogoUdinus.png" 
                            alt="Logo Udinus"
                        />
                        <h2 className="header-title">K3L UDINUS</h2>
                    </div>
                    <nav style={{ display: 'flex', gap: '1.5rem', fontWeight: 600 }}>
                        <a href="#report-form-section" style={{ color: 'var(--secondary)' }}>Lapor Insiden</a>
                    </nav>
                </div>
            </header>

            <section className="hero-section">
                <div className="container">
                    <h1>Sistem Pelaporan & Darurat K3L</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <EmergencyButtons />
                </div>
            </section>

            <BannerSlider />

            <QuickAccessCards />

            <KinerjaK3lStats />

            <SwotSection />

            <GallerySection />

            <NewsSection />

            <section style={{ padding: '4rem 0 5rem', backgroundColor: '#fff' }}>
                <div className="container">
                    <WhatsAppReportForm />
                </div>
            </section>
            
            <footer style={{ backgroundColor: 'var(--header-bg)', color: 'rgba(255,255,255,0.8)', padding: '4rem 0 2rem' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
                    
                    {/* Kolom Info Kampus */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <img 
                                src="https://dinus.ac.id/wp-content/uploads/2023/11/LogoUdinus.png" 
                                alt="Logo Udinus"
                                style={{ height: '40px' }}
                            />
                            <h3 style={{ color: '#fff', margin: 0, fontSize: '1.2rem' }}>K3L Udinus</h3>
                        </div>
                        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '0.95rem' }}>
                            <strong>Universitas Dian Nuswantoro</strong><br/>
                            Jl. Imam Bonjol No.207, Pendrikan Kidul<br/>
                            Semarang Tengah, Kota Semarang<br/>
                            Jawa Tengah 50131
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem' }}>
                            <span>📞 Telp: (024) 3517261</span>
                            <span>📧 Email: sekretariat@dinus.ac.id</span>
                            <span>🚨 Hotline Darurat K3L: 0812-XXXX-XXXX</span>
                        </div>
                    </div>

                    {/* Kolom Tautan Penting */}
                    <div>
                        <h3 style={{ color: '#fff', marginBottom: '1.5rem', borderBottom: '2px solid var(--secondary)', paddingBottom: '0.5rem', display: 'inline-block', fontSize: '1.2rem' }}>Tautan Penting</h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
                            <li><a href="https://dinus.ac.id/" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Website Utama UDINUS ➔</a></li>
                            <li><a href="/peta-evakuasi" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Peta Evakuasi Kampus ➔</a></li>
                            <li><a href="/sop-panduan" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Dokumen SOP K3L ➔</a></li>
                        </ul>
                    </div>

                    {/* Kolom Google Maps */}
                    <div>
                        <h3 style={{ color: '#fff', marginBottom: '1.5rem', borderBottom: '2px solid var(--secondary)', paddingBottom: '0.5rem', display: 'inline-block', fontSize: '1.2rem' }}>Lokasi Kampus</h3>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2260655382627!2d110.40698111538356!3d-6.982631670313175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4ea14022b7%3A0x86be4518a4a58df1!2sUniversitas%20Dian%20Nuswantoro!5e0!3m2!1sid!2sid!4v1689840132145!5m2!1sid!2sid" 
                            width="100%" 
                            height="200" 
                            style={{ border: 0, borderRadius: '8px' }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Peta Kampus UDINUS"
                        ></iframe>
                    </div>
                </div>

                {/* Copyright Line */}
                <div style={{ textAlign: 'center', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Keselamatan, Kesehatan Kerja, dan Lingkungan (K3L) - Universitas Dian Nuswantoro.
                </div>
            </footer>
        </>
    );
};

export default Landing;
