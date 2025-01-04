import { twMerge } from "tailwind-merge";
import { DropDown } from "../components";
import { CUSTOMER_CARE_NUMBER } from "../constants/footer";

const Footer = ({ items, className }) => {
  return (
    <footer
      className={twMerge(
        "px-6 lg:px-32 py-4 border-t-[1px] border-gray-400 xs:border-none xs:py-28  text-[12px] h-full",
        className
      )}
    >
      <p className="">
        Questions? Call{" "}
        <a
          href={`tel:${CUSTOMER_CARE_NUMBER}`}
          className="no-underline hover:underline"
        >
          {CUSTOMER_CARE_NUMBER}
        </a>
      </p>

      <div className="grid grid-cols-2 my-4 md:grid-cols-4 gap-y-4">
        {items.map((item) => (
          <a href={item.to} key={item.text} className="underline">
            {item.text}
          </a>
        ))}
      </div>

      <DropDown />
    </footer>
  );
};

export default Footer;
