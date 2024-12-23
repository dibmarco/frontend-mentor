import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import InputText from "./components/InputText";
import InputEmail from "./components/InputEmail";
import InputRadio from "./components/InputRadio";
import TextArea from "./components/TextArea";

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
          <InputRadio
            name="queryType"
            id="general"
            ariaLabel="General Enquiry"
            watch={queryType}
            register={register}
            error={errors.queryType}
          />

          <InputRadio
            name="queryType"
            id="support"
            ariaLabel="Support Request"
            watch={queryType}
            register={register}
            error={errors.queryType}
          />
        </div>

        <TextArea
          name="message"
          ariaLabel="Message"
          cols="45"
          rows="8"
          register={register}
          error={errors.message}
        />

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
