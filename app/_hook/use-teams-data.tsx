"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useTeamsData = (additionalParam: string, leagueId: number) => {
  return useQuery({
    queryKey: [`summary-${additionalParam}-teams-${leagueId}`],
    queryFn: () =>
      axios
        .get(`/football-api/${additionalParam}/teams/${leagueId}`)
        .then((res) => {
          return res?.data;
        })
        .catch((err) => {}),
  });
};
