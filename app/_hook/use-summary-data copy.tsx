"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useSummaryData = (additionalParam: string) => {
  return useQuery({
    queryKey: [`summary-${additionalParam}`],
    queryFn: () =>
      axios
        .get(`/football-api/${additionalParam}`)
        .then((res) => {
          return res?.data;
        })
        .catch((err) => {}),
  });
};
