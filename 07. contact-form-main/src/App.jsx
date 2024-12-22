import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function formSubmit(data) {
    console.log(data);
    alert("Form successfully submited!");
    reset();
  }

  function formError(errors) {
    console.log(errors);
  }

  return (
    <div className="flex justify-center items-center h-screen w-auto sm:w-[480px] mx-auto my-2">
      <form
        className="flex flex-col gap-1 p-5 shadow-lg border-2 rounded-md"
        onSubmit={handleSubmit(formSubmit, formError)}
      >
        <h1 className="text-2xl font-bold text-center uppercase">Contact us</h1>

        <label htmlFor="fname" className="font-bold">
          First name <span className="text-red-500">&#42;</span>
        </label>
        <input
          className={`border-2 pl-1 rounded-md focus:outline-none ${
            errors.firstName
              ? "border-red-500 focus:border-red-500"
              : "border-slate-300 focus:border-blue-500"
          }`}
          type="text"
          id="fname"
          name="fname"
          aria-label="First name"
          {...register("firstName", {
            required: "This field is required!",
          })}
        />
        {/* {errors.firstName && (
          <p className="text-red-500">⚠️ {errors.firstName.message}</p>
        )} */}

        <label htmlFor="lname" className="mt-1 font-bold">
          Last name <span className="text-red-500">&#42;</span>
        </label>
        <input
          className={`border-2 pl-1 rounded-md focus:outline-none ${
            errors.lastName
              ? "border-red-500 focus:border-red-500"
              : "border-slate-300 focus:border-blue-500"
          }`}
          type="text"
          id="lname"
          name="lname"
          aria-label="Last name"
          {...register("lastName", {
            required: "This field is required!",
          })}
        />
        {/* {errors?.lastName?.message && (
          <p className="text-red-500">⚠️{errors.lastName.message}</p>
        )} */}

        <label htmlFor="email" className="mt-1 font-bold">
          Email <span className="text-red-500">&#42;</span>
        </label>
        <input
          className={`border-2 pl-1 rounded-md focus:outline-none ${
            errors.email
              ? "border-red-500 focus:border-red-500"
              : "border-slate-300 focus:border-blue-500"
          }`}
          type="email"
          id="email"
          name="email"
          aria-label="Email"
          {...register("email", {
            required: "This field is required!",
          })}
        />
        {/* {errors?.email?.message && (
          <p className="text-red-500">⚠️{errors.email.message}</p>
        )} */}

        <p className="mt-1 font-bold">
          Query type <span className="text-red-500">&#42;</span>
        </p>

        <div className="flex gap-3">
          <div
            className={`flex gap-2 border-2 px-3 py-1 rounded-md ${
              errors.queryType ? "border-red-500" : ""
            }`}
          >
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

          <div
            className={`flex gap-2 border-2 px-3 py-1 rounded-md ${
              errors.queryType ? "border-red-500" : ""
            }`}
          >
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
        {/* {errors?.queryType?.message && (
          <p className="text-red-500">⚠️{errors.queryType.message}</p>
        )} */}

        <label htmlFor="message" className="mt-1 font-bold">
          Message <span className="text-red-500">&#42;</span>
        </label>
        <textarea
          className={`border-2 pl-1 rounded-md focus:outline-none ${
            errors.message
              ? "border-red-500 focus:border-red-500"
              : "border-slate-300 focus:border-blue-500"
          }`}
          name="message"
          id="message"
          cols="45"
          rows="8"
          aria-label="Message"
          {...register("message", {
            required: "This field is required!",
          })}
        ></textarea>
        {/* {errors?.message?.message && (
          <p className="text-red-500">⚠️{errors.message.message}</p>
        )} */}

        <div>
          <input
            type="checkbox"
            id="consent"
            name="consent"
            aria-label="Consent"
            {...register("consent", {
              required: "This selection is required!",
            })}
          />
          <label
            htmlFor="consent"
            className={`${errors.consent ? "text-red-500" : ""}`}
          >
            {" "}
            I consent to being contacted by the team{" "}
            <span className="text-red-500 font-bold">&#42;</span>
          </label>
        </div>
        {/* {errors?.consent?.message && (
          <p className="text-red-500">⚠️{errors.consent.message}</p>
        )} */}

        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md transition hover:bg-blue-600 hover:shadow-lg">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
