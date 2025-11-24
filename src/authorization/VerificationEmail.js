import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import MobileMenu from "../MobileMenuBar.js/MobileMenu";
import { useTranslation } from "react-i18next";

export default function VerificationEmail() {

    const navigate = useNavigate();
    const [ isValidCode, setIsValidCode ] = useState(false);

    const { t } = useTranslation();

    return (
        <>
            <MobileMenu />

            <section className="w-full h-[100vh] flex bg-[#e33b41] max-md:bg-white">
                <div className="w-[50%] h-full flex
                flex-col justify-center items-center relative
                bg-[url('https://pizza-hut.am/assets/images/app_2/loginBackground.svg')] bg-cover bg-center
                max-md:hidden">

                    <div className="flex flex-col gap-[5rem] items-center max-lg:p-10">
                        <div className="flex gap-4 mr-auto ml-[-20px]">
                            <span className="w-[50px] h-[50px] rounded-full block
                            border border-[10px] border-white"/>

                            <div className="flex flex-col items-between">
                                <p className="text-white text-[15px]">
                                    Hi
                                </p>

                                <h2 className="text-white text-[24px] font-[600]">
                                    Pizza Hut Armenia Menu
                                </h2>
                            </div>
                        </div>

                        <p className="w-full text-white text-[17px] text-center">
                            Log in and get access on all services with one account
                        </p>

                        <button
                            className="w-[80%] h-[54px] px-3 py-4 rounded-2xl
                                flex items-center justify-center shadow-lg
                                shadow-[#0000004d] cursor-pointer"
                            onClick={() => navigate('/signIn')}>
                            <p className="uppercase text-white text-[16px] font-sans">
                                {t("register_btn_text")}
                            </p>
                        </button>
                    </div>
                </div>

                <form
                    className="w-[50%] h-full bg-white flex
                    flex-col justify-center items-center relative max-md:w-full
                    [body.dark_&]:bg-[#2e2e2e] max-md:justify-start max-md:pt-[60px]
                    max-md:pb-10">

                    <h2 className="text-[#515151] text-[calc(20px+.3vw)] font-[600]
                        uppercase">
                        Verification
                    </h2>

                    <p className="text-[#9D9D9D] text-[calc(12px+.3vw)] text-center">
                        Please check your phone and enter the received verification <br/>
                        code
                    </p>

                    <div className="flex gap-3 mt-5 mb-3">
                        <input
                            numbersonly
                            type="tel"
                            className="rounded-lg border-1 border-gray-200
                            w-[40px] h-[40px] outline-none text-center"
                            maxLength={1} />

                        <input
                            type="tel"
                            className="rounded-lg border-1 border-gray-200
                            w-[40px] h-[40px] outline-none text-center"
                            maxLength={1} />

                        <input
                            type="tel"
                            className="rounded-lg border-1 border-gray-200
                            w-[40px] h-[40px] outline-none text-center"
                            maxLength={1} />

                        <input
                            type="tel"
                            className="rounded-lg border-1 border-gray-200
                            w-[40px] h-[40px] outline-none text-center"
                            maxLength={1} />
                    </div>

                    <p>
                        120
                    </p>

                    <button
                            type="submit"
                            className="w-[50%] h-[50px] mt-10
                            rounded-xl bg-[#e33b41] uppercase
                            text-white cursor-pointer">
                        Continue
                    </button>

                </form>

            </section>

        </>
    )
};

