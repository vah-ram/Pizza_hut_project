import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { registerHost } from "../utils/Hosts.js";
import { Toaster, toast } from "sonner";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        surname: "",
        phoneNumber: null,
        email: "",
        password: "",
        confirmPassword: "",
    });

    const addData = async () => {

        if(!user.name || !user.surname || !user.phoneNumber || !user.email || !user.password || !user.confirmPassword) {
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
                phonenumber: user.phoneNumber,
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

    return (
        <>
            <section className="w-full h-[100vh] flex bg-[#e33b41]">
                <div className="w-[50%] h-full flex
                flex-col justify-center items-center relative bg-[url('https://pizza-hut.am/assets/images/app_2/loginBackground.svg')] bg-cover bg-center">
                    <button
                        className="cursor-pointer flex gap-2
                            items-center absolute left-20 top-20"
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
                            onClick={() => navigate('/signIn')}>
                            <p className="uppercase text-white text-[16px] font-sans">
                                Log in
                            </p>
                        </button>
                    </div>
                </div>

                <form
                    className="w-[50%] h-full bg-white flex
                    flex-col justify-center items-center relative"
                    onSubmit={(evt) => {
                        evt.preventDefault()
                        addData()
                    }}>
                    <h2 className="text-[21px] text-[#515151] font-[600] uppercase">
                        Registration
                    </h2>

                    <div className="w-[60%] flex gap-2">

                        <div className="w-[50%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                            border border-1 border-gray-200">
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
                            border border-1 border-gray-200">
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

                    <div className="w-[60%] flex gap-2">

                        <div className="w-[20%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                            border border-1 border-gray-200">
                            <input
                                type="number"
                                placeholder="+374"
                                className="border-none outline-none w-full"
                                maxLength={50}/>
                        </div>

                        <div className="w-[80%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                            border border-1 border-gray-200">
                            <input
                                type="number"
                                placeholder="Phone Number"
                                className="border-none outline-none w-full"
                                maxLength={50}
                                onChange={e => setUser({
                                    ...user,
                                    phoneNumber: e.target.value
                                })}/>
                        </div>
                    </div>

                    <div className="w-[60%] mt-5 flex gap-5 items-center px-3 py-3 rounded-[15px]
                    border border-1 border-gray-200">
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
                    border border-1 border-gray-200">
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
                    border border-1 border-gray-200">
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

                    <div className="flex gap-2 mr-auto ml-[20%] mt-5 cursor-pointer">
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

                    <button className="w-[60%] mt-10 flex gap-5 items-center justify-center
                    px-3 py-4 rounded-[12px] bg-[#e33b41] cursor-pointer hover:opacity-90">
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
