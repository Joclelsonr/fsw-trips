import React from "react";

import Image from "next/image";

function QuickSearch() {
  return (
    <div className="container mx-auto px-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-primaryGrayLight"></div>
        <h2 className="px-5 font-medium text-primaryGray whitespace-nowrap">
          Tente pesquisar por
        </h2>
        <div className="w-full h-[1px] bg-primaryGrayLight"></div>
      </div>

      <div className="flex w-full justify-around mt-5">
        <div className="flex flex-col items-center gap-1">
          <Image width={30} height={30} src="/Vector.png" alt="hotel" />
          <p className="text-sm text-primaryGray">Hotel</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image width={30} height={30} src="/Vector.png" alt="hotel" />
          <p className="text-sm text-primaryGray">Fazenda</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image width={30} height={30} src="/Vector.png" alt="hotel" />
          <p className="text-sm text-primaryGray">chalé</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image width={30} height={30} src="/Vector.png" alt="hotel" />
          <p className="text-sm text-primaryGray">Pousada</p>
        </div>
      </div>
    </div>
  );
}

export default QuickSearch;
