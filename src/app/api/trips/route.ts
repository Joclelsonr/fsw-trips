import { prisma } from "@/lib/prisma";
import { differenceInDays, isBefore } from "date-fns";
import { NextResponse } from "next/server";

export async function GET() {
  const trips = await prisma.trip.findMany();

  return new NextResponse(JSON.stringify(trips), { status: 200 });
}

export async function POST(request: Request) {
  const req = await request.json();

  const trip = await prisma.trip.findUnique({
    where: {
      id: req.tripId,
    },
  });

  if (!trip) {
    return new NextResponse(
      JSON.stringify({
        error: {
          code: "Trip not found",
        },
      })
    );
  }

  if (isBefore(new Date(req.startDate), new Date(trip.startDate))) {
    return new NextResponse(
      JSON.stringify({
        error: {
          code: "Invalid start date",
        },
      }),
      {
        status: 400,
      }
    );
  }

  if (isBefore(new Date(trip.endDate), new Date(req.endDate))) {
    return new NextResponse(
      JSON.stringify({
        error: {
          code: "Invalid end date",
        },
      }),
      {
        status: 400,
      }
    );
  }

  const reservation = await prisma.tripReservetion.findMany({
    where: {
      tripId: req.tripId,
      startDate: {
        lte: req.startDate,
      },
      endDate: {
        gte: req.endDate,
      },
    },
  });
  if (reservation.length > 0) {
    return new NextResponse(
      JSON.stringify({
        error: {
          code: "Trip already reserved",
        },
      }),
      { status: 400 }
    );
  }

  return new NextResponse(
    JSON.stringify({
      success: true,
      trip,
      totalPrice:
        differenceInDays(new Date(req.endDate), new Date(req.startDate)) *
        Number(trip.pricePerDay),
    }),
    {
      status: 200,
    }
  );
}
