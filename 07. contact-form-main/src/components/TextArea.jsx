function TextArea({ name, ariaLabel, cols, rows, register, error }) {
  return (
    <>
      <label htmlFor="message" className="mt-1 font-bold">
        {ariaLabel} <span className="text-red-500">&#42;</span>
      </label>
      <textarea
        className={`text-xl sm:text-base border-2 pl-1 rounded-md focus:outline-none transition-all ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-300"
            : "border-slate-400 focus:border-blue-500 focus:ring-2"
        }`}
        name={name}
        id={name}
        aria-label={ariaLabel}
        cols={cols}
        rows={rows}
        {...register("message", {
          required: "This field is required!",
        })}
      ></textarea>
    </>
  );
}

export default TextArea;
