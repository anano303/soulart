// components/SearchBar.tsx

"use client";
import { useState } from "react";

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="ძიება ხელოვნებაში..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <button>🔍</button>
    </div>
  );
};

export default SearchBar;
