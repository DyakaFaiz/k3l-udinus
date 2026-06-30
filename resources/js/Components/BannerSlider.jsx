import React, { useState, useEffect } from 'react';

const BannerSlider = () => {
    const banners = [
        {
            id: 1,
            title: 'Kampanye Keselamatan Laboratorium',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            imgUrl: 'https://via.placeholder.com/1200x400/0A3A69/FFFFFF?text=Kampanye+Keselamatan+Lab'
        },
        {
            id: 2,
            title: 'Audit Mutu Internal (AMI) 2026',
            subtitle: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            imgUrl: 'https://via.placeholder.com/1200x400/F3A712/FFFFFF?text=Audit+Mutu+Internal'
        },
        {
            id: 3,
            title: 'Simulasi Evakuasi Darurat Terpadu',
            subtitle: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            imgUrl: 'https://via.placeholder.com/1200x400/D32F2F/FFFFFF?text=Simulasi+Evakuasi'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
        }, 5000); // Ganti banner setiap 5 detik
        return () => clearInterval(timer);
    }, [banners.length]);

    const nextSlide = () => {
        setCurrentIndex(currentIndex === banners.length - 1 ? 0 : currentIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? banners.length - 1 : currentIndex - 1);
    };

    return (
        <section style={{ padding: '3rem 1.5rem 1rem', backgroundColor: 'transparent' }}>
            <div className="container" style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', padding: 0}}>
                {/* Image Container with Slider Animation */}
                <div 
                    style={{ 
                        display: 'flex', 
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)', 
                        transform: `translateX(-${currentIndex * 100}%)` 
                    }}
                >
                    {banners.map((banner) => (
                        <div key={banner.id} style={{ minWidth: '100%', position: 'relative' }}>
                            <img 
                                src={banner.imgUrl} 
                                alt={banner.title} 
                                style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }} 
                            />
                            {/* Overlay Gradient for Text Readability */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '3rem 2rem 1.5rem',
                                background: 'linear-gradient(transparent, rgba(10, 58, 105, 0.95))',
                                color: '#fff'
                            }}>
                                <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '0.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>{banner.title}</h3>
                                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>{banner.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Left/Right Arrow Controls */}
                <button 
                    onClick={prevSlide}
                    style={{ position: 'absolute', top: '50%', left: '1.5rem', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', width: '45px', height: '45px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', backdropFilter: 'blur(4px)', transition: 'background 0.3s' }}
                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.4)'}
                    onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                >
                    &#10094;
                </button>
                <button 
                    onClick={nextSlide}
                    style={{ position: 'absolute', top: '50%', right: '1.5rem', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', width: '45px', height: '45px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', backdropFilter: 'blur(4px)', transition: 'background 0.3s' }}
                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.4)'}
                    onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                >
                    &#10095;
                </button>

                {/* Dot Indicators */}
                <div style={{ position: 'absolute', bottom: '1.5rem', right: '2rem', display: 'flex', gap: '0.6rem' }}>
                    {banners.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                border: 'none',
                                background: currentIndex === index ? 'var(--secondary)' : 'rgba(255,255,255,0.5)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                transform: currentIndex === index ? 'scale(1.2)' : 'scale(1)'
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BannerSlider;
