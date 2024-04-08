import { useState } from "react";

export default function InputComponent(props) {
  return (
    <>
      <div className="w-full  mx-2 ">
        <div className="font-bold text-gray-600 text-xs leading-8  h-6 mx-2 mt-3">
          {props.Inputtitle}
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded  w-60">
          <input
            className="p-1 px-2 outline-none bg-transparent w-full  text-gray-800"
            onChange={() => props.onChange()}
          />{" "}
        </div>
      </div>
    </>
  );
}
