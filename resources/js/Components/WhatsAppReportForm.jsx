import React, { useState } from 'react';

const WhatsAppReportForm = () => {
    const [nama, setNama] = useState('');
    const [fakultas, setFakultas] = useState('');
    const [email, setEmail] = useState('');
    const [lokasi, setLokasi] = useState('');
    const [jenisLaporan, setJenisLaporan] = useState('');
    const [urgensi, setUrgensi] = useState('');
    const [deskripsi, setDeskripsi] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!fakultas || !lokasi || !jenisLaporan || !urgensi || !deskripsi) {
            alert('Mohon lengkapi semua field yang wajib (*).');
            return;
        }

        // Format pesan WhatsApp
        const waNumber = '+6285728693585';
        
        const identitas = nama || 'Tidak disebutkan';
        
        const message = `*LAPORAN K3L UDINUS*\n\n` +
            `*Pelapor:* ${identitas}\n` +
            `*Fakultas/Unit:* ${fakultas}\n` +
            (email ? `*Email:* ${email}\n` : '') +
            `*Lokasi Kejadian:* ${lokasi}\n` +
            `*Jenis Laporan:* ${jenisLaporan}\n` +
            `*Tingkat Urgensi:* ${urgensi}\n\n` +
            `*Deskripsi Kejadian:*\n${deskripsi}\n\n` +
            `_Dilaporkan melalui Portal K3L Udinus_`;
        
        const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
        
        // Buka di tab baru
        window.open(waUrl, '_blank');
    };

    return (
        <div className="form-card" id="report-form-section" style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'left', display: 'block' }}>
            <h2 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Sampaikan Laporan via WhatsApp</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-main)', borderBottom: '2px solid var(--border-color)', paddingBottom: '1rem' }}>
                Bantu jaga keselamatan bersama. Laporan Anda akan diteruskan ke koordinator K3L untuk ditindaklanjuti.
            </p>
            
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">Nama Pelapor <span style={{ fontSize: '0.85em', color: '#666' }}>(opsional)</span></label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nama lengkap"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                        />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">Fakultas / Unit *</label>
                        <select 
                            className="form-control" 
                            value={fakultas}
                            onChange={(e) => setFakultas(e.target.value)}
                            required
                        >
                            <option value="">Pilih fakultas / unit…</option>
                            <option value="Fakultas Ilmu Komputer">Fakultas Ilmu Komputer</option>
                            <option value="Fakultas Ekonomi & Bisnis">Fakultas Ekonomi & Bisnis</option>
                            <option value="Fakultas Kesehatan">Fakultas Kesehatan</option>
                            <option value="Fakultas Teknik">Fakultas Teknik</option>
                            <option value="Fakultas Kedokteran">Fakultas Kedokteran</option>
                            <option value="Fakultas Hukum dan Studi Global">Fakultas Hukum dan Studi Global</option>
                            <option value="Pascasarjana">Pascasarjana</option>
                            <option value="Unit/Bagian Non-Akademik">Unit/Bagian Non-Akademik</option>
                            <option value="Lainnya">Lainnya</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label">Email <span style={{ fontSize: '0.85em', color: '#666' }}>(opsional)</span></label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="nama@mhs.dinus.ac.id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Lokasi Kejadian *</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Contoh: Gedung H Lantai 3, Lab Jaringan"
                        value={lokasi}
                        onChange={(e) => setLokasi(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Jenis Laporan *</label>
                    <select 
                        className="form-control"
                        value={jenisLaporan}
                        onChange={(e) => setJenisLaporan(e.target.value)}
                        required
                    >
                        <option value="">Pilih jenis laporan…</option>
                        <option value="Kondisi Tidak Aman">Kondisi Tidak Aman</option>
                        <option value="Insiden">Insiden</option>
                        <option value="Near-Miss">Near-Miss</option>
                        <option value="Keluhan">Keluhan</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">Tingkat Urgensi *</label>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {['Rendah', 'Sedang', 'Tinggi', 'Darurat'].map((level) => (
                            <div 
                                key={level}
                                onClick={() => setUrgensi(level)}
                                style={{
                                    padding: '0.5rem 1rem',
                                    border: `1px solid ${urgensi === level ? 'var(--primary)' : '#ccc'}`,
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    backgroundColor: urgensi === level ? 'rgba(0, 100, 0, 0.1)' : 'transparent',
                                    fontWeight: urgensi === level ? 'bold' : 'normal',
                                    color: urgensi === level ? 'var(--primary)' : 'inherit',
                                    flex: '1',
                                    textAlign: 'center'
                                }}
                            >
                                {level}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label">Deskripsi Kejadian *</label>
                    <textarea 
                        className="form-control" 
                        rows="4" 
                        placeholder="Jelaskan apa yang terjadi, kapan, dan kondisi di lokasi…"
                        value={deskripsi}
                        onChange={(e) => setDeskripsi(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div style={{ marginBottom: '1.5rem', fontSize: '0.85em', color: '#666', fontStyle: 'italic' }}>
                    * Jika ada foto bukti, Anda dapat melampirkannya langsung di obrolan WhatsApp setelah menekan tombol kirim di bawah ini.
                </div>

                <button type="submit" className="btn-submit" style={{ width: '100%' }}>
                    Kirim Laporan ke WhatsApp ➔
                </button>
            </form>
        </div>
    );
};

export default WhatsAppReportForm;
