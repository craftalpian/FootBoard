import { GrSearch } from "react-icons/gr";
import { countLeague } from "../_utils";

const TableComponents = ({ countryData, leaguesData }: any) => (
  <table className="table" data-theme="light">
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
      {(countryData || [])?.map(
        ({ country_logo, country_name, country_id }: any, index: number) => (
          <tr>
            <th>
              <label>{String(index + 1)}</label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={country_logo} alt={`${country_name} logo`} />
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
);

export default TableComponents;
