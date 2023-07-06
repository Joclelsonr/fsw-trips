import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="bg-primaryWalterWhite p-5 flex flex-col items-center">
      <Image src="/Logo.png" width={133} height={23} alt="logo" />
      <p className="text-sm font-medium text-primaryDarker mt-1">
        Todos os direitos reservados
      </p>
    </div>
  );
}

export default Footer;
