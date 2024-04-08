import React from "react";

import { MdAlternateEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Support = () => {
  return (
    <>
      <main className="flex w-full bg-gray-100 overflow-y-auto px-4">
        <div className="flex flex-col w-full ">
          <div className="my-6 ">
            <h1 className="text-xl font-semibold ">Support</h1>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div class="flex  flex-col justify-center ">
              <div className="border-1 shadow-lg rounded-xl p-6 bg-gray-50">
                <div class=" flex flex-col mb-6  w-full ">
                  <label
                    for="default-input"
                    class="block mb-2 px-2 text-sm font-medium text-gray-900 "
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="default-input"
                    class="bg-white border  text-gray-900 text-sm rounded-xl  w-full p-2"
                  />
                </div>
                <div class=" flex flex-col mb-6  w-full">
                  <label
                    for="default-input"
                    class="block mb-2 px-2 text-sm font-medium text-gray-900 "
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="default-input"
                    class="bg-white border  text-gray-900 text-sm rounded-xl  w-full p-2"
                  />
                </div>
                <div class=" flex flex-col mb-6  w-full">
                  <textarea
                    id="message"
                    rows="4"
                    class="bg-white border  text-gray-900 text-sm rounded-xl  w-full p-2"
                    placeholder="Messsage"
                  />
                </div>
              </div>
              <div className="flex flex-row mt-6  w-full justify-center space-x-10 ">
                <div className=" mx-2">
                  <button className="inline-flex w-full p-2  text-white rounded-md text-sm bg-blue-500  ">
                    Envoyer
                  </button>
                </div>
                <div className=" mx-2">
                  <button className="inline-flex w-full  p-2 bg-transparent text-blue-600 border-2 border-blue-600 rounded-lg  text-sm   ">
                    Ouvrir un Ticket
                  </button>
                </div>
              </div>
            </div>
            <div class="flex  flex-col text-6xl border-1  shadow-lg rounded-xl p-6 bg-gray-50">
              <div className="mr-3">
                <h1 className="text-xl font-semibold ">Information D'entreprise</h1>
              </div>
              <div className="  mr-3 mt-10">
                <h3 className="text-lg font-semibold text-gray-500 ">Entreprise X</h3>
              </div>
              <div className=" flex flex-row mr-3 mt-10 items-center space-x-2">
                <MdAlternateEmail className="text-lg text-gray-500 " />
                <h3 className="text-lg font-semibold text-gray-500 ">test@text.com</h3>
              </div>
              <div className=" flex flex-row mr-3 mt-10 items-center space-x-2">
                <BsFillTelephoneFill className="text-lg text-gray-500 " />
                <h3 className="text-lg font-semibold text-gray-500 ">(467)-555-4782</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Support;
