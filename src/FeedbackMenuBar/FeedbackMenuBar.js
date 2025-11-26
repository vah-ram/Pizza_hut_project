import React from "react";
import { useNavigate } from "react-router-dom";

function FeedbackMenuBar() {
  const navigate = useNavigate();

  const closeMenuBar = () => {
    const body = document.querySelector("body");
    body.classList.remove("menuActive");
  };

  return (
    <>
      <div
        className="w-[300px] h-full fixed bg-white flex flex-col
                right-[-300px] z-[200] absolute top-0 shadow-lg
                [body.menuActive_&]:translate-x-[-300px]
                 transition duration-300 ease-in-out max-md:mt-[-60px] pl-5
                 [body.dark_&]:bg-[#2e2e2e] max-md:mt-[0px]"
      >
        <button
          className="w-[40px] h-[40px] border-1 border-gray-200
                                    rounded-xl cursor-pointer flex items-center
                                    justify-center cursor-pointer absolute right-[2vmin]
                                    top-[2vmin] [body.dark_&]:border-[#464646]"
          onClick={closeMenuBar}
        >
          <img
            src="https://pizza-hut.am/assets/images/app_2/close.svg"
            className="w-[20px] h-[20px]"
          />
        </button>

        <button
          className="flex gap-2 items-center mt-20 cursor-pointer "
          onClick={() => {
            navigate("/feedback");
            closeMenuBar();
          }}
        >
          <img
            src="https://pizza-hut.am/assets/images/app_2/feedback.svg"
            loading="lazy"
            className="w-[25px] h-[25px]"
          />
          <p
            className="text-[#515151] text-[calc(18px+.3vw)]
                            [body.dark_&]:text-white"
          >
            Feedback
          </p>
        </button>
      </div>
    </>
  );
}

export default FeedbackMenuBar;
