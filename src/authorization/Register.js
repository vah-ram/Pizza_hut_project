import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { registerHost } from "../utils/Hosts.js";
import { Toaster, toast } from "sonner";
import MobileMenu from "../MobileMenuBar.js/MobileMenu";
import intlTelInput from "intl-tel-input";

function Register() {

    const navigate = useNavigate();

    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [ phonecountrycode, setPhonecountrycode ] = useState("");

    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const addData = async () => {

        if(!user.name || !user.surname || !phoneNumber || !user.email || !user.password || !user.confirmPassword) {
            toast.error("Please write all fields!!!", {
                position: "bottom-right",
                duration: 3000
            });

            return;
        };

        if(user.password !== user.confirmPassword) {
            toast.error("Passwords don't match!!!", {
                position: "bottom-right",
                duration: 3000
            });

            return;
        } else if(user.password.length < 6) {
            toast.error("Please write strongest password!!!", {
                position: "bottom-right",
                duration: 3000
            });

            return;
    }

            const res = await axios.post(registerHost, {
                name: user.name,
                surname: user.surname,
                phonenumber: `+${phonecountrycode}${phoneNumber}`,
                email: user.email,
                password: user.password
            });

            if(res.data.status) {
                navigate("/signIn")
            } else {
                toast.error(res.data.message, {
                    position: "bottom-right",
                    duration: 3000
                });
            }

    };

    const phoneInputHandler = (num) => {
        if(num.length > 0) {
            if(num.startsWith("0")) {
                setPhoneNumber(phoneNumber.replace("/^0+/", ""));
            }
        } else {
            return;
        }
    };

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

                    <div className="flex flex-col gap-[10rem] items-center max-lg:p-10">
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
                            onClick={() => navigate('/signIn')}>
                            <p className="uppercase text-white text-[16px] font-sans">
                                Log in
                            </p>
                        </button>
                    </div>
            </div>

                <form
                    className="w-[50%] h-full bg-white flex
                    flex-col justify-center items-center relative max-md:w-full
                    [body.dark_&]:bg-[#2e2e2e] max-md:justify-start max-md:pt-[60px]"
                    onSubmit={(evt) => {
                        evt.preventDefault()
                        addData()
                    }}>

                    <div className="w-full h-[60px] hidden absolute top-0 shadow-md
                        justify-center items-center max-md:flex">
                        <button
                            className="w-[40px] h-[40px] flex items-center justify-center
                                border-1 border-gray-200 rounded-xl outline-none absolute left-5"
                            onClick={() => navigate('/')}>
                            <img
                                src="https://pizza-hut.am/assets/images/app_2/arrow.svg"
                                className="w-[20px] h-[20px]"/>
                        </button>

                        <h2 className="text-[17px] text-[#515151] font-[600] uppercase [body.dark_&]:text-white">
                            Registration
                        </h2>
                    </div>

                    <div className="w-[95%] hidden h-[41px] max-md:flex gap-[2px] mt-2">
                        <button className="w-[50%] uppercase text-[#515151] border-b-2 border-gray-200 text-[19px]
                                font-[600]"
                                onClick={evt => {
                                    evt.preventDefault()
                                    navigate('/signIn')
                                }}>
                            Log in
                        </button>

                        <button className="w-[50%] uppercase text-[#e33b41] border-b-2 text-[19px]
                                font-[600]"
                                onClick={evt => {
                                    evt.preventDefault()
                                    navigate('/signUp')
                                }}>
                            Register
                        </button>
                    </div>

                    <h2 className="text-[21px] text-[#515151] font-[600] uppercase
                    [body.dark_&]:text-white max-md:hidden">
                        Registration
                    </h2>

                    <div className="w-[60%] flex gap-2 max-lg:w-[80%] max-md:w-[95%] max-md:flex-col">

                        <div className="w-[50%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                            border border-1 border-gray-200 max-md:w-full">
                            <input
                                type="text"
                                placeholder="Name"
                                className="border-none outline-none w-full"
                                maxLength={50}
                                onChange={e => setUser({
                                    ...user,
                                    name: e.target.value
                                })}/>
                        </div>

                        <div className="w-[50%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                            border border-1 border-gray-200 max-md:w-full">
                            <input
                                type="text"
                                placeholder="Surname"
                                className="border-none outline-none w-full"
                                maxLength={50}
                                onChange={e => setUser({
                                    ...user,
                                    surname: e.target.value
                                })}/>
                        </div>
                    </div>

                    <div className="w-[60%] flex gap-2 max-lg:w-[80%] max-md:w-[95%]">

                        <div className="w-[20%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                            border border-1 border-gray-200">
                            <input
                                type="tel"
                                id="phone"
                                placeholder="+374"
                                value="+374"
                                className="border-none outline-none w-full"
                                maxLength={50}
                                onChange={(e) => {
                                    setPhonecountrycode(e.target.value)
                                }}/>
                    </div>

                        <div className="w-[80%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                            border border-1 border-gray-200">
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="phone_input border-none outline-none w-full"
                                maxLength={50}
                                value={phoneNumber}
                                onChange={e => {
                                    setPhoneNumber(e.target.value)
                                    phoneInputHandler(e.target.value)
                                }}/>
                        </div>
                    </div>

                    <div className="w-[60%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                    border border-1 border-gray-200 max-lg:w-[80%] max-md:w-[95%]">
                        <input
                            type="email"
                            placeholder="Email"
                            className="border-none outline-none w-full"
                            maxLength={50}
                            onChange={e => setUser({
                                ...user,
                                email: e.target.value
                            })}/>
                    </div>

                    <div className="w-[60%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                    border border-1 border-gray-200 max-lg:w-[80%] max-md:w-[95%]">
                        <input
                            type="password"
                            placeholder="Password"
                            className="border-none outline-none w-full"
                            maxLength={50}
                            onChange={e => setUser({
                                ...user,
                                password: e.target.value
                            })}/>
                    </div>

                    <div className="w-[60%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                    border border-1 border-gray-200 max-lg:w-[80%] max-md:w-[95%]">
                        <input
                            type="password"
                            placeholder="Re-Enter Password"
                            className="border-none outline-none w-full"
                            maxLength={50}
                            onChange={e => setUser({
                                ...user,
                                confirmPassword: e.target.value
                            })}/>
                    </div>

                    <div className="flex gap-2 mr-auto ml-[20%]
                    mt-5 cursor-pointer max-lg:ml-[10%] max-md:ml-[2.5%]">
                        <input type="checkbox"
                               className="appearance-none w-[22px] h-[22px]
                               bg-[#CBD1D8] rounded-md cursor-pointer"/>

                        <p className="text-[15px] text-[#515151] flex gap-2">
                            I read and agree with
                            <a
                                href="/conditions"
                                className="text-[#e33b41] font-[600]">

                                Conditions
                            </a>
                            and
                            <a
                                href="/privacy-policy"
                                className="text-[#e33b41] font-[600]">
                                Privacy Policy
                            </a>
                        </p>
                    </div>

                    <button className="w-[60%] mt-10 flex gap-5
                    items-center justify-center
                    px-3 py-4 rounded-[12px] bg-[#e33b41] cursor-pointer
                    hover:opacity-90 max-lg:w-[80%] max-md:w-[95%] max-md:rounded-[18px]">
                        <p className="uppercase text-white text-[16px] font-sans">
                            Register
                        </p>
                    </button>

                </form>
            </section>

            <Toaster richColors/>
        </>
    )
};

export default Register;
