const InputForm = ({ label, type, placeholder, name, autoComplete }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input type={type} placeholder={placeholder} name={name} id={name} className="text-sm border rounded w-full py-2 px-2 text-slate-700 placeholder:opacity-50" autoComplete={autoComplete} />
    </div>
  );
};

export default InputForm;
