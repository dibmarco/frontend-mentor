function InputCheckbox({ name, ariaLabel, label, register, error }) {
  return (
    <div className="mt-1">
      <input
        type="checkbox"
        id={name}
        name={name}
        aria-label={ariaLabel}
        {...register(name, {
          required: "This selection is required!",
        })}
      />
      <label
        htmlFor={name}
        className={`${error ? "text-red-500 font-semibold" : ""}`}
      >
        {" "}
        {label} <span className="text-red-500 font-bold">&#42;</span>
      </label>
    </div>
  );
}

export default InputCheckbox;
