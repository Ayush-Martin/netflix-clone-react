import { useState } from "react";
import InputBox from "./ui/InputBox";
import Button from "./ui/Button";
import { ValidationErrorTag } from "../components";
import { checkValidEmail } from "../utils/validation";
import { useNavigate } from "react-router-dom";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const emailChangeHandler = (e) => {
    const value = e.target.value;
    setEmail(value);
    const error = checkValidEmail(value);

    error ? setEmailError(error) : setEmailError("");
  };

  const submitEmail = () => {
    if (emailError) return;
    navigate("/signup", { state: { email } });
  };

  return (
    <div>
      <p className="text-[13px] text-center text-white mt-7">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex gap-2 px-4 mt-3">
        <InputBox
          label={"Email Address"}
          className={"w-2/3 text-white"}
          inputVal={email}
          inputChangeHandler={emailChangeHandler}
        />
        <Button
          text="Get Started"
          className="w-1/3 text-white bg-red-600 text-md"
          onClickHandle={submitEmail}
        />
      </div>
      <p className="ml-3">
        <ValidationErrorTag error={emailError} />
      </p>
    </div>
  );
};

export default EmailForm;
