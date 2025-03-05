import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = async () => {
    const apiKey = "";

    const moviesResponse = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=it-IT&query=${query}`
    );

    const tvResponse = await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=it-IT&query=${query}`
    );

    setResults([...moviesResponse.data.results, ...tvResponse.data.results]);
  };

  const getFlag = (lang) => {
    const code = lang === "en" ? "us" : lang;
    return `https://flagcdn.com/w40/${code}.png`;
  };

  const getStars = (vote) => {
    const stars = Math.ceil(vote / 2);
    return "⭐".repeat(stars) + "☆".repeat(5 - stars);
  };

  return (
    <div className="app">
      <header>
        <h1>BoolFlix</h1>
        <div className="search-bar">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cerca un film o una serie..."
          />
          <button onClick={search}>🔍</button>
        </div>
      </header>

      <div className="results">
        {results.map((item) => (
          <div className="card" key={item.id}>
            {item.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                alt={item.title || item.name}
              />
            )}
            <div className="info">
              <h3>{item.title || item.name}</h3>
              <img src={getFlag(item.original_language)} alt={item.original_language} />
              <p>{getStars(item.vote_average)}</p>
              <p>{item.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
