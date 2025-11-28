import React, { useState } from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import MobileMenu from "../MobileMenuBar/MobileMenu";
import axios from "axios";
import { addFeedbackHost } from "../utils/Hosts";
import { useTranslation } from "react-i18next";

function FeedBack({ isMobile, currentUser }) {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [closePartActive, setClosePartActive] = useState(false);

  const addFeedback = async () => {
    if (!email || !description) {
      return;
    }

    try {
      const res = await axios.post(addFeedbackHost, {
        email,
        text: description,
      });

      if (res.status) {
        setEmail("");
        setDescription("");
        setClosePartActive(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const { t } = useTranslation();

  return (
    <>
      {closePartActive ? (
        <div
          className="fixed inset-0 z-[100] bg-black/70 flex
                        items-center justify-center "
        >
          <div
            className="bg-[#646464CC] w-[400px] h-[135px]
                            flex flex-col text-center justify-center items-center
                            gap-7 rounded-lg shadow-lg"
          >
            <p className="text-[16px] text-white">
              Your request has been successfully submitted!
            </p>

            <button
              className="w-[150px] h-[40px] rounded-md
                                flex items-center justify-center
                                text-white bg-[#E33B41] cursor-pointer"
              onClick={() => {
                setClosePartActive(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="w-full h-full max-md:mb-50">
        {isMobile ? (
          ""
        ) : (
          <HeaderMenu isMobile={isMobile} currentUser={currentUser} />
        )}
        <MobileMenu />

        <div
          className="mt-[80px] flex flex-col
                    items-center my-10 
                    [body.dark_&]:bg-[#2e2e2e]"
        >
          <h2 className="text-[#515151] text-[28px] [body.dark_&]:text-white">
            {t("feedback_request_title")}
          </h2>

          <form
            className="flex flex-col gap-2 w-[50%] max-md:w-[90%]"
            onSubmit={(evt) => {
              evt.preventDefault();
              addFeedback();
            }}
          >
            <label
              className="text-[#515151] text-[16px] mt-4 [body.dark_&]:text-white"
              htmlFor="feedback_text"
            >
              {t("feedback_select_topic_label")}{" "}
              <b className="text-red-500">*</b>
            </label>

            <select
              className="appearance-none w-full px-3 py-4 rounded-[15px]
                                        border border-[#9d9d9d]
                                        outline-none text-[#515151]"
              defaultValue=""
            >
              <option value="" disabled hidden></option>

              <option value="feedback_list">
                {t("feedback_select_topic_placeholder")}
              </option>
            </select>

            <label
              className="text-[#515151] mt-4 text-[16px]
                             [body.dark_&]:text-white"
              htmlFor="email"
            >
              {t("feedback_email_label")}
            </label>

            <div className="w-full px-3 py-4 rounded-[15px] border-1 border-[#9d9d9d]">
              <input
                type="email"
                className="w-full h-full outline-none border-none
                                   [body.dark_&]:text-white"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                maxLength={50}
                value={email}
              />
            </div>

            <label
              className="text-[#515151] mt-4 text-[16px] [body.dark_&]:text-white"
              htmlFor="description_text"
            >
              {t("feedback_description_label")}
            </label>

            <div className="w-full h-[132px] p-2 rounded-[15px] border-1 border-[#9d9d9d]">
              <textarea
                className="w-full h-full outline-none border-none
                                     [body.dark_&]:text-white"
                name="description_text"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                maxLength={200}
                value={description}
              />
            </div>

            <label
              className="w-auto mr-auto h-[40px] flex items-center
                            justify-center bg-[#E33B41] cursor-pointer
                            rounded-xl text-[calc(14px+.3vw)] mt-2 px-4 text-white"
            >
              {t("feedback_attach_files_button")}
              <input type="file" className="hidden" />
            </label>

            <button
              type="submit"
              className="w-full px-3 py-4 rounded-[15px] bg-[#E33B41]
                            text-white cursor-pointer mt-12 opacity-60"
            >
              {t("feedback_button_text")}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FeedBack;
