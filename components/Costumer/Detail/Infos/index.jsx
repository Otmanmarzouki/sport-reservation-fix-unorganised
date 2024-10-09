export default function ContactInformation({ email, telephone, dob, registrationDate }) {
  return (
    <div className="flex flex-col w-full lg:w-2/3 bg-white shadow rounded-lg p-2 text-xs lg:text-sm text-gray-500 font-medium space-y-2">
      <div className="flex flex-row">
        <div className="w-1/2">Email:</div>
        <div className="w-1/2">{email}</div>
      </div>
      <div className="flex flex-row">
        <div className="w-1/2">Telephone:</div>
        <div className="w-1/2">{telephone}</div>
      </div>

      <div className="flex flex-row">
        <div className="w-1/2">Date inscription:</div>
        <div className="w-1/2">{registrationDate}</div>
      </div>
    </div>
  );
}
