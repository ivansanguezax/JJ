import React from 'react';
import { Card } from 'primereact/card';

const ErrorCard = () => {
  return (
    <div className="animate-fadeIn">
      <Card className="shadow-md bg-white rounded-lg border border-[#5A7873]/10">
        <div className="flex flex-col items-center p-4">
          <h2 className="text-xl font-cormorant mb-2 text-[#333333]">
            No encontramos tu nombre
          </h2>
          <p className="text-[#5A7873] font-cormorant text-center mb-4">
            Avisaremos a los novios para que te asignen una mesa.
          </p>
          <div className="text-sm text-[#5A7873]/70 font-cormorant text-center mt-2">
            Si crees que esto es un error, por favor intenta de nuevo.
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ErrorCard;