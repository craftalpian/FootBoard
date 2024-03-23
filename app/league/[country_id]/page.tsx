"use client";

import { useCompetitionSpecificData } from "@/app/_hook/use-competition-specific-data";
import { useRouter } from "next/navigation";
import { IoIosStats } from "react-icons/io";

const League = ({ params }: { params: { country_id: string } }) => {
  const { data: leagueData, isLoading } = useCompetitionSpecificData(
    "get_leagues",
    parseInt(params?.country_id)
  );

  const { push } = useRouter();

  return (
    <>
      {/* Statistic */}
      <div className="inline-flex justify-center gap-x-2">
        {!isLoading && (
          <div className="w-10">
            <img src={leagueData[0]?.country_logo} alt={`logo`} />
          </div>
        )}
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          {isLoading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            `Liga - ${leagueData[0]?.country_name || "Internasional"}`
          )}
        </h3>
      </div>

      <div className="mt-6 flex w-full overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
        <div className="w-full flex flex-col">
          <div className="overflow-x-auto">
            <table className="table table-xs" data-theme="light">
              <thead>
                <tr>
                  <th></th>
                  <th>Laga</th>
                  <th>Season</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {(leagueData || [])?.map(
                  (
                    { league_logo, league_name, league_season, league_id }: any,
                    index: number
                  ) => (
                    <tr key={index}>
                      <th>{String(index + 1)}</th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-8 h-8">
                              <img
                                src={league_logo}
                                alt={`${league_name} logo`}
                              />
                            </div>
                          </div>
                          <div>
                            <div>{league_name}</div>
                          </div>
                        </div>
                      </td>
                      <td>{league_season}</td>
                      <td>
                        <button
                          className="btn btn-ghost btn-sm bg-gray-600 text-white"
                          onClick={() => push(`/detail/${league_id}`)}
                        >
                          <IoIosStats />
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default League;
