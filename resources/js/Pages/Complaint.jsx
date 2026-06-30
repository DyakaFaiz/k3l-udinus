import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';

const Complaint = () => {
    const [formData, setFormData] = useState({
        nama: '',
        nim_npp: '',
        no_hp: '',
        tanggal: '',
        waktu: '',
        lokasi: '',
        jenis_komplain: '',
        keterangan: '',
        foto: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'foto') {
            setFormData({ ...formData, foto: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Komplain berhasil dikirim! Laporan Anda akan segera ditindaklanjuti oleh tim K3L.');
    };

    return (
        <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>
            <Head title="Layanan Komplain - K3L UDINUS" />
            
            {/* Navbar Simple */}
            <header style={{ backgroundColor: 'var(--header-bg)', padding: '1rem 0', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <h2 style={{ color: '#fff', margin: 0, fontSize: '1.3rem' }}>Layanan Komplain K3L</h2>
                </div>
            </header>

            <main className="container" style={{ padding: '3rem 1.5rem 5rem' }}>
                <div style={{ maxWidth: '750px', margin: '0 auto', background: 'transparent', borderRadius: '16px', padding: '3rem', boxShadow: 'none' }}>
                    <Link href="/" style={{ display: 'inline-block', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                        ⬅ Kembali ke Beranda
                    </Link>
                    <h1 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '2rem' }}>Formulir Komplain</h1>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.05rem', lineHeight: 1.6 }}>Silakan isi data berikut untuk melaporkan keluhan terkait fasilitas rusak, pencemaran lingkungan, atau insiden K3L di area kampus UDINUS.</p>

                    <form onSubmit={handleSubmit}>
                        {/* Profile Pelapor */}
                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '0.8rem', marginBottom: '1.5rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                1. Profil Pelapor
                            </h3>
                            
                            <div className="form-group">
                                <label className="form-label">Nama Lengkap *</label>
                                <input type="text" name="nama" className="form-control" placeholder="Contoh: Budi Santoso" required value={formData.nama} onChange={handleChange} />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                <div className="form-group">
                                    <label className="form-label">NIM / NPP *</label>
                                    <input type="text" name="nim_npp" className="form-control" placeholder="A11.2023.xxxxx" required value={formData.nim_npp} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">No. Telepon / WhatsApp *</label>
                                    <input type="tel" name="no_hp" className="form-control" placeholder="0812xxxxxx" required value={formData.no_hp} onChange={handleChange} />
                                </div>
                            </div>
                        </div>

                        {/* Waktu & Tempat */}
                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '0.8rem', marginBottom: '1.5rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                2. Waktu & Tempat
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                <div className="form-group">
                                    <label className="form-label">Tanggal Pengamatan *</label>
                                    <input type="date" name="tanggal" className="form-control" required value={formData.tanggal} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Waktu Perkiraan *</label>
                                    <input type="time" name="waktu" className="form-control" required value={formData.waktu} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Lokasi Detail *</label>
                                <input type="text" name="lokasi" className="form-control" placeholder="Contoh: Toilet Lantai 2 Gedung H" required value={formData.lokasi} onChange={handleChange} />
                            </div>
                        </div>

                        {/* Jenis Laporan & Keterangan */}
                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '0.8rem', marginBottom: '1.5rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
                                3. Detail Komplain
                            </h3>
                            <div className="form-group">
                                <label className="form-label">Jenis Komplain *</label>
                                <select name="jenis_komplain" className="form-control" required value={formData.jenis_komplain} onChange={handleChange}>
                                    <option value="">-- Pilih Jenis Komplain --</option>
                                    <option value="fasilitas">Kerusakan Fasilitas (Lampu padam, AC bocor, Plafon jebol)</option>
                                    <option value="pencemaran">Pencemaran Lingkungan (Sampah berserakan, Bau menyengat)</option>
                                    <option value="pelanggaran">Pelanggaran K3L (Tidak pakai APD, Merokok di area dilarang)</option>
                                    <option value="lainnya">Lainnya</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Keterangan Lengkap *</label>
                                <textarea name="keterangan" className="form-control" rows="5" placeholder="Jelaskan secara detail keluhan yang Anda temukan..." required value={formData.keterangan} onChange={handleChange}></textarea>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Lampirkan Foto Bukti</label>
                                <div style={{ border: '2px dashed var(--border-color)', padding: '2rem', textAlign: 'center', borderRadius: '8px', backgroundColor: 'transparent' }}>
                                    <input type="file" name="foto" id="foto-upload" className="form-control" accept="image/*" onChange={handleChange} style={{ display: 'none' }} />
                                    <label htmlFor="foto-upload" style={{ cursor: 'pointer', color: 'var(--primary)', fontWeight: 'bold' }}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ margin: '0 auto 0.5rem', display: 'block' }}><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M20.4 14.5L16 10 4 20"/></svg>
                                        {formData.foto ? formData.foto.name : 'Klik untuk mengunggah foto / gambar pendukung'}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn-submit" style={{ marginTop: '1rem', padding: '1.2rem', fontSize: '1.1rem', backgroundColor: 'var(--secondary)', color: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            Kirim Komplain
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Complaint;
