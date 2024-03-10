"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCompetitionSpecificData = (
  additionalParam: string,
  countryId: number
) => {
  return useQuery({
    queryKey: [`summary-${additionalParam}-country-${countryId}`],
    queryFn: () =>
      axios
        .get(`/football-api/${additionalParam}/country/${countryId}`)
        .then((res) => {
          return res?.data;
        })
        .catch((err) => {}),
  });
};
