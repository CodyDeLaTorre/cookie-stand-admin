import { useAuth } from "@/contexts/auth";
import useResource from "@/hooks/useResource";

export default function CookieStandForm() {

  const { user } = useAuth();
  const { createResource } = useResource();

  function handleSubmit(event) {
    event.preventDefault();
    const info = {
      location: event.target.location.value,
      minimum_customers_per_hour: parseInt(event.target.minimum.value),
      maximum_customers_per_hour: parseInt(event.target.maximum.value),
      average_cookies_per_sale: parseFloat(event.target.average.value),
      owner: user.id,
    };
    createResource(info);

  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2 p-2 mx-auto my-4 bg-gray-300 border border-black rounded-2xl shadow-gray-500 shadow-md font-serif">
      <fieldset className="">
        <section className="flex py-2">
          <label htmlFor="location" className=" text-bold block px-2">ADD LOCATION</label>
          <input className="px-3 text-center block border border-gray-500 shadow-md rounded-md" placeholder='location' name='location' />
        </section>
        <section className="flex justify-between py-2">
          <div>
            <label htmlFor="minimum" className="block px-2 text-center">MINIMUM CUSTOMERS PER HOUR</label>
            <input className="px-3 text-center border border-gray-500 shadow-md rounded-md" placeholder='minimum' name='minimum' />
          </div>
          <div>
            <label htmlFor="maximum" className="block px-2 text-center">MAXIMUM CUSTOMERS PER HOUR</label>
            <input className="px-3 text-center border border-gray-500 shadow-md rounded-md" placeholder='maximum' name='maximum' />
          </div>
          <div>
            <label htmlFor="average" className="block px-2 text-center">AVERAGE COOKIES PER SALE</label>
            <input className="px-3 text-center border border-gray-500 shadow-md rounded-md" placeholder='average' name='average' />
          </div>
          <button className="px-9 py-4 bg-gray-500 text-black text-xl rounded-lg border border-black shadow-gray-500  hover:bg-gray-200 hover:rounded-2xl transition-all duration-200 cursor-pointer">Create</button>
        </section>
      </fieldset>
    </form>
  );
}
