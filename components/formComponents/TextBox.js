const TextBox = () => {
  return (
    <div className="flex m-2">
      <p className="p-2 text-maroon-800 font-semibold">This is a label</p>
      <input
        type="text"
        className="border border-maroon-800 grow p-2 rounded hover:bg-maroon-50 ring-inset ring-maroon-100"
      />
    </div>
  );
};

export default TextBox;
