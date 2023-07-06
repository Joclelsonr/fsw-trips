import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

interface TripHighlightsProps {
  highlights: string[];
}

function TripHighlights({ highlights }: TripHighlightsProps) {
  return (
    <div className="flex flex-col p-5">
      <h2 className="font-semibold text-primaryDarker mb-2">Destaques</h2>

      <div className="flex flex-wrap gap-y-1">
        {highlights.map((highlight) => (
          <div
            key={highlight}
            className="flex items-center text-primaryDarker gap-2 w-1/2"
          >
            <AiOutlineCheckCircle className="mr-2 text-primary" />
            <p className="text-primaryGray text-xs">{highlight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TripHighlights;
