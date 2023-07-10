import React from "react";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import { Trip } from "@prisma/client";

interface TripDetailHeaderProps {
  trip: Trip;
}

function TripDetailHeader({ trip }: TripDetailHeaderProps) {
  return (
    <div className="flex flex-col">
      <div className="relative h-[300px] w-full">
        <Image
          src={trip.coverImage!}
          alt={trip.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="flex flex-col p-5">
        <h1 className="text-xl font-semibold text-primaryDarker">
          {trip.name}
        </h1>

        <div className="flex items-center gap-1 my-1">
          <ReactCountryFlag countryCode={trip.countryCode} svg />
          <p className="text-primaryGray text-xs">{trip.location}</p>
        </div>

        <p className="text-xs text-grayPrimary">
          <span className="text-primary font-medium">
            R${trip.pricePerDay.toString()}
          </span>{" "}
          por dia
        </p>
      </div>
    </div>
  );
}

export default TripDetailHeader;
