import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginHost } from "../utils/Hosts";
import { toast, Toaster } from "sonner";
import axios from "axios";
import MobileMenu from "../MobileMenuBar.js/MobileMenu";

function Login() {
    const navigate = useNavigate();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ showPassword, setShowPassword ] = useState(false);

    const addData = async() => {

        if(!email || !password) {

            toast.error("Please write all fields!!!", {
                position: "bottom-right",
                duration: 3000
            });

            return;
        }

        try {
            const res = await axios.get(loginHost, {
                params: { email, password }
            });

            if(res.data.status) {
                localStorage.setItem("token", res.data.token);
                navigate('/');
            } else {
                toast.error(res.data.message, {
                    position: "bottom-right",
                    duration: 3000
                });

                return;
            }
        } catch(error) {
            console.error(error)
        }

    }

    return (
            <>
                <MobileMenu />

            <section className="w-full h-[100vh] flex bg-[#e33b41] max-md:bg-white">
                <div className="w-[50%] h-full flex
                flex-col justify-center items-center relative
                bg-[url('https://pizza-hut.am/assets/images/app_2/loginBackground.svg')] bg-cover bg-center
                max-md:hidden">
                    <button
                            className="cursor-pointer flex gap-2
                            items-center absolute left-[4vw] top-[4vw]"
                            onClick={() => navigate('/')}
                            name="back button">
                        <img
                            src="https://pizza-hut.am/assets/images/app_2/arrowWhite.svg"
                            className="w-[10px] h-[10px]"/>

                        <p className="text-white text-[14px]">
                            Main page
                        </p>
                    </button>

                    <div className="flex flex-col gap-[10rem] items-center">
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
                            Register and get access on all services with one account
                        </p>

                        <button
                                className="w-full h-[54px] px-3 py-4 rounded-2xl
                                flex items-center justify-center shadow-lg
                                shadow-[#0000004d] cursor-pointer"
                                onClick={() => navigate('/signUp')}>
                            <p className="uppercase text-white text-[16px] font-sans">
                                Register
                            </p>
                        </button>
                    </div>
                </div>

                <form
                    className="w-[50%] h-full bg-white flex
                    flex-col justify-center items-center relative max-md:w-full"
                    onSubmit={(evt) => {
                        evt.preventDefault()
                        addData()
                    }}>
                    <h2 className="text-[21px] text-[#515151] font-[600] uppercase">
                        Authorization
                    </h2>

                    <p className="text-[17px] text-[#9D9D9D] font-[600]">
                        You can log in with Bonee account
                    </p>

                    <div className="w-[60%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                    border border-1 border-gray-200 max-lg:w-[80%]">
                        <img src="/Img/email-icon.png" alt="Email"/>
                        <input
                            type="email"
                            placeholder="Email"
                            className="border-none outline-none w-full"
                            maxLength={50}
                            onChange={(evt) => setEmail(evt.target.value)}/>
                    </div>

                    <div className="w-[60%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                    border border-1 border-gray-200 max-lg:w-[80%]">
                        <img src="/Img/password-icon.png" alt="Email"/>
                        <input
                            type={`${showPassword ? 'text' : 'password'}`}
                            placeholder="Password"
                            className="border-none outline-none w-full"
                            maxLength={50}
                            onChange={(evt) => setPassword(evt.target.value)}/>
                        <button
                                className="w-[22px] h-[22px] cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}>
                            <img
                                src="https://pizza-hut.am/assets/images/app_2/showPassword.svg"
                                className="w-full h-full"
                            />
                        </button>
                    </div>

                    <a
                        href="/reset-password"
                        className="text-[15px] text-[#e33b41] font-[600] ml-auto mr-[20%] mt-7">
                        Forgot your Password?
                    </a>

                    <button
                            type="submit"
                            className="w-[60%] mt-5 flex gap-5 items-center justify-center
                            px-3 py-4 rounded-[12px] bg-[#e33b41] cursor-pointer hover:opacity-90
                             max-lg:w-[80%]">
                        <p className="uppercase text-white text-[16px] font-sans">
                            Log in
                        </p>
                    </button>

                    <div className="w-[60%] flex items-center mt-2 max-lg:w-[80%]">
                        <span className="w-full h-[1px] bg-gray-300"/>
                        <p className="text-[16px] m-4">OR</p>
                        <span className="w-full h-[1px] bg-gray-300"/>
                    </div>

                    <button className="w-[60%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                    border border-1 border-gray-200 relative cursor-pointer max-lg:w-[80%]">
                        <img
                            src="/Img/google-social-icon.png"
                            className="w-[30px] h-[30px]"
                            alt="Email"/>

                        <p className="uppercase">
                            Continue with google
                        </p>

                        <img
                            src="https://pizza-hut.am/assets/images/app_2/arrowLightGrey.svg"
                            className="rotate-[180deg] w-[15px] h-[15px] absolute right-5"/>
                    </button>

                    <button className="w-[60%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                    border border-1 border-gray-200 relative cursor-pointer max-lg:w-[80%]">
                        <img
                            src="/Img/guest-icon.png"
                            className="w-[30px] h-[30px]"
                            alt="Email"/>

                        <p className="uppercase">
                            Continue as a guest
                        </p>

                        <img
                            src="https://pizza-hut.am/assets/images/app_2/arrowLightGrey.svg"
                            className="rotate-[180deg] w-[15px] h-[15px] absolute right-5"/>
                    </button>

                </form>
            </section>

                <Toaster richColors />
        </>
    )
};

export default Login;
