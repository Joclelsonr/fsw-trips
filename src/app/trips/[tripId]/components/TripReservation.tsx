"use client";

import React from "react";
import DatePicker from "@/components/DatePicker";
import { Trip } from "@prisma/client";
import Input from "@/components/Input";
import Button from "@/components/Button";

interface TripReservationProps {
  trip: Trip;
}

function TripReservation({ trip }: TripReservationProps) {
  return (
    <div className="flex flex-col px-5">
      <div className="flex gap-4">
        <DatePicker
          className="w-full"
          placeholderText="Data de Início"
          onChange={() => {}}
        />
        <DatePicker
          className="w-full"
          placeholderText="Data Final"
          onChange={() => {}}
        />
      </div>
      <Input
        placeholder={`Número de hóspedes (max: ${trip.maxGuests})`}
        className="mt-4"
      />
      <div className="flex justify-between mt-3">
        <p className="font-medium text-sm text-primaryDarker">Total: </p>
        <p className="font-medium text-sm text-primaryDarker">R$2500</p>
      </div>

      <div className="pb-10 border-b border-b-primaryGrayLight w-full">
        <Button className="mt-3 w-full">Reservar agora</Button>
      </div>
    </div>
  );
}

export default TripReservation;
