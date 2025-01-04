import {
  Header,
  Logo,
  Footer,
  SigninForm,
  BackgroundImage,
} from "../components";
import { FOOTER_ITEMS_SIGNIN } from "../constants/footer";

const SigninPage = () => {
  return (
    <>
      <div className="w-full xs:h-screen xs:relative">
        <BackgroundImage className={"h-full hidden xs:block"} />

        <div className="flex flex-col w-full xs:h-full xs:absolute xs:top-0">
          <Header className={" bg-black xs:bg-transparent px-4  md:px-32 "}>
            <Logo className={"w-20 xs:w-28"} />
          </Header>

          <SigninForm />
        </div>
      </div>

      <Footer
        items={FOOTER_ITEMS_SIGNIN}
        className={" bg-black text-[#b3b3b3] "}
      />
    </>
  );
};

export default SigninPage;
