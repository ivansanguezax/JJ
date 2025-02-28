import React from 'react';
import { Card } from 'primereact/card';

const ResultCard = ({ guest }) => {
  return (
    <div className="animate-fadeIn">
      <Card className="shadow-md bg-white rounded-lg border border-[#5A7873]/10">
        <div className="flex flex-col items-center p-4">
          <h2 className="text-xl font-cormorant mb-4 text-[#333333]">
            {guest.name}
          </h2>
          <div className="flex flex-col items-center">
            <p className="text-[#5A7873] font-cormorant mb-2">
              Tu mesa es la número
            </p>
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#5A7873]/10 mb-2">
              <span className="text-3xl font-cormorant font-semibold text-[#5A7873]">
                {guest.table}
              </span>
            </div>
            <p className="text-sm text-[#5A7873]/70 font-cormorant text-center mt-4">
              Te esperamos con mucha alegría
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ResultCard;