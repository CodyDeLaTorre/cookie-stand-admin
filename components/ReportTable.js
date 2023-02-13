import { hours } from '../data.js';
const hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36];

export default function ReportTable(props) {
  return props.locations.length > 0 ? (
    <table className='w-1/2 mx-auto my-4'>
      <thead>
        <tr>
          <th className='border border-gray-700'>Location</th>
          {hours.map((hour) => {
            return (
              <th className='border border-gray-700' key={hour.id}>{hour}</th>
            )
          })}
          <th className='border border-gray-700'>Totals</th>
        </tr>
      </thead>
      <tbody>
          {props.locations.map(location => (
            <tr className='pl-2 border border-gray-700' key={location.id}>{location.name}
            {hourly_sales.map(sale => (
              <td className='pl-2 border border-gray-700' key={sale.id}>{sale}</td>
            ))}
              <td className="pl-2 border border-gray-700">{hourly_sales.reduce((num, sum) => num + sum, 0)}</td>
            </tr>
          ))}
      </tbody>
    </table>
  ) : (
    <div className='mx-auto text-center'>
      <h2 className='text-center p-6 text-3xl'>No Cookie Stands Available</h2>
    </div>
  );
}
