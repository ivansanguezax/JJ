import React, { useState } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { Button } from 'primereact/button';

const SearchBar = ({ onSearch, guestList, isDisabled = false }) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const search = (event) => {
    let _suggestions;
    
    if (!event.query.trim().length) {
      _suggestions = [];
    } else {
      _suggestions = guestList
        .map(guest => guest.name)
        .filter(name => 
          name.toLowerCase().includes(event.query.toLowerCase())
        );
    }

    setSuggestions(_suggestions);
  };

  const handleSubmit = () => {
    onSearch(value);
  };

  return (
    <div className="flex flex-col gap-4">
      <AutoComplete
        value={value}
        suggestions={suggestions}
        completeMethod={search}
        onChange={(e) => setValue(e.value)}
        placeholder="Escribe tu nombre"
        className="w-full"
        aria-label="Buscar invitado"
        inputClassName="w-full p-3 border border-[#5A7873]/30 rounded-lg"
        panelClassName="font-cormorant"
      />
<Button
  label="Buscar"
  onClick={handleSubmit}
  disabled={isDisabled}
  style={{ 
    backgroundColor: '#5A7873', 
    borderColor: '#5A7873', 
    color: 'white',
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.125rem'
  }}
  className="p-button-override p-3 w-full rounded-lg"
/>
    </div>
  );
};

export default SearchBar;