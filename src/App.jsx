import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ResultCard from './components/ResultCard';
import ErrorCard from './components/ErrorCard';
import Loader from './components/Loader';
import PhotoCTA from './components/PhotoCTA';
import guestsData from './utils/names.json';
import './App.css';

const App = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Función para aplanar el objeto JSON de invitados
  const flattenGuestList = () => {
    const flattened = [];
    for (const table in guestsData) {
      guestsData[table].forEach(name => {
        flattened.push({
          name: name,
          table: table
        });
      });
    }
    return flattened;
  };

  const flattenedGuests = flattenGuestList();

  useEffect(() => {
    // Simular carga inicial
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (name) => {
    if (!name.trim()) return;
    
    setIsLoading(true);
    setSearchResult(null);
    setNotFound(false);
    
    // Simular tiempo de búsqueda
    setTimeout(() => {
      const guest = flattenedGuests.find(guest => guest.name.toLowerCase() === name.toLowerCase());
      
      if (guest) {
        setSearchResult(guest);
        setNotFound(false);
      } else {
        setSearchResult(null);
        setNotFound(true);
      }
      
      setIsLoading(false);
    }, 800);
  };

  if (isInitialLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-[#F6F6F2] flex flex-col items-center justify-start pt-6 px-4">
      <div className="w-full max-w-lg">
        <div className="flex flex-col items-center mb-8">
          <img 
            src="https://res.cloudinary.com/dfgjenml4/image/upload/v1740700464/J_J_PDF-removebg-preview_u96o3i.png" 
            alt="Javi y Juampa" 
            className="w-40 mb-4"
          />
        </div>
        
        <div className="mb-10">
          <p className="text-center text-2xl mb-8 font-cormorant text-[#5A7873] font-medium">
            Encuentra tu mesa
          </p>
          <SearchBar onSearch={handleSearch} guestList={flattenedGuests} isDisabled={isLoading} />
        </div>
        
        {isLoading ? (
          <div className="animate-fadeIn">
            <div className="flex justify-center">
              <div className="loader-small"></div>
            </div>
          </div>
        ) : (
          <>
            {searchResult && <ResultCard guest={searchResult} />}
            {notFound && <ErrorCard />}
          </>
        )}
        
        <div className="mt-12">
          <PhotoCTA />
        </div>
      </div>
    </div>
  );
};

export default App;