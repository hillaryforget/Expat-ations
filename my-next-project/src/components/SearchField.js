import { useState } from "react";

function SearchField() {
  const [query, setQuery] = useState();

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  return (
    <div>
      <input
        className="bg-sky-900 text-black border-2 border-rose-500 rounded-lg px-4 py-2"
        type="text"
        value={query}
        onChange={handleQueryChange}
      />
      <button className="px-4 py-2" onClick={handleQueryChange}>
        Search
      </button>
    </div>
  );
}

export default SearchField;
