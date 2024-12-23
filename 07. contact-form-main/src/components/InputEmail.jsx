function InputEmail({ name, ariaLabel, register, error }) {
  return (
    <>
      <label htmlFor={name} className="mt-1 font-bold">
        {ariaLabel} <span className="text-red-500">&#42;</span>
      </label>
      <input
        className={`border-2 pl-1 rounded-md focus:outline-none transition-all ${
          error
            ? error?.type === "pattern"
              ? "border-orange-400 focus:border-orange-400 focus:ring-2 focus:ring-red-300" // Orange border for pattern errors
              : "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-300" // Red border for required errors
            : "border-slate-400 focus:border-blue-500 focus:ring-2"
        }`}
        type="email"
        id={name}
        name={name}
        aria-label={ariaLabel}
        {...register(name, {
          required: "This field is required!",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          },
        })}
      />
    </>
  );
}

export default InputEmail;
