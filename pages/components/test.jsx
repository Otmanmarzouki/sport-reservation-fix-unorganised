export default function Test() {
  return (
    <div className="flex  w-full justify-center ">
      <div className="flex flex-col space-y-8">
        <div class="flex  lg:flex-row flex-col ">
          <div class="w-full  px-3 mb-6 md:mb-0">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Vorname"
            />
          </div>
          <div class="w-full  px-3 mb-6 md:mb-0">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Nachname"
            />
          </div>
          <div class="w-full  px-3 mb-6 md:mb-0">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Geburtsdatum"
            />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
