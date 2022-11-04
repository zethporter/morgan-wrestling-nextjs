const DateInput = ({ label }) => {
    return (
      <div className="flex m-2">
        <p className={`p-2 text-maroon-800 font-semibold ${label ? "w-1/6" : ""}`}>{label}</p>
        <input
          type="date"
          className="border border-maroon-800 grow p-2 rounded"
        />
      </div>
    );
  };
  
  export default DateInput;
  