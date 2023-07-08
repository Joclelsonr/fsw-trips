"use client";

import React from "react";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useForm, Controller } from "react-hook-form";
import { differenceInDays } from "date-fns";

interface TripReservationProps {
  tripId: string;
  tripStartDate: Date;
  tripEndDate: Date;
  tripMaxGuests: number;
  pricePerDay: any;
}

interface TripReservationForm {
  guests: number;
  startDate: Date | null;
  endDate: Date | null;
}

function TripReservation({
  tripId,
  tripStartDate,
  tripEndDate,
  tripMaxGuests,
  pricePerDay,
}: TripReservationProps) {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setError,
    formState: { errors },
  } = useForm<TripReservationForm>();

  const onSubmit = async (data: TripReservationForm) => {
    const response = await fetch("/api/trips", {
      method: "POST",
      body: JSON.stringify({
        startDate: data.startDate,
        endDate: data.endDate,
        tripId,
      }),
    });
    const res = await response.json();
    console.log(res);
    if (res?.error?.code === "Trip is already reserved") {
      setError("startDate", {
        type: "manual",
        message: "Essa data já está reservada",
      });
      return setError("endDate", {
        type: "manual",
        message: "Essa data já está reservada",
      });
    }

    if (res?.error?.code === "Invalid start date") {
      setError("startDate", {
        type: "manual",
        message: "Data de início inválida",
      });
    }
    if (res?.error?.code === "Invalid end date") {
      return setError("startDate", {
        type: "manual",
        message: "Data final inválida",
      });
    }
  };

  const startDate = watch("startDate");
  const endDate = watch("endDate");

  return (
    <div className="flex flex-col px-5">
      <div className="flex gap-4">
        <Controller
          name="startDate"
          rules={{
            required: {
              value: true,
              message: "Data de início é obrigatória",
            },
          }}
          control={control}
          render={({ field }: any) => (
            <DatePicker
              className="w-full"
              placeholderText="Data de Início"
              onChange={field.onChange}
              selected={field.value}
              error={!!errors.startDate}
              errorMessage={errors.startDate?.message}
              minDate={tripStartDate}
            />
          )}
        />
        <Controller
          name="endDate"
          rules={{
            required: {
              value: true,
              message: "Data final é obrigatória",
            },
          }}
          control={control}
          render={({ field }: any) => (
            <DatePicker
              className="w-full"
              placeholderText="Data Final"
              onChange={field.onChange}
              selected={field.value}
              error={!!errors.endDate}
              errorMessage={errors.endDate?.message}
              minDate={startDate ?? tripStartDate}
              maxDate={tripEndDate}
            />
          )}
        />
      </div>
      <Input
        {...register("guests", {
          required: {
            value: true,
            message: "Número de hóspedes é obrigatório",
          },
          max: {
            value: tripMaxGuests,
            message: `Número de hóspedes deve ser menor que ${tripMaxGuests}`,
          },
        })}
        error={!!errors.guests}
        errorMessage={errors.guests?.message}
        placeholder={`Número de hóspedes (max: ${tripMaxGuests})`}
        className="mt-4"
        type="number"
      />
      <div className="flex justify-between mt-3">
        <p className="font-medium text-sm text-primaryDarker">Total: </p>
        <p className="font-medium text-sm text-primaryDarker">
          {startDate && endDate
            ? `R$${differenceInDays(endDate, startDate) * pricePerDay}` ?? 1
            : "R$0"}
        </p>
      </div>

      <div className="pb-10 border-b border-b-primaryGrayLight w-full">
        <Button
          onClick={() => handleSubmit(onSubmit)()}
          className="mt-3 w-full"
        >
          Reservar agora
        </Button>
      </div>
    </div>
  );
}

export default TripReservation;
