"use client";

import TableComponents from "../_components/table";
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
              <TableComponents
                countryData={countryData}
                leaguesData={leaguesData}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
