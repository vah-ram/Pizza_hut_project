import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginHost } from "../utils/Hosts";
import { toast, Toaster } from "sonner";
import axios from "axios";
import MobileMenu from "../MobileMenuBar/MobileMenu";
import { useTranslation } from "react-i18next";
import GoogleLogin from "./GoogleLogin";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const addData = async () => {
    if (!email || !password) {
      toast.error("Please write all fields!!!", {
        position: "bottom-right",
        duration: 3000,
      });

      return;
    }

    try {
      const res = await axios.get(loginHost, {
        params: { email, password },
      });

      if (res.data.status) {
          localStorage.setItem("token", res.data.token);
          navigate("/");
      } else {
        toast.error(res.data.message, {
          position: "bottom-right",
          duration: 3000,
        });

        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onSuccessGoogleAuth = async(credetential) => {

    try {
      const res = await axios.get(loginHost, {
        params: { credetential },
      });

      if (res.data.status) {
          localStorage.setItem("token", res.data.token);
          navigate("/");
      } else {
        toast.error(res.data.message, {
          position: "bottom-right",
          duration: 3000,
        });

        return;
      }

    } catch (error) {
      console.error(error);
    }
  };

  const { t } = useTranslation();

  return (
    <>
      <MobileMenu />

      <section className="w-full h-[100vh] flex bg-[#e33b41] max-md:bg-white">
        <div
          className="w-[50%] h-full flex
                flex-col justify-center items-center relative
                bg-[url('https://pizza-hut.am/assets/images/app_2/loginBackground.svg')] bg-cover bg-center
                max-md:hidden"
        >
          <button
            type="button"
            className="cursor-pointer flex gap-2
                            items-center absolute left-[4vw] top-[4vw]"
            onClick={() => navigate("/")}
            name="back button"
          >
            <img
              src="https://pizza-hut.am/assets/images/app_2/arrowWhite.svg"
              className="w-[10px] h-[10px]"
            />

            <p className="text-white text-[14px]">{t("menu_home")}</p>
          </button>

          <div
            className="flex flex-col gap-[7vw] items-center
                       max-lg:p-10"
          >
            <div className="flex gap-4 mr-auto ml-[-20px]">
              <span
                className="w-[50px] h-[50px] rounded-full block
                            border border-[10px] border-white"
              />

              <div className="flex flex-col items-between">
                <p className="text-white text-[15px]">Hi</p>

                <h2 className="text-white text-[24px] font-[600]">
                  Pizza Hut Armenia Menu
                </h2>
              </div>
            </div>

            <p className="w-full text-white text-[17px] text-center">
              {t("login_register_description")}
            </p>

            <button 
              type="button"
              className="w-[80%] h-[54px] px-3 py-4 rounded-2xl
                                flex items-center justify-center shadow-lg
                                shadow-[#0000004d] cursor-pointer"
              onClick={() => navigate("/signUp")}
            >
              <p className="uppercase text-white text-[16px] font-sans">
                {t("login_register_button")}
              </p>
            </button>
          </div>
        </div>

        <form
          action="#"
          className="w-[50%] h-full bg-white flex
                    flex-col justify-center items-center relative max-md:w-full [body.dark_&]:bg-[#2e2e2e]
                    max-md:justify-start max-md:pt-[60px]"
          onSubmit={(evt) => {
            evt.preventDefault();
            addData();  
          }}
        >
          <div
            className="w-full h-[60px] hidden absolute top-0 shadow-md
                        justify-center items-center max-md:flex"
          >
            <button 
              type="button"
              className="w-[40px] h-[40px] flex items-center justify-center
                                border-1 border-gray-200 rounded-xl outline-none absolute left-5"
              onClick={() => navigate("/")}
            >
              <img
                src="https://pizza-hut.am/assets/images/app_2/arrow.svg"
                className="w-[20px] h-[20px]"
              />
            </button>

            <h2 className="text-[17px] text-[#515151] font-[600] uppercase [body.dark_&]:text-white">
              {t("login_authorization_title")}
            </h2>
          </div>

          <div className="w-[95%] hidden h-[41px] max-md:flex gap-[2px] mt-2">
            <button 
              type="button"
              className="w-[50%] uppercase text-[#e33b41] border-b-2 text-[19px]
                                font-[600] cursor-pointer"
              onClick={(evt) => {
                evt.preventDefault();
                navigate("/signIn");
              }}
            >
              Log in
            </button>

            <button 
              type="button"
              className="w-[50%] uppercase text-[#515151] border-b-2 text-[19px]
                                font-[600] border-gray-200 cursor-pointer"
              onClick={(evt) => {
                evt.preventDefault();
                navigate("/signUp");
              }}
            >
              Register
            </button>
          </div>

          <h2 className="text-[21px] text-[#515151] font-[600] uppercase [body.dark_&]:text-white max-md:hidden">
            {t("login_authorization_title")}
          </h2>

          <p
            className="text-[17px] text-[#9D9D9D] font-[600]
                    max-md:text-[#515151] max-md:mt-5"
          >
            {t("login_authorization_subtitle")}
          </p>

          <div
            className="w-[60%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                    border border-1 border-gray-200 [body.dark_&]:border-[#FFF3] max-md:w-[95%]"
          >
            <img src="/Img/email-icon.png" alt="Email" />
            <input
              type="email"
              placeholder={t("login_email_placeholder")}
              className="border-none outline-none w-full [body.dark_&]:text-white"
              maxLength={50}
              onChange={(evt) => setEmail(evt.target.value)}
            />
          </div>

          <div
            className="w-[60%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                    border border-1 border-gray-200 [body.dark_&]:border-[#FFF3] max-md:w-[95%]"
          >
            <img src="/Img/password-icon.png" alt="Email" />

            <input
              type={`${showPassword ? "text" : "password"}`}
              placeholder={t("login_password_placeholder")}
              className="border-none outline-none w-full [body.dark_&]:text-white"
              maxLength={50}
              onChange={(evt) => setPassword(evt.target.value)}
            />
            <button
              type="button"  
              className="w-[22px] h-[22px] cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >


              <img
                src="https://pizza-hut.am/assets/images/app_2/showPassword.svg"
                className="w-full h-full"
              />
            </button>
          </div>

          <a
            href="/reset-password"
            className="text-[15px] text-[#e33b41] font-[600]
                         ml-auto mr-[20%] mt-7 max-md:mr-[2.5%]"
          >
            {t("login_forgot_password")}
          </a>

          <button
            type="submit"  
            className="w-[60%] mt-5 flex gap-5 items-center justify-center
                      px-3 py-4 rounded-[12px] bg-[#e33b41] cursor-pointer hover:opacity-90
                      max-md:w-[95%] max-md:rounded-[18px]"
          >
            <p className="uppercase text-white text-[16px] font-sans">
              {t("login_button_text")}
            </p>
          </button>


          <div className="w-[60%] flex items-center mt-2  max-md:w-[95%]">
            <span className="w-full h-[1px] bg-gray-300" />

            <p className="text-[16px] m-4 [body.dark_&]:text-white">
              {t("login_or")}
            </p>

            <span className="w-full h-[1px] bg-gray-300" />
          </div>

          <GoogleLogin onSuccessGoogleAuth={onSuccessGoogleAuth}/>
            
          <button 
            type="button"
            className="w-[60%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                            border border-1 border-gray-200 relative cursor-pointer [body.dark_&]:border-[#FFF3]
                             max-md:w-[95%]"
            onClick={() => {
              navigate('/')
            }}
          >
            <img
              src="/Img/guest-icon.png"
              className="w-[30px] h-[30px]"
              alt="Email"
            />

            <p
              className="uppercase [body.dark_&]:text-white max-lg:text-[1.5vw]
             max-md:text-[16px]"
            >
              {t("login_continue_guest")}
            </p>

            <img
              src="https://pizza-hut.am/assets/images/app_2/arrowLightGrey.svg"
              className="rotate-[180deg] w-[15px] h-[15px] absolute right-5"
            />
          </button>
        </form>
      </section>

      <Toaster richColors />
    </>
  );
}

export default Login;
