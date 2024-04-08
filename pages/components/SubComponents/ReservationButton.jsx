export default function ReservationButton(props) {
  return (
    <>
      <div className="flex  w-full items-start justify-end ">
        <button className="inline-flex px-3 py-2 text-white bg-blue-600 rounded-md ">
          {props.ReservationButton}
        </button>
      </div>
    </>
  );
}
