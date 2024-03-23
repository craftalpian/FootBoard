"use client";

const Players = ({ data }: { data: any[] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {(data || [])?.map(
            ({
              player_id,
              player_name,
              player_goals,
              player_injured,
              player_yellow_cards,
              player_red_cards,
            }: any) => (
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{player_name}</div>
                      <div className="text-sm opacity-50">{player_id}</div>
                    </div>
                  </div>
                </td>
                <td className="space-x-2">
                  <span className="badge badge-ghost badge-base bg-green-600 text-white">
                    {String(player_goals || "0")}
                  </span>
                  <span className="badge badge-ghost badge-base bg-red-600 text-white">
                    {String(player_red_cards || "0")}
                  </span>
                  <span className="badge badge-ghost badge-base bg-yellow-600 text-white">
                    {String(player_yellow_cards || "0")}
                  </span>
                  <span className="badge badge-ghost badge-base bg-gray-600 text-white">
                    {String(player_injured || "0")}
                  </span>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Players;
