import React, { useState } from 'react';

const WhatsAppReportForm = () => {
    const [kategori, setKategori] = useState('Bahaya Kelistrikan & Kebakaran');
    const [zonaGedung, setZonaGedung] = useState('');
    const [spesifikasiRuang, setSpesifikasiRuang] = useState('');
    const [deskripsi, setDeskripsi] = useState('');

    const ruangPerGedung = {
        'Gedung G': ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'],
        'Gedung F': ['F1', 'F2', 'F3', 'F4', 'F5', 'F6'],
        'Gedung C': ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'],
        'Gedung D': ['D1', 'D2', 'D3', 'D4', 'D5', 'D6'],
        'Gedung E': ['E1', 'E2', 'E3', 'E4', 'E5', 'E6'],
        'Gedung H': ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
        'Gedung I': ['I1', 'I2', 'I3', 'I4', 'I5', 'I6'],
        'Gedung J': ['J1', 'J2', 'J3', 'J4', 'J5', 'J6'],
    };

    const handleGedungChange = (e) => {
        setZonaGedung(e.target.value);
        setSpesifikasiRuang(''); // Reset ruangan saat gedung berubah
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!zonaGedung || !spesifikasiRuang) {
            alert('Mohon pilih Zona Gedung dan Spesifikasi Ruang terlebih dahulu.');
            return;
        }

        // Format pesan WhatsApp
        const waNumber = '628122840547';
        const lokasiLengkap = `${spesifikasiRuang}, ${zonaGedung}`;
        const message = `*LAPORAN K3L UDINUS*\n\n*Kategori Insiden:* ${kategori}\n*Lokasi:* ${lokasiLengkap}\n*Deskripsi Kejadian:*\n${deskripsi}\n\n_Dilaporkan melalui Portal K3L Udinus_`;
        
        const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
        
        // Buka di tab baru
        window.open(waUrl, '_blank');
    };

    return (
        <div className="form-card" id="report-form-section" style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'left', display: 'block' }}>
            <h2 style={{ marginBottom: '1.5rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '1rem', color: 'var(--primary)' }}>Form Pelaporan via WhatsApp</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Jenis Insiden / Bahaya</label>
                    <select 
                        className="form-control" 
                        value={kategori} 
                        onChange={(e) => setKategori(e.target.value)}
                    >
                        <option value="Bahaya Kelistrikan & Kebakaran">Bahaya Kelistrikan & Kebakaran</option>
                        <option value="Bahaya Lingkungan / Fisik">Bahaya Lingkungan / Fisik (Atap bocor, lantai licin, dll)</option>
                        <option value="Bahaya Biologis / Medis">Bahaya Biologis / Medis (Tertusuk jarum, bahan kimia)</option>
                        <option value="Kedaruratan Medis">Kedaruratan Medis (Pingsan, cedera fisik)</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">Zona Gedung</label>
                    <select 
                        className="form-control" 
                        value={zonaGedung} 
                        onChange={handleGedungChange}
                        required
                    >
                        <option value="" disabled>Pilih Gedung...</option>
                        {Object.keys(ruangPerGedung).map((gedung) => (
                            <option key={gedung} value={gedung}>{gedung}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">Spesifikasi Ruang</label>
                    <select 
                        className="form-control" 
                        value={spesifikasiRuang} 
                        onChange={(e) => setSpesifikasiRuang(e.target.value)}
                        required
                        disabled={!zonaGedung}
                    >
                        <option value="" disabled>
                            {zonaGedung ? 'Pilih Ruangan...' : 'Pilih Gedung terlebih dahulu'}
                        </option>
                        {zonaGedung && ruangPerGedung[zonaGedung].map((ruang) => (
                            <option key={ruang} value={ruang}>{ruang}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">Deskripsi Kejadian Singkat</label>
                    <textarea 
                        className="form-control" 
                        rows="4" 
                        placeholder="Contoh: Ada percikan api di stop kontak dekat meja dosen..."
                        value={deskripsi}
                        onChange={(e) => setDeskripsi(e.target.value)}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn-submit">
                    Lanjutkan ke WhatsApp ➔
                </button>
            </form>
        </div>
    );
};

export default WhatsAppReportForm;
