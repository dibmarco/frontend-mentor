import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import InputText from "./components/InputText";
import InputEmail from "./components/InputEmail";
import InputRadio from "./components/InputRadio";
import TextArea from "./components/TextArea";
import InputCheckbox from "./components/InputCheckbox";
import SubmitButton from "./components/SubmitButton";

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
    // console.log(transformedData);
    toast.success("Form successfully submitted!", {
      duration: 2500,
      position: "top-center",
    });

    // Callback in reset to set focus after resetting
    reset(undefined, {
      keepValues: false, // Ensures form values are cleared
      keepErrors: false, // Clears form errors
      keepDirty: false, // Resets dirty fields
    });

    // Delay to ensure state is reset before focusing
    setTimeout(() => setFocus("fname"), 2500);
  }

  // function formError(errors) {
  //   console.log(errors);
  // }

  useEffect(() => {
    setFocus("fname");
  }, [setFocus]);

  return (
    <div className="flex justify-center items-center mx-auto min-h-svh font-nunito">
      <Toaster />
      <form
        className="flex flex-col gap-1 p-5 shadow-lg border-2 rounded-md min-w-[365px] sm:max-w-[500px] mx-2 mt-2"
        onSubmit={handleSubmit(formSubmit /* , formError */)}
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

        <p className="mt-1 font-bold text-xl sm:text-base">
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

        <InputCheckbox
          name="consent"
          ariaLabel="Consent"
          label="I consent to being contacted by the team"
          register={register}
          error={errors.consent}
        />

        <SubmitButton />
      </form>
    </div>
  );
}

export default App;
