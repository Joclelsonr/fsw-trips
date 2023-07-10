"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Prisma } from "@prisma/client";
import UserReservationItem from "./components/UserReservationItem";
import Link from "next/link";
import Button from "@/components/Button";

function Mytrips() {
  const [reservations, setReservations] = useState<
    Prisma.TripReservetionGetPayload<{ include: { trip: true } }>[]
  >([]);
  const { status, data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      return router.push("/");
    }

    fetchReservation();
  }, [status]);

  async function fetchReservation() {
    const response = await fetch(`/api/user/${(data?.user as any)?.id}/trips`);
    const json = await response.json();
    setReservations(json);
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="font-semibold text-primaryDarker text-xl lg:mb-5">
        Minhas Viagens
      </h1>
      {reservations.length > 0 ? (
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-14">
          {reservations?.map((reservation) => (
            <UserReservationItem
              key={reservation.id}
              reservation={reservation}
              fetchReservations={fetchReservation}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col lg:max-w-[500px]">
          <p className="mt-2 font-medium text-sm text-primaryDarker">
            Você ainda não tem nenhuma reserva! =(
          </p>

          <Link href="/">
            <Button className="w-full mt-2 lg:mt-5">Fazer reserva</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Mytrips;
