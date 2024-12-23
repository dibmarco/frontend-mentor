function InputRadio({ name, id, ariaLabel, watch, register, error }) {
  return (
    <div
      className={`flex gap-2 border-2 px-6 py-1 min-w-[220px] rounded-md transition-all ${
        error
          ? "border-red-500 hover:ring-2 hover:ring-red-300"
          : "border-slate-400 hover:ring-2 hover:border-blue-500"
      } ${watch === id ? "bg-slate-200" : ""}`}
    >
      <input
        className="custom-radio"
        type="radio"
        id={id}
        value={id}
        name={name}
        aria-label={ariaLabel}
        {...register(name, {
          required: "Please select your query type!",
        })}
      />
      <label htmlFor={id}>{ariaLabel}</label>
    </div>
  );
}

export default InputRadio;
