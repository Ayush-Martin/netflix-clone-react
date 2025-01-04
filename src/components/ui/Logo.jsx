import { twMerge } from "tailwind-merge";
import logo from "../../assets/logo.svg";

const Logo = ({ className }) => {
  return (
    <div className={twMerge(className)}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
