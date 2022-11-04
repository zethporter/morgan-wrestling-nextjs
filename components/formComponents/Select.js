const TextBox = ({ label, options }) => {
  return (
    <div className="flex m-2">
      <p className={`p-2 text-maroon-800 font-semibold ${label ? "w-1/6" : ""}`}>{label}</p>
      <select
        type="select"
        className="border border-maroon-800 grow p-2 rounded hover:bg-maroon-50  focus:ring-maroon-50"
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default TextBox;
