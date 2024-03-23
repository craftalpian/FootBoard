"use client";

import Players from "@/app/_components/players";
import { useTeamsData } from "@/app/_hook/use-teams-data";
import { useState } from "react";
import { IoMdFootball } from "react-icons/io";

const Detail = ({ params }: { params: { league_id: string } }) => {
  const { data: teamData, isLoading } = useTeamsData(
    "get_teams",
    parseInt(params?.league_id)
  );
  const [players, setPlayers] = useState<any>([]);

  return (
    <>
      {/* Statistic */}
      <div className="inline-flex justify-center gap-x-2">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          {isLoading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            `Daftar Tim`
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
                  <th>Team</th>
                  <th>Venue</th>
                  <th>Tahun Berdiri</th>
                  <th>Jumlah Pemain</th>
                  <th>Pelatih</th>
                  <th>Pemain</th>
                </tr>
              </thead>
              <tbody>
                {(teamData || [])?.map(
                  (
                    {
                      team_name,
                      team_founded,
                      venue,
                      team_badge,
                      players,
                      coaches,
                    }: any,
                    index: number
                  ) => (
                    <tr key={index}>
                      <th>{String(index + 1)}</th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-8 h-8">
                              <img src={team_badge} alt={`${team_name} logo`} />
                            </div>
                          </div>
                          <div>
                            <div>{team_name}</div>
                          </div>
                        </div>
                      </td>
                      <td>{venue?.venue_name || "-"}</td>
                      <td>{String(team_founded || "-")}</td>
                      <td>{String(players?.length || 0)}</td>
                      <td>{coaches[0]?.coach_name || "-"}</td>
                      <td>
                        <button
                          className="btn btn-ghost btn-sm bg-gray-600 text-white"
                          onClick={() => {
                            setPlayers(players);
                            (document as any)
                              .getElementById("my_modal_5")
                              .showModal();
                          }}
                        >
                          <IoMdFootball />
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
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box" data-theme="light">
          <Players data={players} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Detail;
