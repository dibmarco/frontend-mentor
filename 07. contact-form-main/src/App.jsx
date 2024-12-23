import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import InputText from "./components/InputText";
import InputEmail from "./components/InputEmail";

function App() {
  const { register, handleSubmit, reset, formState, watch, setFocus } =
    useForm();
  const { errors } = formState;

  // Watch the value of the selected radio button
  const queryType = watch("queryType");

  function formSubmit(data) {
    const transformedData = {
      ...data,
      fname: data.fname.toLowerCase(),
      lname: data.lname.toLowerCase(),
      email: data.email.toLowerCase(),
    };
    console.log(transformedData);
    // alert("Form successfully submited!");
    toast.success("Form successfully submited!", {
      duration: 2500,
      position: "top-center",
    });
    reset();
  }

  function formError(errors) {
    console.log(errors);
  }

  useEffect(() => {
    setFocus("fname");
  }, [setFocus]);

  return (
    <div className="flex justify-center items-center mx-auto h-screen font-nunito">
      <Toaster />
      <form
        className="flex flex-col gap-1 p-5 shadow-lg border-2 rounded-md min-w-[365px] sm:max-w-[500px] mx-2 mt-2"
        onSubmit={handleSubmit(formSubmit, formError)}
      >
        <h1 className="text-2xl font-bold text-center uppercase">Contact us</h1>

        <InputText
          name="fname"
          ariaLabel="First name"
          register={register}
          error={errors.fname}
        />

        <InputText
          name="lname"
          ariaLabel="Last name"
          register={register}
          error={errors.lname}
        />

        <InputEmail
          name="email"
          ariaLabel="Email"
          register={register}
          error={errors.email}
        />

        <p className="mt-1 font-bold">
          Query type <span className="text-red-500">&#42;</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-between">
          <div
            className={`flex gap-2 border-2 px-6 py-1 min-w-[220px] rounded-md transition-all ${
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
            className={`flex gap-2 border-2 px-6 py-1 min-w-[220px] rounded-md transition-all ${
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

        <button className="bg-blue-500 text-white font-semibold py-2 px-4 mt-2 rounded-md shadow-md transition hover:bg-blue-600 active:scale-[.97]">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
