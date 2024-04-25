import React from "react";

const CompagneDetails = () => {
  return (
    <div className="border-[1px] border-gray-300">
      <div className="flex bg-gray-200 p-2 text-gray-600 border-b-[1px] border-gray-300">
        Détails de la campagne
      </div>
      <div className="w-full bg-white">
        <form>
          <div className="flex flex-col gap-2">
            <div className="text-gray-600 text-sm pt-2 px-6">Nom de la Campagne</div>
            <div className="flex flex-row justify-between mx-4">
              <input
                className="w-2/5 appearance-none border-[1px] py-2 px-4 text-gray-700 rounded"
                id="nom-campagne"
                type="text"
                placeholder="Nom de la Campagne"
              />
              <select className="w-2/5 rounded-[4px] border border-blue-gray-200 bg-transparent px-3 py-2.5 text-sm font-normal text-blue-gray-700 outline-none">
                <option value="brazil">Activités</option>
                <option value="bucharest">one</option>
                <option value="london">two</option>
              </select>
            </div>
            <div className="text-gray-600 text-sm pt-2 px-6">Message</div>
            <div className="pb-4 mx-4">
              <textarea
                className="peer w-full resize-none rounded-[7px] border border-blue-gray-200 bg-white px-3 py-2.5 outline-none text-sm font-normal text-blue-gray-700"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="flex w-full justify-center pb-4">
              <button className="bg-sky-600 text-white w-1/2 p-1 rounded-md" type="submit">
                Envoyer
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CompagneDetails;
