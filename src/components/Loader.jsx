import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [phrase, setPhrase] = useState("");
  
  const phrases = [
    "Preparando la bienvenida...",
    "Estamos felices de contar contigo",
    "El amor se celebra juntos",
    "Gracias por acompañarnos en este día especial",
    "Los mejores momentos se comparten",
    "La felicidad es mejor cuando es compartida",
    "Contando los momentos para verte"
  ];
  
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setPhrase(phrases[randomIndex]);
  }, []);
  
  return (
    <div className="min-h-screen bg-[#F6F6F2] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <img 
          src="https://res.cloudinary.com/dfgjenml4/image/upload/v1740700464/J_J_PDF-removebg-preview_u96o3i.png" 
          alt="Javi y Juampa" 
          className="w-48 animate-pulse"
        />
        <p className="mt-8 font-cormorant text-[#5A7873] text-xl text-center px-6 animate-fadeIn">
          {phrase}
        </p>
      </div>
    </div>
  );
};

export default Loader;