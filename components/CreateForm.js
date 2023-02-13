export default function CreateForm(props) {
  return(
  <form className='w-3/4 p-2 mx-auto my-4 bg-gray-400 rounded-md' onSubmit={props.locationHandler}>
    <h2 className='text-3xl text-center text-gray-50'>Create Cookie Stand</h2>
    <div className="flex justify-around p-3 my-4">
      <label for="location" className="p-1">Location</label>
      <input name="location" id="location" className='flex-auto pl-1' />
    </div>
    <div className="flex justify-between p-3 my-4">
      <div className="bg-gray-200 p-2 rounded">
        <label className="block" for="minCust">Minimum Customers per Hour</label>
        <input className="block" type="number" name="minCust" id="minCust" />
      </div>
      <div className="bg-gray-200 p-2 rounded">
        <label className="block" for="maxCust">Maximum Customers per Hour</label>
        <input className="block" type="number" name="maxCust" id="maxCust" />
      </div>
      <div className="bg-gray-200 p-2 rounded">
        <label className="block" for='avgSales'>Average Cookies per Sale</label>
        <input className="block" type="number" name="avgSales" id="avgSales" />
      </div>
      <button className='px-7 py-1 bg-gray-500 text-gray-50 rounded'>Create</button>
    </div>
  </form>
  )
}
