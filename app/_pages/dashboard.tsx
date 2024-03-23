"use client";

import { useCompetitionSpecificData } from "../_hook/use-competition-specific-data";
import { useSummaryData } from "../_hook/use-summary-data";
import { countLeague } from "../_utils";
import { GrSearch } from "react-icons/gr";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

const Dashboard = () => {
  const { data: countryData } = useSummaryData("get_countries");
  const { data: leaguesData } = useSummaryData("get_leagues");
  const { data: indonesiaLeaguesData } = useCompetitionSpecificData(
    "get_leagues",
    59 // Indonesia country id
  );

  const stats = [
    { name: "Total Negara", stat: countryData?.length ?? 0 },
    { name: "Total Laga", stat: leaguesData?.length ?? 0 },
    { name: "Laga Indonesia", stat: indonesiaLeaguesData?.length ?? 0 },
  ];

  return (
    <>
      {/* Statistic */}
      <div>
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Ringkasan
        </h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
            >
              <dt className="truncate text-sm font-medium text-gray-500">
                {item.name}
              </dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                {item.stat > 0 ? (
                  item.stat
                ) : (
                  <span className="loading loading-spinner loading-lg"></span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-6 flex w-full overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
        <div className="w-full flex flex-col">
          <div className="overflow-x-auto">
            <div className="overflow-x-auto">
              <table className="table" data-theme="light">
                {/* head */}
                <thead>
                  <tr>
                    <th>
                      <label>#</label>
                    </th>
                    <th>Negara</th>
                    <th>Laga</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {(countryData || [])?.map(
                    (
                      { country_logo, country_name, country_id }: any,
                      index: number
                    ) => (
                      <tr>
                        <th>
                          <label>{String(index + 1)}</label>
                        </th>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src={country_logo}
                                  alt={`${country_name} logo`}
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">{country_name}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-ghost badge-xl">
                            {`${countLeague({
                              country_id,
                              data: leaguesData,
                            })} laga`}
                          </span>
                        </td>
                        <th>
                          <button className="btn btn-ghost btn-sm bg-gray-600 text-white">
                            <GrSearch />
                          </button>
                        </th>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
