import React from 'react';

const EmergencyContactsModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const contacts = [
        { name: 'Poliklinik UDINUS (Kedaruratan Medis)', number: '024-3517261 ext 112' },
        { name: 'Satpam / Keamanan Gedung', number: '024-3517261 ext 115' },
        { name: 'Satgas K3L (Christiyan Wisnu)', number: '+62 812-2840-547' },
        { name: 'Pemadam Kebakaran (Umum)', number: '113' }
    ];

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <h2 style={{ marginBottom: '1rem', color: 'var(--danger)', fontSize: '1.4rem' }}>Panggilan Darurat</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                    Ketuk nomor di bawah ini untuk memanggil bantuan internal kampus segera.
                </p>
                <ul className="contact-list">
                    {contacts.map((contact, index) => (
                        <li key={index} className="contact-item">
                            <span className="contact-name">{contact.name}</span>
                            <a href={`tel:${contact.number.replace(/[^0-9+]/g, '')}`} className="contact-number">
                                {contact.number}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default EmergencyContactsModal;
