"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Prisma } from "@prisma/client";
import UserReservationItem from "./components/UserReservationItem";

function Mytrips() {
  const [reservations, setReservations] = useState<
    Prisma.TripReservationGetPayload<{ include: { trip: true } }>[]
  >([]);
  const { status, data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      return router.push("/login");
    }

    fetchReservation();
  }, [status]);

  async function fetchReservation() {
    const response = await fetch(`/api/user/${(data?.user as any).id}/trips`);
    const json = await response.json();
    setReservations(json);
  }

  return (
    <div className=" container mx-auto p-5">
      <h1 className=" font-semibold text-primaryDarker text-xl">
        Minhas Viagens
      </h1>
      {reservations?.map((reservation) => (
        <UserReservationItem key={reservation.id} reservation={reservation} />
      ))}
    </div>
  );
}

export default Mytrips;
