import React from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import MobileMenu from "../MobileMenuBar.js/MobileMenu";

function FeedBack({ isMobile }) {
    return (
        <>
            <div className="w-full h-full max-md:mb-50 p-10">
                {
                    isMobile ? '' : <HeaderMenu />
                }
                <MobileMenu />

                <form className="mt-[80px] flex flex-col items-center mt-10">
                    <h2 className="text-[#515151] text-[28px] [body.dark_&]:text-white">
                        Submit a request
                    </h2>

                    <form
                            className="flex flex-col gap-2 w-[50%] max-md:w-[90%]"
                            onSubmit={(e) => e.preventDefault()}>
                        <label
                            className="text-[#515151] text-[16px] mt-4 [body.dark_&]:text-white"
                            htmlFor="feedback_text">
                            Please select a topic <b className="text-red-500">*</b>
                        </label>

                        <div className="w-full px-3 py-4 rounded-[15px] border-1 border-[#9d9d9d]">
                            <input
                                    type="text"
                                    placeholder="Set Feedback messages"
                                    className="w-full h-full outline-none border-none
                                     [body.dark_&]:text-white"
                                    name="feedback_text"/>
                        </div>

                        <label
                            className="text-[#515151] mt-4 text-[16px]
                             [body.dark_&]:text-white"
                            htmlFor="email">
                            Email
                        </label>

                        <div className="w-full px-3 py-4 rounded-[15px] border-1 border-[#9d9d9d]">
                            <input
                                type="email"
                                className="w-full h-full outline-none border-none
                                 [body.dark_&]:text-white"
                                name="email"/>
                        </div>

                        <label
                            className="text-[#515151] mt-4 text-[16px] [body.dark_&]:text-white"
                            htmlFor="description_text">
                            Description
                        </label>

                        <div className="w-full h-[132px] p-2 rounded-[15px] border-1 border-[#9d9d9d]">
                            <textarea
                                className="w-full h-full outline-none border-none
                                 [body.dark_&]:text-white"
                                name="description_text"/>
                        </div>

                        <label className="w-auto mr-auto h-[40px] flex items-center
                            justify-center bg-[#E33B41] cursor-pointer
                            rounded-xl text-[calc(14px+.3vw)] mt-2 px-4 text-white">
                             Attach File(s) (jpg, jpeg, png)
                            <input type="file" className="hidden"/>
                        </label>

                        <button
                            type="submit"
                            className="w-full px-3 py-4 rounded-[15px] bg-[#E33B41]
                            text-white cursor-pointer mt-12">
                            Submit
                        </button>

                    </form>
                </form>
            </div>
        </>
    );
};

export default FeedBack;