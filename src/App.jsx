import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import CafeList from './components/CafeList/CafeList';
import Searchbar from './components/Searchbar/Searchbar';
import cafedata from './cafedata.json';

function App() {
  const [cafes, setCafes] = useState(cafedata);
  const [keyword, setKeyword] = useState("");

  React.useEffect(() => {
    const url = "https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes";
    const params = keyword !== "" ? `?title=${keyword}` : "";
    fetch(url + params)
      .then(response => response.json())
      .then(data => {
        setCafes(data);
      });
  }, [keyword]);

  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
  };

  const filteredCafes = cafes.filter(cafe =>
    cafe.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="app-frame">
      <Navbar setKeyword={setKeyword} />
      <Searchbar keyword={keyword} onSearchChange={handleSearchChange} />
      <div className="app-body">
        <Sidebar setCafes={setCafes} />
        <CafeList cafes={filteredCafes} />
      </div>
    </div>
  );
}

export default App;
