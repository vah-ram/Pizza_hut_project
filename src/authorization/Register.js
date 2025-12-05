import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { registerHost, verifyEmailHost } from "../utils/Hosts.js";
import { Toaster, toast } from "sonner";
import MobileMenu from "../MobileMenuBar/MobileMenu";
import { useTranslation } from "react-i18next";
import CountrySelect from "../CountrySelect/CountrySelect";

function Register() {
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationActive, setVerificationActive] = useState(false);
  const [verificationCode, setVerificationCode] = useState(null);
  const [timer, setTimer] = useState(120);
  const [embedCode, setEmbedCode] = useState("+374");

  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [verifyInput, setVerifyInput] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const verifyEmail = async () => {
    if (
      !user.name ||
      !user.surname ||
      !phoneNumber || 
      !embedCode ||
      !user.email ||
      !user.password ||
      !user.confirmPassword
    ) {
      toast.error("Please write all fields!!!", {
        position: "bottom-right",
        duration: 3000,
      });

      return;
    }

    if (user.password !== user.confirmPassword) {
      toast.error("Passwords don't match!!!", {
        position: "bottom-right",
        duration: 3000,
      });

      return;
    } else if (user.password.length < 6) {
      toast.error("Please write strongest password!!!", {
        position: "bottom-right",
        duration: 3000,
      });

      return;
    }

    const res = await axios.post(verifyEmailHost, {
      email: user.email,
    });

    if (res.status) {
      setVerificationCode(String(res.data.embedCode));
      setVerificationActive(true);
    }
  };

  const addData = async () => {
    const _1 = verificationCode[0];
    const _2 = verificationCode[1];
    const _3 = verificationCode[2];
    const _4 = verificationCode[3];

    if (
      verifyInput.first !== _1 ||
      verifyInput.second !== _2 ||
      verifyInput.third !== _3 ||
      verifyInput.fourth !== _4
    ) {
      toast.error("Please write correct embed code", {
        position: "bottom-right",
        duration: 3000,
      });
      return;
    }

    const res = await axios.post(registerHost, {
      name: user.name,
      surname: user.surname,
      embedCode: embedCode,
      phonenumber: phoneNumber,
      email: user.email,
      password: user.password,
    });

    if (res.data.status) {
      navigate("/signIn");
    } else {
      toast.error(res.data.message, {
        position: "bottom-right",
        duration: 3000,
      });
    }
  };

  const phoneInputHandler = (num) => {
    if (num.length > 0) {
      if (num.startsWith("0")) {
        setPhoneNumber(phoneNumber.replace("/^0+/", ""));
      }
    } else {
      return;
    }
  };

  const { t } = useTranslation();

  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [verificationCode, timer]);

  const inputs = {
    first: useRef(),
    second: useRef(),
    third: useRef(),
    fourth: useRef(),
  };

  const handleInput = (e, current, next) => {
    const value = e.target.value;

    setVerifyInput((prev) => ({
      ...prev,
      [current]: value,
    }));

    if (value.length === 1 && next) {
      inputs[next].current.focus();
    }
  };

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

          <div className="flex flex-col gap-[7vw] items-center max-lg:p-10">
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
              {t("register_context")}
            </p>

            <button
              className="w-[80%] h-[54px] px-3 py-4 rounded-2xl
                                flex items-center justify-center shadow-lg
                                shadow-[#0000004d] cursor-pointer"
              onClick={() => navigate("/signIn")}
            >
              <p className="uppercase text-white text-[16px] font-sans">
                {t("register_btn_text")}
              </p>
            </button>
          </div>
        </div>

        <div
          className="w-[50%] h-full bg-white flex
                                flex-col justify-center items-center relative max-md:w-full
                                [body.dark_&]:bg-[#2e2e2e] max-md:justify-start
                                max-md:pb-10"
        >
          {verificationActive ? (
            <form
              className="w-full h-full bg-white flex
                                flex-col justify-center items-center relative max-md:w-full
                                [body.dark_&]:bg-[#2e2e2e] max-md:justify-start max-md:pt-[60px]
                                max-md:pb-10"
              onSubmit={(evt) => {
                evt.preventDefault();
                addData();
              }}
            >
              <h2
                className="text-[#515151] text-[calc(20px+.3vw)] font-[600]
                                    uppercase [body.dark_&]:text-white"
              >
                Verification
              </h2>

              <p className="text-[#9D9D9D] text-[calc(12px+.3vw)] text-center">
                Please check your phone and enter the received verification{" "}
                <br />
                code
              </p>

              <div className="flex gap-3 mt-5 mb-3">
                <input
                  ref={inputs.first}
                  type="tel"
                  maxLength={1}
                  className="rounded-lg border-1 border-gray-200
                                            w-[40px] h-[40px] outline-none text-center 
                                            [body.dark_&]:text-white"
                  onChange={(e) => handleInput(e, "first", "second")}
                />

                <input
                  ref={inputs.second}
                  type="tel"
                  maxLength={1}
                  className="rounded-lg border-1 border-gray-200
                                            w-[40px] h-[40px] outline-none text-center 
                                            [body.dark_&]:text-white"
                  onChange={(e) => handleInput(e, "second", "third")}
                />

                <input
                  ref={inputs.third}
                  type="tel"
                  maxLength={1}
                  className="rounded-lg border-1 border-gray-200
                                            w-[40px] h-[40px] outline-none text-center 
                                            [body.dark_&]:text-white"
                  onChange={(e) => handleInput(e, "third", "fourth")}
                />

                <input
                  ref={inputs.fourth}
                  type="tel"
                  maxLength={1}
                  className="rounded-lg border-1 border-gray-200
                                            w-[40px] h-[40px] outline-none text-center 
                                            [body.dark_&]:text-white"
                  onChange={(e) => handleInput(e, "fourth", null)}
                />
              </div>

              <p className="mt-3 [body.dark_&]:text-white">
                {timer <= 0 ? (
                  <a
                    onClick={(evt) => {
                      evt.preventDefault();
                      verifyEmail();
                      setTimer(120);
                    }}
                    className="text-[#e33b41] font-[600] text-[16px]
                                                cursor-pointer"
                  >
                    Send code again
                  </a>
                ) : (
                  timer
                )}
              </p>

              <button
                type="submit"
                className="w-[50%] h-[50px] mt-7
                                        rounded-xl bg-[#e33b41] uppercase
                                        text-white cursor-pointer"
              >
                Continue
              </button>
            </form>
          ) : (
            <form
              className="w-full h-full bg-white flex
                                flex-col justify-center items-center relative max-md:w-full
                                [body.dark_&]:bg-[#2e2e2e] max-md:justify-start max-md:pt-[60px]
                                max-md:pb-10"
              onSubmit={(evt) => {
                evt.preventDefault();
                verifyEmail();
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
                  {t("registration_title")}
                </h2>
              </div>

              <div className="w-[95%] hidden h-[41px] max-md:flex gap-[2px] mt-2">
                <button
                  type="button"
                  className="w-[50%] uppercase text-[#515151] border-b-2 border-gray-200 text-[19px]
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
                  className="w-[50%] uppercase text-[#e33b41] border-b-2 text-[19px]
                                        font-[600] cursor-pointer"
                  onClick={(evt) => {
                    evt.preventDefault();
                    navigate("/signUp");
                  }}
                >
                  {t("registration_title")}
                </button>
              </div>

              <h2
                className="text-[21px] text-[#515151] font-[600] uppercase
                                [body.dark_&]:text-white max-md:hidden"
              >
                {t("registration_title")}
              </h2>

              <div className="w-[60%] flex gap-2 max-lg:w-[80%] max-md:w-[95%] max-md:flex-col">
                <div
                  className="w-[50%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                                        border border-1 border-gray-200 max-md:w-full [body.dark_&]:border-[#FFF3]"
                >
                  <input
                    type="text"
                    placeholder={t("registration_name")}
                    className="border-none outline-none w-full [body.dark_&]:text-white"
                    maxLength={50}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        name: e.target.value,
                      })
                    }
                  />
                </div>

                <div
                  className="w-[50%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                                        border border-1 border-gray-200 max-md:w-full [body.dark_&]:border-[#FFF3]"
                >
                  <input
                    type="text"
                    placeholder={t("registration_surname")}
                    className="border-none outline-none w-full [body.dark_&]:text-white"
                    maxLength={50}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        surname: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="w-[60%] flex gap-2 max-lg:w-[80%] max-md:w-[95%]">
                <div className="w-[110px] mt-5">
                  <CountrySelect embedCode={embedCode} setEmbedCode={setEmbedCode}/>
                </div>

                <div
                  className="w-[80%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                                        border border-1 border-gray-200 [body.dark_&]:border-[#FFF3]"
                >
                  <input
                    type="tel"
                    placeholder={t("registration_phone")}
                    className="phone_input border-none outline-none w-full [body.dark_&]:text-white"
                    maxLength={50}
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      phoneInputHandler(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div
                className="w-[60%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                                border border-1 border-gray-200 max-lg:w-[80%] max-md:w-[95%] [body.dark_&]:border-[#FFF3]"
              >
                <input
                  type="email"
                  placeholder={t("registration_email")}
                  className="border-none outline-none w-full
                                        [body.dark_&]:text-white"
                  maxLength={50}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      email: e.target.value,
                    })
                  }
                />
              </div>

              <div
                className="w-[60%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                                border border-1 border-gray-200 max-lg:w-[80%] max-md:w-[95%]
                                [body.dark_&]:border-[#FFF3]"
              >
                <input
                  type="password"
                  placeholder={t("registration_password")}
                  className="border-none outline-none w-full [body.dark_&]:text-white"
                  maxLength={50}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      password: e.target.value,
                    })
                  }
                />
              </div>

              <div
                className="w-[60%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                                        border border-1 border-gray-200 max-lg:w-[80%] max-md:w-[95%]
                                        [body.dark_&]:border-[#FFF3]"
              >
                <input
                  type="password"
                  placeholder={t("registration_re_password")}
                  className="border-none outline-none w-full [body.dark_&]:text-white"
                  maxLength={50}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>

              <div
                className="flex gap-2 mr-auto ml-[20%]
                                    mt-5 cursor-pointer max-lg:ml-[10%] max-md:ml-[2.5%]"
              >
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="peer sr-only" />

                  <span
                    className="w-[22px] h-[22px] rounded-md bg-[#cbd1d8]
                                       flex items-center justify-center
                                       peer-checked:after:content-['✓']
                                       after:text-white after:text-[16px] after:font-bold
                                       transition peer-checked:bg-[#E74C3C]"
                  ></span>
                </label>

                <p className="text-[15px] text-[#515151] flex gap-2">

                  {t("registration_agree_text")}
                  
                  <a href="/terms-and-conditions" className="text-[#e33b41] font-[600]">

                    {t("registration_terms")}

                  </a>

                  {t("registration_and_text")}

                  <a
                    href="/privacy-policy"
                    className="text-[#e33b41] font-[600]"
                  >
                    {t("registration_privacy")}
                  </a>

                </p>
                
              </div>

              <button 
                type="submit"
                className="w-[60%] mt-10 flex gap-5
                                    items-center justify-center
                                    px-3 py-4 rounded-[12px] bg-[#e33b41] cursor-pointer
                                    hover:opacity-90 max-lg:w-[80%] max-md:w-[95%] max-md:rounded-[18px]"
              >
                <p className="uppercase text-white text-[16px] font-sans">
                  {t("registration_button")}
                </p>
              </button>
            </form>
          )}
        </div>
      </section>

      <Toaster richColors />
    </>
  );
}

export default Register;
