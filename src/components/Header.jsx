import { twMerge } from "tailwind-merge";

const Header = ({ children, className }) => {
  return <div className={twMerge("py-4", className)}>{children}</div>;
};

export default Header;
