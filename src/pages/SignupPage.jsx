import { useState } from "react";
import {
  Header,
  Logo,
  Button,
  InputBox,
  ValidationErrorTag,
  Footer,
} from "../components";
import { checkValidEmail, checkValidPassword } from "../utils/validation";
import { FOOTER_ITEMS_SIGNIN } from "../constants/footer";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const typedEmail = location.state.email;
  const [email, setEmail] = useState(typedEmail);
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailChangeHandler = (e) => {
    const value = e.target.value;
    setEmail(value);
    const error = checkValidEmail(value);

    error ? setEmailError(error) : setEmailError("");
  };

  const passwordChangeHandler = (e) => {
    const value = e.target.value;
    setPassword(value);

    const error = checkValidPassword(value);

    error ? setPasswordError(error) : setPasswordError("");
  };

  const signup = async () => {
    try {
      if (emailError || passwordError) return;

      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Header className={"border-b-[1px] px-4  md:px-32 "}>
        <div className="flex justify-between">
          <Logo className={"w-20 xs:w-28"} />
          <Button text="Sign In" className={"font-semibold text-neutral-700"} />
        </div>
      </Header>
      <div className="flex items-center justify-center h-[494px] ">
        <div className="w-[400px] px-4">
          <h1 className="text-2xl font-medium text-start">
            Create a password to start <br /> your membership{" "}
          </h1>
          <p className="mt-3">
            Just a few more steps and you're done! <br /> We hate paperwork,
            too.
          </p>

          <InputBox
            label={"email"}
            type={"email"}
            className={"mt-3"}
            inputVal={email}
            inputChangeHandler={emailChangeHandler}
            error={emailError}
          />

          <ValidationErrorTag error={emailError} />

          <InputBox
            label={"Add a password"}
            type={"password"}
            className={"mt-3"}
            inputVal={password}
            inputChangeHandler={passwordChangeHandler}
            error={passwordError}
          />

          <ValidationErrorTag error={passwordError} />

          <Button
            className={
              "bg-red-600 py-2 text-white rounded-sm w-full text-lg mt-3"
            }
            text="Next"
            onClickHandle={signup}
          />
        </div>
      </div>
      <Footer
        items={FOOTER_ITEMS_SIGNIN}
        className={"bg-[#f3f3f3] text-[#73738c]"}
      />
    </div>
  );
};

export default SignupPage;
