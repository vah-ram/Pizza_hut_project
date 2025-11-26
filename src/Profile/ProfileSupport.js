import React from "react";

function ProfileSupport() {
    return (
        <>
            <div className="w-full flex flex-col mt-3 pl-[3vw] pt-10 max-md:pt-0 max-md:mt-0">
                <h2
                    className="text-[#515151] font-[500] text-[calc(16px+.3vw)]">
                    If you need any support contuct us
                </h2>

                <div className="flex flex-col gap-3 mt-5">

                    <a
                        href="tel:060505505"
                        className="w-full flex items-center p-[15px]
                            border-1 border-[#ebebeb] rounded-[15px] gap-2">
                        <img
                            src="https://pizza-hut.am/assets/images/app_2/phones.svg"
                            className="w-[20px] h-[24px]"
                            alt=""/>

                        <p className="text-[#515151] text-[16px]">
                            060505505
                        </p>
                    </a>

                    <a
                        href="mailto:delivery@derjavas.am"
                        className="w-full flex items-center p-[15px]
                            border-1 border-[#ebebeb] rounded-[15px] gap-2">
                        <img
                            src="	https://pizza-hut.am/assets/images/app_2/email.svg"
                            className="w-[20px] h-[24px]"
                            alt=""/>

                        <p className="text-[#515151] text-[16px]">
                            delivery@derjavas.am
                        </p>
                    </a>

                </div>
            </div>
        </>
    )
};

export default ProfileSupport;