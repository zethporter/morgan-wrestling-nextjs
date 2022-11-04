const TextBox = ({ label }) => {
  return (
    <div className="flex m-2">
      <p className={`p-2 text-maroon-800 font-semibold ${label ? "w-1/6" : ""}`}>{label}</p>
      <input
        type="text"
        className="border border-maroon-800 grow p-2 rounded hover:bg-maroon-50  focus:ring-maroon-50"
      />
    </div>
  );
};

export default TextBox;
