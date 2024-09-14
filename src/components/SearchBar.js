import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMicrophone, faImage } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';  

const SearchBar = ({ data }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = data.filter((item) => {
        const name = item.name || "";  
        const capital = item.capital || "";  
        return (
          name.toLowerCase().includes(query.toLowerCase()) ||
          capital.toLowerCase().includes(query.toLowerCase())
        );
      });
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [query, data]);

  return (
    <div className="search-container">
      <div className="search-bar-wrapper">
        <FontAwesomeIcon icon={faSearch} className="icon search-icon" />
        <input
          type="text"
          className="search-bar"
          placeholder="Search by country or capital"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <FontAwesomeIcon icon={faMicrophone} className="icon mic-icon" onClick={() => console.log("Microphone clicked!")} />
<FontAwesomeIcon icon={faImage} className="icon image-icon" onClick={() => console.log("Image clicked!")} />

      </div>
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((item, index) => (
            <li key={index} className="suggestion-item">
              {item.name} - {item.capital}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
