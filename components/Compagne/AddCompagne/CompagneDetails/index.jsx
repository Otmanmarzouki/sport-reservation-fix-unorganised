import React from "react";

const CompagneDetails = () => {
  return (
    <div className="border-[1px] border-gray-300">
      <div className="flex bg-gray-200 p-2 text-gray-600 border-b-[1px] border-gray-300">
        Détails de la campagne
      </div>
      <div className="w-full bg-white">
        <div className="flex flex-col gap-4">
          <div className="text-gray-500 text-sm mt-4 mx-6 ">Nom de la Campagne</div>
          <div className="flex lg:flex-row  flex-col gap-4 mx-4">
            <input
              className="lg:w-2/5 appearance-none border-[1px] py-2 px-4 lg:text-sm text-xs text-gray-700 rounded"
              id="nom-campagne"
              type="text"
              placeholder="Nom de la Campagne"
            />
            <select className="lg:w-2/5  border border-blue-gray-200  py-2 px-4  lg:text-sm text-xs bg-transparent  outline-none rounded">
              <option value="Activités">Activités</option>
              <option value="Tennis">Tennis</option>
              <option value="Paddle">Paddle</option>
              <option value="Foot">Foot</option>
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
      </div>
    </div>
  );
};
export default CompagneDetails;
