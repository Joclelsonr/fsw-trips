"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { TripReservetion } from "@prisma/client";

function Mytrips() {
  const [reservations, setReservations] = useState<TripReservetion[]>([]);
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

  console.log(reservations);

  return (
    <div>
      <h1>Mytrips</h1>
    </div>
  );
}

export default Mytrips;
