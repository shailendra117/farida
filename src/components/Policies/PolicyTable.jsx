import { Check, X } from "lucide-react";
import { useEffect } from "react";
const PolicyTable = ({ heading, data }) => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="overflow-x-auto">

      <table className="w-full border border-gray-300 border-collapse">

        <thead>

          <tr className="bg-[#7B1D2A] text-sm text-white">
            <th colSpan={3} className="py-1 text-center">
              {heading}
            </th>
          </tr>

          <tr className="bg-gray-50">

            <th className="border  p-3 text-xs text-left w-1/4">
              RETURNS & EXCHANGE
            </th>

            <th className="border p-3 text-xs text-left">
              APPLICABLE CONDITION
            </th>

            <th className="border p-3 text-xs w-24 text-center">
              ACTION
            </th>

          </tr>

        </thead>

        <tbody>

          {data.map((item, index) => (

            <tr key={index}>

              <td className="border p-4 text-xs align-top font-medium">
                {item.title}
              </td>

              <td className="border  p-4 text-sm leading-7">
                {item.condition}
              </td>

              <td className="border text-center">

                {item.action ? (
                  <Check
                    className="mx-auto text-green-600"
                    size={28}
                  />
                ) : (
                  <X
                    className="mx-auto text-red-600"
                    size={28}
                  />
                )}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default PolicyTable;