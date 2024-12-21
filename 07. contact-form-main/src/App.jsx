import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function formSubmit(data) {
    console.log(data);
    reset();
  }

  function formError(errors) {
    console.log(errors);
  }

  return (
    <div className=" w-[360px] sm:w-[450px] mx-auto my-3">
      <form
        className="flex flex-col gap-1"
        onSubmit={handleSubmit(formSubmit, formError)}
      >
        <h1 className="text-xl font-bold">Contact Us</h1>

        <label htmlFor="fname">
          First name <span>&#42;</span>
        </label>
        <input
          className="border-2 border-slate-300 pl-1"
          type="text"
          id="fname"
          name="fname"
          aria-label="First name"
          {...register("firstName", {
            required: "This field is required!",
          })}
        />
        {errors?.firstName?.message && (
          <p className="text-red-500">⚠️{errors.firstName.message}</p>
        )}

        <label htmlFor="lname" className="mt-1">
          Last name <span>&#42;</span>
        </label>
        <input
          className="border-2 border-slate-300 pl-1"
          type="text"
          id="lname"
          name="lname"
          aria-label="Last name"
          {...register("lastName", {
            required: "This field is required!",
          })}
        />
        {errors?.lastName?.message && (
          <p className="text-red-500">⚠️{errors.lastName.message}</p>
        )}

        <label htmlFor="email" className="mt-1">
          Email <span>&#42;</span>
        </label>
        <input
          className="border-2 border-slate-300 pl-1"
          type="email"
          id="email"
          name="email"
          aria-label="Email"
          {...register("email", {
            required: "This field is required!",
          })}
        />
        {errors?.email?.message && (
          <p className="text-red-500">⚠️{errors.email.message}</p>
        )}

        <p className="mt-1">
          Query type <span>&#42;</span>
        </p>

        <div className="flex gap-3">
          <div className="flex gap-2 border-2 px-3 py-1">
            <input
              className="custom-radio"
              type="radio"
              id="general"
              value="general"
              name="queryType"
              aria-label="General Enquiry"
              {...register("queryType", {
                required: "Please select your query type!",
              })}
            />
            <label htmlFor="general">General Enquiry</label>
          </div>

          <div className="flex gap-2 border-2 px-3 py-1">
            <input
              className="custom-radio"
              type="radio"
              id="support"
              value="support"
              name="queryType"
              aria-label="Support Request"
              {...register("queryType", {
                required: "Please select a query type!",
              })}
            />
            <label htmlFor="support">Support Request</label>
          </div>
        </div>
        {errors?.queryType?.message && (
          <p className="text-red-500">⚠️{errors.queryType.message}</p>
        )}

        <label htmlFor="message" className="mt-1">
          Message <span>&#42;</span>
        </label>
        <textarea
          className="border-2 border-slate-300 p-1"
          name="message"
          id="message"
          cols="45"
          rows="8"
          aria-label="Message"
          {...register("message", {
            required: "This field is required!",
          })}
        ></textarea>
        {errors?.message?.message && (
          <p className="text-red-500">⚠️{errors.message.message}</p>
        )}

        <div className="flex gap-1 my-2">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            aria-label="Consent"
            {...register("consent", {
              required: "This selection is required!",
            })}
          />
          <label htmlFor="consent">
            {" "}
            I consent to being contacted by the team <span>&#42;</span>
          </label>
        </div>
        {errors?.consent?.message && (
          <p className="text-red-500">⚠️{errors.consent.message}</p>
        )}

        <button className="bg-slate-300 mt-2 p-1 hover:bg-slate-400">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;