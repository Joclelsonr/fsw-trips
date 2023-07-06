"use client";

import React from "react";
import TripSearch from "./components/TripSearch";
import QuickSearch from "./components/QuickSearch";

export default function Home() {
  return (
    <>
      <TripSearch />
      <QuickSearch />
    </>
  );
}
