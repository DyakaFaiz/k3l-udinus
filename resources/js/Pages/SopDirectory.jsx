import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';

const SopDirectory = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const sops = [
        { id: 1, title: '1.1.1 Kebijakan K3 UDINUS', desc: 'Dokumen Kebijakan K3 UDINUS', filename: '1-1-1-kebijakan-k3-udinus' },
        { id: 2, title: '1.1.3 Prosedur Komunikasi Kebijakan K3', desc: 'Dokumen Prosedur Komunikasi Kebijakan K3', filename: '1-1-3-prosedur-komunikasi-kebijakan-k3' },
        { id: 3, title: '1.2.2 Pedoman Penunjukan Penanggung Jawab K3', desc: 'Dokumen Pedoman Penunjukan Penanggung Jawab K3', filename: '1-2-2-pedoman-penunjukan-penanggung-jawab-k3' },
        { id: 4, title: '1.2.4 Pernyataan Tanggung Jawab Pimpinan SMK3', desc: 'Dokumen Pernyataan Tanggung Jawab Pimpinan SMK3', filename: '1-2-4-pernyataan-tanggung-jawab-pimpinan-smk3' },
        { id: 5, title: '1.2.5 Prosedur Petugas Tanggap Darurat', desc: 'Dokumen Prosedur Petugas Tanggap Darurat', filename: '1-2-5-prosedur-petugas-tanggap-darurat' },
        { id: 6, title: '1.2.6 Prosedur Konsultasi Ahli K3', desc: 'Dokumen Prosedur Konsultasi Ahli K3', filename: '1-2-6-prosedur-konsultasi-ahli-k3' },
        { id: 7, title: '1.3.3 Prosedur Tinjauan Manajemen SMK3', desc: 'Dokumen Prosedur Tinjauan Manajemen SMK3', filename: '1-3-3-prosedur-tinjauan-manajemen-smk3' },
        { id: 8, title: '1.4.1 Prosedur Keterlibatan dan Konsultasi dengan Tenaga Kerja', desc: 'Dokumen Prosedur Keterlibatan dan Konsultasi dengan Tenaga Kerja', filename: '1-4-1-prosedur-keterlibatan-dan-konsultasi-dengan-tenaga-kerja' },
        { id: 9, title: '1.4.3 Prosedur Pembentukan P2K3', desc: 'Dokumen Prosedur Pembentukan P2K3', filename: '1-4-3-prosedur-pembentukan-p2k3' },
        { id: 10, title: '1.4.4 Prosedur Penetapan Ketua P2K3', desc: 'Dokumen Prosedur Penetapan Ketua P2K3', filename: '1-4-4-prosedur-penetapan-ketua-p2k3' },
        { id: 11, title: '1.4.5 Prosedur Penunjukan dan Kompetensi Sekretaris P2K3', desc: 'Dokumen Prosedur Penunjukan dan Kompetensi Sekretaris P2K3', filename: '1-4-5-prosedur-penunjukan-dan-kompetensi-sekretaris-p2k3' },
        { id: 12, title: '1.4.6 Prosedur Penyusunan Program Kerja P2K3', desc: 'Dokumen Prosedur Penyusunan Program Kerja P2K3', filename: '1-4-6-prosedur-penyusunan-program-kerja-p2k3' },
        { id: 13, title: '1.4.7 Prosedur Dokumentasi dan Penyebarluasan Susunan Pengurus P2K3', desc: 'Dokumen Prosedur Dokumentasi dan Penyebarluasan Susunan Pengurus P2K3', filename: '1-4-7-prosedur-dokumentasi-dan-penyebarluasan-susunan-pengurus-p2k3' },
        { id: 14, title: '1.4.8 Prosedur Pelaksanaan Rapat Pertemuan P2K3', desc: 'Dokumen Prosedur Pelaksanaan Rapat Pertemuan P2K3', filename: '1-4-8-prosedur-pelaksanaan-rapat-pertemuan-p2k3' },
        { id: 15, title: '1.4.9 Prosedur Pelaporan Kegiatan P2K3', desc: 'Dokumen Prosedur Pelaporan Kegiatan P2K3', filename: '1-4-9-prosedur-pelaporan-kegiatan-p2k3' },
        { id: 16, title: '2.1.1 Prosedur Identifikasi Bahaya Penilaian dan Pengendalian Risiko (HIRARC)', desc: 'Dokumen Prosedur Identifikasi Bahaya Penilaian dan Pengendalian Risiko (HIRARC)', filename: '2-1-1-prosedur-identifikasi-bahaya-penilaian-dan-pengendalian-risiko-hirarc' },
        { id: 17, title: '2.4.1 Prosedur Penyebarluasan Informasi K3', desc: 'Dokumen Prosedur Penyebarluasan Informasi K3', filename: '2-4-1-prosedur-penyebarluasan-informasi-k3' },
        { id: 18, title: '3.1.1 Prosedur Identifikasi Bahaya Tahap Perancangan dan Modifikasi Fasilitas', desc: 'Dokumen Prosedur Identifikasi Bahaya Tahap Perancangan dan Modifikasi Fasilitas', filename: '3-1-1-prosedur-identifikasi-bahaya-tahap-perancangan-dan-modifikasi-fasilitas' },
        { id: 19, title: '3.2.2 Prosedur Identifikasi Bahaya dan Penilaian Risiko pada Tinjauan Kontrak', desc: 'Dokumen Prosedur Identifikasi Bahaya dan Penilaian Risiko pada Tinjauan Kontrak', filename: '3-2-2-prosedur-identifikasi-bahaya-dan-penilaian-risiko-pada-tinjauan-kontrak' },
        { id: 20, title: '4.1.1 Prosedur Pengendalian Dokumen K3', desc: 'Dokumen Prosedur Pengendalian Dokumen K3', filename: '4-1-1-prosedur-pengendalian-dokumen-k3' },
        { id: 21, title: '5.1.1 Prosedur Pemeriksaan Spesifikasi K3 Sebelum Pembelian', desc: 'Dokumen Prosedur Pemeriksaan Spesifikasi K3 Sebelum Pembelian', filename: '5-1-1-prosedur-pemeriksaan-spesifikasi-k3-sebelum-pembelian' },
        { id: 22, title: '5.1.2 Prosedur Penyusunan Spesifikasi Pembelian Sesuai Standar K3', desc: 'Dokumen Prosedur Penyusunan Spesifikasi Pembelian Sesuai Standar K3', filename: '5-1-2-prosedur-penyusunan-spesifikasi-pembelian-sesuai-standar-k3' },
        { id: 23, title: '5.2.1 Prosedur Verifikasi Kesesuaian Barang dan Jasa Dibeli', desc: 'Dokumen Prosedur Verifikasi Kesesuaian Barang dan Jasa Dibeli', filename: '5-2-1-prosedur-verifikasi-kesesuaian-barang-dan-jasa-dibeli' },
        { id: 24, title: '6.1.1 Prosedur HIRARC Identifikasi Bahaya Penilaian dan Pengendalian Risiko', desc: 'Dokumen Prosedur HIRARC Identifikasi Bahaya Penilaian dan Pengendalian Risiko', filename: '6-1-1-prosedur-hirarc-identifikasi-bahaya-penilaian-dan-pengendalian-risiko' },
        { id: 25, title: '6.1.5 Prosedur Izin Kerja untuk Tugas Berisiko Tinggi', desc: 'Dokumen Prosedur Izin Kerja untuk Tugas Berisiko Tinggi', filename: '6-1-5-prosedur-izin-kerja-untuk-tugas-berisiko-tinggi' },
        { id: 26, title: '6.1.6 Prosedur Penyediaan Penggunaan dan Pemeliharaan APD', desc: 'Dokumen Prosedur Penyediaan Penggunaan dan Pemeliharaan APD', filename: '6-1-6-prosedur-penyediaan-penggunaan-dan-pemeliharaan-apd' },
        { id: 27, title: '6.1.7 Prosedur Pemeriksaan Kelayakan APD Sesuai Standar', desc: 'Dokumen Prosedur Pemeriksaan Kelayakan APD Sesuai Standar', filename: '6-1-7-prosedur-pemeriksaan-kelayakan-apd-sesuai-standar' },
        { id: 28, title: '6.2.1 Prosedur Pengawasan Pelaksanaan Pekerjaan yang Aman', desc: 'Dokumen Prosedur Pengawasan Pelaksanaan Pekerjaan yang Aman', filename: '6-2-1-prosedur-pengawasan-pelaksanaan-pekerjaan-yang-aman' },
        { id: 29, title: '6.3.1 Prosedur Seleksi dan Penempatan Personil Berdasarkan Persyaratan Kesehatan', desc: 'Dokumen Prosedur Seleksi dan Penempatan Personil Berdasarkan Persyaratan Kesehatan', filename: '6-3-1-prosedur-seleksi-dan-penempatan-personil-berdasarkan-persyaratan-kesehatan' },
        { id: 30, title: '6.3.2 Prosedur Penugasan Pekerjaan Berdasarkan Kompetensi dan Kewenangan', desc: 'Dokumen Prosedur Penugasan Pekerjaan Berdasarkan Kompetensi dan Kewenangan', filename: '6-3-2-prosedur-penugasan-pekerjaan-berdasarkan-kompetensi-dan-kewenangan' },
        { id: 31, title: '6.4.1 Prosedur Penilaian Risiko untuk Penetapan Area Terbatas', desc: 'Dokumen Prosedur Penilaian Risiko untuk Penetapan Area Terbatas', filename: '6-4-1-prosedur-penilaian-risiko-untuk-penetapan-area-terbatas' },
        { id: 32, title: '6.4.2 Prosedur Pengendalian Akses pada Area Terbatas', desc: 'Dokumen Prosedur Pengendalian Akses pada Area Terbatas', filename: '6-4-2-prosedur-pengendalian-akses-pada-area-terbatas' },
        { id: 33, title: '6.4.3 Prosedur Penyediaan Fasilitas dan Layanan Tempat Kerja Sesuai Standar Teknis', desc: 'Dokumen Prosedur Penyediaan Fasilitas dan Layanan Tempat Kerja Sesuai Standar Teknis', filename: '6-4-3-prosedur-penyediaan-fasilitas-dan-layanan-tempat-kerja-sesuai-standar-teknis' },
        { id: 34, title: '6.4.4 Prosedur Pemasangan Rambu K3', desc: 'Dokumen Prosedur Pemasangan Rambu K3', filename: '6-4-4-prosedur-pemasangan-rambu-k3' },
        { id: 35, title: '6.5.2 Prosedur Pencatatan Pemeriksaan dan Pemeliharaan Sarana Produksi', desc: 'Dokumen Prosedur Pencatatan Pemeriksaan dan Pemeliharaan Sarana Produksi', filename: '6-5-2-prosedur-pencatatan-pemeriksaan-dan-pemeliharaan-sarana-produksi' },
        { id: 36, title: '6.5.3 Prosedur Pengelolaan Sertifikasi Sarana dan Peralatan Produksi', desc: 'Dokumen Prosedur Pengelolaan Sertifikasi Sarana dan Peralatan Produksi', filename: '6-5-3-prosedur-pengelolaan-sertifikasi-sarana-dan-peralatan-produksi' },
        { id: 37, title: '6.5.4 Prosedur Penunjukan Petugas Kompeten Pemeliharaan Sarana Produksi', desc: 'Dokumen Prosedur Penunjukan Petugas Kompeten Pemeliharaan Sarana Produksi', filename: '6-5-4-prosedur-penunjukan-petugas-kompeten-pemeliharaan-sarana-produksi' },
        { id: 38, title: '6.5.7 Prosedur Penandaan Peralatan Tidak Aman atau Tidak Digunakan', desc: 'Dokumen Prosedur Penandaan Peralatan Tidak Aman atau Tidak Digunakan', filename: '6-5-7-prosedur-penandaan-peralatan-tidak-aman-atau-tidak-digunakan' },
        { id: 39, title: '6.5.8 Prosedur Penerapan Sistem Penguncian Lock Out', desc: 'Dokumen Prosedur Penerapan Sistem Penguncian Lock Out', filename: '6-5-8-prosedur-penerapan-sistem-penguncian-lock-out' },
        { id: 40, title: '6.5.9 Prosedur Keselamatan Saat Pemeriksaan dan Perbaikan Sarana Produksi', desc: 'Dokumen Prosedur Keselamatan Saat Pemeriksaan dan Perbaikan Sarana Produksi', filename: '6-5-9-prosedur-keselamatan-saat-pemeriksaan-dan-perbaikan-sarana-produksi' },
        { id: 41, title: '6.7.4 Prosedur Informasi Pelatihan Petugas Darurat', desc: 'Dokumen Prosedur Informasi Pelatihan Petugas Darurat', filename: '6-7-4-prosedur-informasi-pelatihan-petugas-darurat' },
        { id: 42, title: '6.7.6 Prosedur Inspeksi Peralatan Darurat', desc: 'Dokumen Prosedur Inspeksi Peralatan Darurat', filename: '6-7-6-prosedur-inspeksi-peralatan-darurat' },
        { id: 43, title: '6.8.1 Prosedur Evaluasi Alat P3K', desc: 'Dokumen Prosedur Evaluasi Alat P3K', filename: '6-8-1-prosedur-evaluasi-alat-p3k' },
        { id: 44, title: '6.8.2 Prosedur Penunjukan Petugas P3K', desc: 'Dokumen Prosedur Penunjukan Petugas P3K', filename: '6-8-2-prosedur-penunjukan-petugas-p3k' },
        { id: 45, title: '7.1.1 Prosedur Inspeksi Tempat Kerja dan Cara Kerja', desc: 'Dokumen Prosedur Inspeksi Tempat Kerja dan Cara Kerja', filename: '7-1-1-prosedur-inspeksi-tempat-kerja-dan-cara-kerja' },
        { id: 46, title: '7.2.1 Prosedur Pemantauan dan Pengukuran Lingkungan Kerja', desc: 'Dokumen Prosedur Pemantauan dan Pengukuran Lingkungan Kerja', filename: '7-2-1-prosedur-pemantauan-dan-pengukuran-lingkungan-kerja' },
        { id: 47, title: '7.2.2 Prosedur Cakupan Pemantauan Lingkungan Kerja', desc: 'Dokumen Prosedur Cakupan Pemantauan Lingkungan Kerja', filename: '7-2-2-prosedur-cakupan-pemantauan-lingkungan-kerja' },
        { id: 48, title: '7.2.3 Prosedur Penunjukan Petugas Pemantauan Lingkungan Kerja', desc: 'Dokumen Prosedur Penunjukan Petugas Pemantauan Lingkungan Kerja', filename: '7-2-3-prosedur-penunjukan-petugas-pemantauan-lingkungan-kerja' },
        { id: 49, title: '7.4.1 Prosedur Pemantauan Kesehatan Tenaga Kerja Berisiko Tinggi', desc: 'Dokumen Prosedur Pemantauan Kesehatan Tenaga Kerja Berisiko Tinggi', filename: '7-4-1-prosedur-pemantauan-kesehatan-tenaga-kerja-berisiko-tinggi' },
        { id: 50, title: '7.4.3 Prosedur Penunjukan Dokter Pemeriksa Kesehatan Tenaga Kerja', desc: 'Dokumen Prosedur Penunjukan Dokter Pemeriksa Kesehatan Tenaga Kerja', filename: '7-4-3-prosedur-penunjukan-dokter-pemeriksa-kesehatan-tenaga-kerja' },
        { id: 51, title: '7.4.4 Prosedur Penyediaan Pelayanan Kesehatan Kerja', desc: 'Dokumen Prosedur Penyediaan Pelayanan Kesehatan Kerja', filename: '7-4-4-prosedur-penyediaan-pelayanan-kesehatan-kerja' },
        { id: 52, title: '7.4.5 Prosedur Pencatatan dan Pengarsipan Hasil Pemantauan Kesehatan Tenaga Kerja', desc: 'Dokumen Prosedur Pencatatan dan Pengarsipan Hasil Pemantauan Kesehatan Tenaga Kerja', filename: '7-4-5-prosedur-pencatatan-dan-pengarsipan-hasil-pemantauan-kesehatan-tenaga-kerja' },
        { id: 53, title: '8.3.1 Prosedur Pemeriksaan dan Pengkajian Kecelakaan Kerja', desc: 'Dokumen Prosedur Pemeriksaan dan Pengkajian Kecelakaan Kerja', filename: '8-3-1-prosedur-pemeriksaan-dan-pengkajian-kecelakaan-kerja' },
        { id: 54, title: '9.1.1 Prosedur Identifikasi Bahaya Penanganan Manual dan Mekanis', desc: 'Dokumen Prosedur Identifikasi Bahaya Penanganan Manual dan Mekanis', filename: '9-1-1-prosedur-identifikasi-bahaya-penanganan-manual-dan-mekanis' },
        { id: 55, title: '9.1.2 Prosedur Penunjukan Petugas Kompeten Identifikasi Bahaya Penanganan Material', desc: 'Dokumen Prosedur Penunjukan Petugas Kompeten Identifikasi Bahaya Penanganan Material', filename: '9-1-2-prosedur-penunjukan-petugas-kompeten-identifikasi-bahaya-penanganan-material' },
        { id: 56, title: '9.2.1 Prosedur Penyimpanan dan Pemindahan Bahan Secara Aman', desc: 'Dokumen Prosedur Penyimpanan dan Pemindahan Bahan Secara Aman', filename: '9-2-1-prosedur-penyimpanan-dan-pemindahan-bahan-secara-aman' },
        { id: 57, title: '9.2.3 Prosedur Pembuangan Bahan Secara Aman', desc: 'Dokumen Prosedur Pembuangan Bahan Secara Aman', filename: '9-2-3-prosedur-pembuangan-bahan-secara-aman' },
        { id: 58, title: '9.3.1 Prosedur Penyimpanan Penanganan dan Pemindahan BKB', desc: 'Dokumen Prosedur Penyimpanan Penanganan dan Pemindahan BKB', filename: '9-3-1-prosedur-penyimpanan-penanganan-dan-pemindahan-bkb' },
        { id: 59, title: '9.3.3 Prosedur Identifikasi dan Pelabelan Bahan Kimia Berbahaya', desc: 'Dokumen Prosedur Identifikasi dan Pelabelan Bahan Kimia Berbahaya', filename: '9-3-3-prosedur-identifikasi-dan-pelabelan-bahan-kimia-berbahaya' },
        { id: 60, title: '9.3.4 Prosedur Pemasangan Rambu Peringatan Bahaya Bahan Kimia', desc: 'Dokumen Prosedur Pemasangan Rambu Peringatan Bahaya Bahan Kimia', filename: '9-3-4-prosedur-pemasangan-rambu-peringatan-bahaya-bahan-kimia' },
        { id: 61, title: '12.2.1 Prosedur Pelatihan K3 bagi Manajemen Eksekutif dan Pengurus', desc: 'Dokumen Prosedur Pelatihan K3 bagi Manajemen Eksekutif dan Pengurus', filename: '12-2-1-prosedur-pelatihan-k3-bagi-manajemen-eksekutif-dan-pengurus' },
        { id: 62, title: '12.2.2 Prosedur Pelatihan K3 bagi Manajer dan Pengawas Penyelia', desc: 'Dokumen Prosedur Pelatihan K3 bagi Manajer dan Pengawas Penyelia', filename: '12-2-2-prosedur-pelatihan-k3-bagi-manajer-dan-pengawas-penyelia' },
        { id: 63, title: '12.3.1 Prosedur Pelatihan K3 bagi Seluruh Tenaga Kerja', desc: 'Dokumen Prosedur Pelatihan K3 bagi Seluruh Tenaga Kerja', filename: '12-3-1-prosedur-pelatihan-k3-bagi-seluruh-tenaga-kerja' },
        { id: 64, title: '12.5.1 Prosedur Kepatuhan Lisensi dan Kualifikasi untuk Tugas Khusus', desc: 'Dokumen Prosedur Kepatuhan Lisensi dan Kualifikasi untuk Tugas Khusus', filename: '12-5-1-prosedur-kepatuhan-lisensi-dan-kualifikasi-untuk-tugas-khusus' },
    ];

    const filteredSops = sops.filter(sop => 
        sop.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        sop.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredSops.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedSops = filteredSops.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
            <Head title="Panduan K3L - Udinus" />
            
            <div className="container" style={{ paddingBottom: '4rem' }}>
                <div className="page-header">
                    <Link href="/" style={{ display: 'inline-block', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                        ⬅ Kembali ke Beranda
                    </Link>
                    <h1>SOP & Panduan K3L</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Cari dokumen prosedur keselamatan standar universitas.</p>
                </div>

                <div className="search-bar">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="🔍 Cari SOP (contoh: APAR, Gempa)..." 
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                        style={{ fontSize: '1.1rem', padding: '1rem' }}
                    />
                </div>

                <div className="sop-list">
                    {paginatedSops.length > 0 ? (
                        paginatedSops.map(sop => (
                            <div key={sop.id} className="sop-card">
                                <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{sop.title}</h3>
                                <p style={{ color: 'var(--text-main)' }}>{sop.desc}</p>
                                <a href={`/assets/file/panduan-k3l/${sop.filename}.pdf`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '1rem', background: 'transparent', color: 'var(--secondary)', fontWeight: 'bold', fontSize: '0.95rem', textDecoration: 'none' }}>
                                    Baca Dokumen ➔
                                </a>
                            </div>
                        ))
                    ) : (
                        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                            Tidak ada dokumen yang sesuai dengan pencarian Anda.
                        </div>
                    )}
                </div>

                {totalPages > 1 && (
                    <div className="pagination" style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <button 
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            style={{ padding: '0.5rem 1rem', border: '1px solid #ddd', background: currentPage === 1 ? '#f9f9f9' : '#fff', color: currentPage === 1 ? '#aaa' : 'var(--text-main)', borderRadius: '6px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', fontWeight: '500', transition: 'all 0.2s' }}
                        >
                            Sebelumnya
                        </button>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                style={{ padding: '0.5rem 1rem', border: '1px solid', borderColor: currentPage === page ? 'var(--primary)' : '#ddd', background: currentPage === page ? 'var(--primary)' : '#fff', color: currentPage === page ? '#fff' : 'var(--text-main)', borderRadius: '6px', cursor: 'pointer', fontWeight: '500', transition: 'all 0.2s' }}
                            >
                                {page}
                            </button>
                        ))}

                        <button 
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            style={{ padding: '0.5rem 1rem', border: '1px solid #ddd', background: currentPage === totalPages ? '#f9f9f9' : '#fff', color: currentPage === totalPages ? '#aaa' : 'var(--text-main)', borderRadius: '6px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', fontWeight: '500', transition: 'all 0.2s' }}
                        >
                            Selanjutnya
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default SopDirectory;
