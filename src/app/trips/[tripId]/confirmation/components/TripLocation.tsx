import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

interface TripLocationProps {
  location: string;
  locationDescription: string;
}

function TripLocation({ location, locationDescription }: TripLocationProps) {
  return (
    <div className="p-5">
      <h2 className="font-semibold text-primaryDarker mb-5">Localização</h2>
      <Image
        src="/Map-mobile.png"
        width={353}
        height={246}
        alt={location}
        className="rounded-lg shadow-md"
      />
      <h3 className="text-primaryDarker text-sm font-semibold mt-3 lg:text-base lg:mt-5">
        {location}
      </h3>
      <p className="text-xs text-primaryDarker mt-2 leading-5 lg:text-sm lg:mt-4">
        {locationDescription}
      </p>
      <Button variant="outlined" className="w-full mt-5">
        Ver no Google Maps
      </Button>
    </div>
  );
}

export default TripLocation;
