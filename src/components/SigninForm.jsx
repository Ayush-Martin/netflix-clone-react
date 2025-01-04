import { InputBox, Button, ValidationErrorTag } from ".";
import { useState, useContext } from "react";
import { checkValidEmail, checkValidPassword } from "../utils/validation";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { auth } from "../config/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/userContext";

const SigninForm = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rememberUser, setRememberUser] = useState(true);

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

  const signin = async () => {
    try {
      if ((emailError, passwordError)) return;
      await signInWithEmailAndPassword(auth, email, password);
      setUser(auth?.currentUser);
      navigate("/home");
    } catch (err) {
      setEmailError("invalid email or password");
      console.log(err);
    }
  };

  return (
    <div className="justify-center flex-grow w-full xs:w-[350px] py-3 xs:py-12 mx-auto xs:mt-2 bg-black px-4 xs:px-14 xs:bg-opacity-55">
      <h1 className="text-2xl font-bold text-white">Sign In</h1>
      <InputBox
        label={"Email or mobile number"}
        inputVal={email}
        inputChangeHandler={emailChangeHandler}
        type={"text"}
        className={"my-4 text-white"}
        error={emailError}
      />
      <ValidationErrorTag error={emailError} />
      <InputBox
        label={"Password"}
        inputVal={password}
        inputChangeHandler={passwordChangeHandler}
        type={"password"}
        className={"my-4 text-white"}
        error={passwordError}
      />
      <ValidationErrorTag error={passwordError} />

      <Button
        text="Sign In"
        className="py-2 text-white bg-red-600 xs:py-[6px] w-full"
        onClickHandle={signin}
      />

      <p className="my-2 text-center text-slate-300 text-[12px] py-[6px]">OR</p>

      <Button
        text="use a sign in code"
        className="text-white bg-white bg-opacity-20 text-[13px] font-medium py-2 xs:py-[6px] w-full"
      />

      <p className="my-3 text-center text-slate-300 text-[12px] cursor-pointer font-medium">
        Forget password ?
      </p>

      <div className="flex text-center text-slate-300 text-[13px] gap-1 font-medium">
        <button
          className="text-lg"
          onClick={() => setRememberUser((prev) => !prev)}
        >
          {rememberUser ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </button>
        <p className="">Remember me</p>
      </div>
      <p className="my-3 text-slate-300 text-[12px] cursor-pointer font-medium">
        <span className="text-gray-400">New to Netflix? </span> Sign up now
      </p>
    </div>
  );
};

export default SigninForm;
