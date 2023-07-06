import React from "react";
import { prisma } from "@/lib/prisma";
import TripDetailHeader from "./components/TripDetailHeader";
import TripReservation from "./components/TripReservation";

const getTripDetails = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  });
  return trip;
};

async function TripDetails({ params }: { params: { tripId: string } }) {
  const trip = await getTripDetails(params.tripId);
  console.log(trip);
  if (!trip) return null;

  return (
    <div className="container mx-auto">
      <TripDetailHeader trip={trip} />
      <TripReservation trip={trip} />
    </div>
  );
}

export default TripDetails;
