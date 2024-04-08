export default function SmallBoxHomeDashboard(props) {
  return (
    <>
      <div className="flex items-center p-4 bg-white shadow rounded-lg justify-between">
        <div className="inline-flex flex-shrink-0 items-center justify-center h-12 w-12 text-white bg-blue-700 rounded-lg mr-3">
          <p className="text-lg font-semibold">{props.SmallboxCount}</p>
        </div>
        <div>
          <span className="block text-xs">{props.SmallboxTitle}</span>
        </div>
        <div>
          <span className="block text-lg font-bold text-blue-700">{props.SmallboxIcon}</span>
        </div>
      </div>
    </>
  );
}
