import { Country } from "../countries/countriesTypes";
interface CardDetailProps {
  country: Country;
}
export const CardDetails = ({ country }: CardDetailProps) => {
  // console.log("country", country);
  return (
    <div className="max-w-md mx-auto bg-white  p-6 ">
      <table className="w-full">
        <tbody className="divide-y divide-gray-300">
          {[
            { label: "Name", value: country?.name?.common || "-" },
            { label: "Region", value: country?.region || "-" },
            { label: "Continent", value: country?.continent || "-" },
            { label: "Capital", value: country?.capital || "-" },
            {
              label: "Area",
              value: country?.area
                ? `${country.area.toLocaleString()} km²`
                : "-",
            },
            {
              label: "Population",
              value: `${country?.population?.toLocaleString()}` || "-",
            },
          ].map((item, index) => (
            <tr key={index} className="grid grid-cols-2 py-2 m-2">
              <th className="text-gray-600 uppercase font-semibold text-sm">
                {item.label}:
              </th>
              <td className="text-gray-800 text-sm">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
