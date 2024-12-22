import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const { register, handleSubmit, reset, formState, watch, setFocus } =
    useForm();
  const { errors } = formState;

  // Watch the value of the selected radio button
  const queryType = watch("queryType");

  function formSubmit(data) {
    const transformedData = {
      ...data,
      firstName: data.firstName.toLowerCase(),
      lastName: data.lastName.toLowerCase(),
      email: data.email.toLowerCase(),
    };
    console.log(transformedData);
    // alert("Form successfully submited!");
    toast.success("Form successfully submited!", {
      duration: 2000,
      position: "top-center",
    });
    reset();
  }

  function formError(errors) {
    console.log(errors);
  }

  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  return (
    <div className="flex justify-center items-center mx-auto h-screen font-nunito">
      <Toaster />
      <form
        className="flex flex-col gap-1 p-5 shadow-lg border-2 rounded-md w-auto sm:w-[500px]"
        onSubmit={handleSubmit(formSubmit, formError)}
      >
        <h1 className="text-2xl font-bold text-center uppercase">Contact us</h1>

        <label htmlFor="fname" className="font-bold">
          First name <span className="text-red-500">&#42;</span>
        </label>
        <input
          className={`border-2 pl-1 rounded-md focus:outline-none transition-all ${
            errors.firstName
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-300"
              : "border-slate-400 focus:border-blue-500 focus:ring-2"
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
          className={`border-2 pl-1 rounded-md focus:outline-none transition-all ${
            errors.lastName
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-300"
              : "border-slate-400 focus:border-blue-500 focus:ring-2"
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
          className={`border-2 pl-1 rounded-md focus:outline-none transition-all ${
            errors?.email
              ? errors.email?.type === "pattern"
                ? "border-orange-400 focus:border-orange-400 focus:ring-2 focus:ring-red-300" // Orange border for pattern errors
                : "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-300" // Red border for required errors
              : "border-slate-400 focus:border-blue-500 focus:ring-2"
          }`}
          type="email"
          id="email"
          name="email"
          aria-label="Email"
          {...register("email", {
            required: "This field is required!",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            },
          })}
        />
        {errors.email && errors.email.type === "pattern" && (
          <p className="text-orange-400">
            ⚠️ Please enter a valid email address!
          </p>
        )}
        {/* {errors?.email && errors?.email?.type === "required" && (
          <p className="text-red-500">⚠️ This field is required!</p>
        )} */}
        {/* {errors?.email?.message && (
          <p className="text-red-500">⚠️{errors.email.message}</p>
        )} */}

        <p className="mt-1 font-bold">
          Query type <span className="text-red-500">&#42;</span>
        </p>

        <div className="flex gap-3">
          <div
            className={`flex gap-2 border-2 px-3 py-1 rounded-md transition-all ${
              errors.queryType
                ? "border-red-500 hover:ring-2 hover:ring-red-300"
                : "border-slate-400 hover:ring-2 hover:border-blue-500"
            } ${queryType === "general" ? "bg-slate-200" : ""}`}
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
            className={`flex gap-2 border-2 px-3 py-1 rounded-md transition-all ${
              errors.queryType
                ? "border-red-500 hover:ring-2 hover:ring-red-300"
                : "border-slate-400 hover:ring-2 hover:border-blue-500"
            } ${
              queryType === "support" ? "bg-slate-200" : "" // Add bg color if selected
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
          className={`border-2 pl-1 rounded-md focus:outline-none transition-all ${
            errors.message
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-300"
              : "border-slate-400 focus:border-blue-500 focus:ring-2"
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

        <div className="mt-1">
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
            className={`${errors.consent ? "text-red-500 font-semibold" : ""}`}
          >
            {" "}
            I consent to being contacted by the team{" "}
            <span className="text-red-500 font-bold">&#42;</span>
          </label>
        </div>
        {/* {errors?.consent?.message && (
          <p className="text-red-500">⚠️{errors.consent.message}</p>
        )} */}

        <button className="bg-blue-500 text-white font-semibold py-2 px-4 mt-2 rounded-md shadow-md transition hover:bg-blue-600 active:scale-[.97]">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
