"use client";

import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// const geoUrl =
//   "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function MapChart() {
  return (
    <ComposableMap
      projectionConfig={{
        scale: 100,
      }}
      // height={300}
      className="bg-yellow-100 flex"
    >
      <Geographies geography={"./features.json"}>
        {({ geographies }: any) =>
          geographies.map((geo: any) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
}
