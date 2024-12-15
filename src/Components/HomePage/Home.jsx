import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';



const Home = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [films, setFilms] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const filmRowRef = useRef(null);

    useEffect(() => {
        // Fetch data or set films here (dummy data for example)
        const fetchFilms = async () => {
            const data = [
                { id: 1, title: 'Film 1', image: './assets/film1.jpg' },
                { id: 2, title: 'Film 2', image: './assets/film2.jpg' },
                { id: 3, title: 'Film 3', image: './assets/film3.jpg' },
                { id: 4, title: 'Film 4', image: './assets/film4.jpg' },
                { id: 5, title: 'Film 5', image: './assets/film5.jpg' },
                { id: 6, title: 'Film 6', image: './assets/film6.jpg' },
                { id: 7, title: 'Film 7', image: './assets/film7.jpg' },
                { id: 8, title: 'Film 8', image: './assets/film8.jpg' },
                { id: 9, title: 'Film 9', image: './assets/film9.jpg' },
                { id: 10, title: 'Film 10', image: './assets/film10.jpg' }
            ];
            setFilms(data);
        };

        fetchFilms();
    }, []);

    const toggleNav = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const scrollFilmRow = (direction) => {
        const scrollAmount = 600;
        filmRowRef.current.scrollBy({
            left: direction === 'next' ? scrollAmount : -scrollAmount,
            behavior: 'smooth'
        });
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const openLogoutModal = () => setShowLogoutModal(true);

    const filteredFilms = films.filter(film =>
        film.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const closeLogoutModal = () => {
        const modalOverlay = document.querySelector('.modal-overlay');
        modalOverlay.classList.add('fade-out');
        setTimeout(() => {
            setShowLogoutModal(false);
            modalOverlay.classList.remove('fade-out');
        }, 500); // Waktu sesuai durasi animasi
    };

    return (
        <div>
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <Link to="/home">Home</Link>
                <Link to="/profil">Profil</Link>
                <Link to="/daftarFilm">Daftar Film</Link>
                <div className="sidebar-logout">
                    <a href="#" onClick={openLogoutModal} className="logout-link">
                        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                    </a>
                </div>
            </div>

            <div className={`page-overlay ${sidebarOpen ? 'show' : ''}`} onClick={toggleNav}></div>

            <header className="fixed-top" id="navbar">
                <nav className="container d-flex justify-content-between align-items-center py-3">
                    <div className="navbar-logo d-flex align-items-center">
                        <FontAwesomeIcon icon={faBars} onClick={toggleNav} className="menu-icon" />
                        <img src="/assets/LogoNama.png" alt="Logo" className="logo-image" />
                    </div>
                    <div className="search-container d-flex align-items-center">
                        <input
                            type="text"
                            className="search-bar"
                            placeholder="Search film"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    </div>
                </nav>
            </header>

            <main className="mt-5 pt-5">
                <section className="container mt-4">
                    <h2 className="sedang-tayang">Sedang Tayang</h2>
                    <div className="slider-container">
                        <button className="nav-btn left" onClick={() => scrollFilmRow('prev')}>&lt;</button>
                        <div className="row" ref={filmRowRef}>
                            {filteredFilms.map((film) => (
                                <div className="col-4 col-md-2" key={film.id}>
                                    <Link to={`/film/${film.id}`}>
                                        <img src={film.image} className="gambarfilm" alt={film.title} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <button className="nav-btn right" onClick={() => scrollFilmRow('next')}>&gt;</button>
                    </div>
                </section>

                <section className="container mt-4">
                    <h2 className="sedang-tayang">Trending</h2>
                    <div className="row justify-content-center mt-3">
                        {filteredFilms.slice(0, 3).map((film) => (
                            <div className="col-12 col-md-4" key={film.id}>
                                <div className="card text-center" style={{ backgroundColor: 'transparent' }}>
                                    <img src={film.image} className="card-img-top gambarfilm" alt={film.title} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

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

            {showLogoutModal && (
                <div className="modal-overlay">
                    <div className="modal-container">
                        <h4>Apakah Anda yakin ingin Logout?</h4>
                        <div className="modal-buttons">
                            <button
                                onClick={() => {
                                    closeLogoutModal();
                                    window.location.href = "/login";
                                }}
                                className="btn btn-primary"
                            >
                                Ya
                            </button>
                            <button onClick={closeLogoutModal} className="btn btn-secondary">
                                Tidak
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
