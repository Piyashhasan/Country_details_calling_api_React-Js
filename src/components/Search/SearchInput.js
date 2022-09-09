import React, { useState } from "react";

const SearchInput = (props) => {
  const { onSearch } = props;
  //-------- declare state  --------
  const [input, setInput] = useState("");

  //-------- handler  --------
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(input);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search_input bg-muted text-muted"
        type="text"
        placeholder="search your country ....."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      
    </form>
  );
};

export default SearchInput;
