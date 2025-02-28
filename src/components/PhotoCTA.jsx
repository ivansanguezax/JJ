import React from 'react';
import { Card } from 'primereact/card';

const PhotoCTA = () => {
  const handleOpenAlbum = () => {
    window.open('https://photos.app.goo.gl/DB3SshzA663zAWFZ6', '_blank');
  };

  return (
    <Card className="shadow-md bg-white rounded-lg border border-[#5A7873]/10 overflow-hidden">
      <div className="flex flex-col items-center p-4">
        <h3 className="text-xl font-cormorant mb-3 text-[#333333]">
          Comparte tus fotos
        </h3>
        <p className="text-center text-[#5A7873] font-cormorant mb-5">
          Ayúdanos a crear recuerdos inolvidables
        </p>
        <button
          onClick={handleOpenAlbum}
          className="px-6 py-3 bg-white border border-[#5A7873] text-[#5A7873] rounded-md font-cormorant hover:bg-[#5A7873] hover:text-white transition-all duration-300 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
          Subir mis fotos al álbum
        </button>
      </div>
    </Card>
  );
};

export default PhotoCTA;