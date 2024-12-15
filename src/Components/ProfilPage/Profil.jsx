import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'; // Import ikon media sosial
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import "./Profil.css"; // Mengimpor file CSS terpisah

const Profil = () => {
    return (
        <div className="profile-page">
            {/* Logo */}
            <div className="logo">
                <img src="/assets/LogoNama.png" alt="Logo" className="logo-image" />
            </div>

            {/* Title */}
            <h1>Profile Account</h1>

            {/* Profile Container */}
            <div className="profile-container">
                {/* Profile Header */}
                <div className="profile-header">
                    <div className="header-content">
                        <img
                            src="/assets/Tom lost his hand.png"
                            alt="Profile Image"
                            className="profile-image"
                        />
                        <h2>Tom Jasper</h2>
                    </div>
                </div>

                {/* Account Details */}
                <div className="account-details">
                    <h3>Account Details</h3>

                    {/* Email Address */}
                    <div className="detail-item">
                        <label>Email Address</label>
                        <div className="email">
                            <span>tomlosthishand@gmail.com</span>
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div className="detail-item">
                        <label>Phone Number</label>
                        <div className="phone">
                            <span>+62 813 4335 9702</span>
                        </div>
                    </div>

                    {/* Edit Profile Button */}
                    <a href="EditProfil.html" className="edit-button">
                        Edit Profil
                    </a>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer bg-dark text-white py-4 mt-5">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="copyright text-center">
                        <p>&copy; 2024 Layar Atma dan semua perusahaan terkait. Hak cipta dilindungi undang-undang.</p>
                    </div>
                    <div className="social-icons text-center">
                        <p>Mau tahu lebih banyak tentang kami?</p>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="fa-2x text-white mx-2" />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} className="fa-2x text-white mx-2" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Profil;
