function InputText({ name, ariaLabel, register, error }) {
  return (
    <>
      <label htmlFor={name} className="font-bold">
        {ariaLabel} <span className="text-red-500">&#42;</span>
      </label>
      <input
        className={`border-2 pl-1 rounded-md focus:outline-none transition-all ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-300"
            : "border-slate-400 focus:border-blue-500 focus:ring-2"
        }`}
        type="text"
        id={name}
        name={name}
        aria-label={ariaLabel}
        {...register(name, {
          required: "This field is required!",
        })}
      />
    </>
  );
}

export default InputText;
