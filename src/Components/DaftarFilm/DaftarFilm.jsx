import React, { useState } from "react";
import "./../DaftarFilm/DaftarFilm.css"; // File CSS terpisah untuk styling

const DaftarFilm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const films = [
    { id: 1, title: "Kuasa Gelap", rating: "D 17+", image: "assets/film1.jpg" },
    { id: 2, title: "Joker: Folie à Deux", rating: "R 21+", image: "assets/film2.jpg" },
    { id: 3, title: "The Subtance", rating: "R 21+", image: "assets/film3.jpg" },
    { id: 4, title: "Weekend In Taipei", rating: "D 17+", image: "assets/film4.jpg" },
    { id: 5, title: "Smile 2", rating: "D 17+", image: "assets/film5.jpg" },
    { id: 6, title: "Panda Plan", rating: "R 13+", image: "assets/film6.jpg" },
    { id: 7, title: "Home Sweet Loan", rating: "D 21+", image: "assets/film7.jpg" },
    { id: 8, title: "Sang Pengadil", rating: "D 17+", image: "assets/film8.jpg" },
    { id: 9, title: "Bolehkah Sekali Saja Ku Menangis", rating: "D 17+", image: "assets/film9.jpg" },
    { id: 10, title: "Avatar: The Way of Water", rating: "R 13+", image: "assets/film10.jpg" },
    { id: 11, title: "Doctor Strange: the Multiverse of Madness", rating: "R 13+", image: "assets/film11.jpeg" },
    { id: 12, title: "Kungfu Panda", rating: "R 13+", image: "assets/film12.jpg" },
    { id: 13, title: "Nobody", rating: "R 18+", image: "assets/film13.jpeg" },
    { id: 14, title: "Frozen 2", rating: "R 13+", image: "assets/film14.jpg" },
    { id: 15, title: "Spider Man: No Way Home", rating: "R 13+", image: "assets/film15.jpg" },
  ];

  const filteredFilms = films.filter(film =>
    film.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    
    <div className="daftar-film-container">
      <a href="./home">
        <div className="logo">
          <img src="/assets/LogoNama.png" alt="Logo" className="logo-image" />
        </div>
      </a>

      <h2>Daftar Film</h2>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search film"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <i className="fas fa-search search-icon"></i>
      </div>

      <div className="card-container">
        {filteredFilms.map(film => (
          <div key={film.id} className="film-item">
            <div className="card">
              <img src={film.image} alt={film.title} />
            </div>
            <h3>{film.title}</h3>
            <h4>{film.rating}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaftarFilm;