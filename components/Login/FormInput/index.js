export default function FormInput({ label, type, value, onChange }) {
  return (
    <div className="flex flex-col mt-4">
      <label className="block text-gray-400 text-xs font-medium mb-2" htmlFor={label.toLowerCase()}>
        {label}
      </label>
      <input
        id={label.toLowerCase()}
        type={type}
        className="flex-grow h-8 px-2 border bg-transparent rounded border-grey-400"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
