import { useState } from "react";
import axios from "axios";
import { deleteProductToBasketHost } from "../utils/Hosts";

function BasketItem({ item, currentUser, currentLang, setDeletedItem }) {
  const [basketInt, setBasketInt] = useState(1);
  const [isDeleting, setIsDeleting] = useState(null);

  const deleteBasketItemFunc = async () => {
    if (!item || !currentUser) return;

    const res = await axios.delete(deleteProductToBasketHost, {
      data: {
        myId: currentUser.id,
        productId: item.id,
      },
    });

    if (res.status) {
      setDeletedItem(item);
    }
  };

  return (
    <>
      {isDeleting ? (
        <div
          className="fixed inset-0 z-[150] bg-black/50 flex
              items-center justify-center max-md:hidden "
        >
          <div
            className="bg-[#646464cc] w-[80vw] max-w-[400px] 
            rounded-[6px] h-auto p-[15px] flex flex-col gap-4"
          >
            <p
              className="text-center flex justify-center items-center 
            text-[16px] text-[#fff]"
            >
              Are you sure you want to delete this product from Basket?
            </p>

            <div
              className="w-full flex items-center
             justify-center gap-4"
            >
              <button
                className="bg-[#e33b41] rounded-[4px] min-w-[100px] 
                text-[#fff] font-[700] p-[4px] cursor-pointer"
                onClick={() => {
                  deleteBasketItemFunc();
                  setIsDeleting(false);
                }}
              >
                Yes
              </button>

              <button
                className="bg-[#e33b41] rounded-[4px] min-w-[100px] 
                text-[#fff] font-[700] p-[4px] cursor-pointer"
                onClick={() => setIsDeleting(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        className="flex py-[15px] border-b-1 border-[#ebebeb] 
      [body.dark_&]:border-[#FFF4]"
      >
        <span
          className={`flex w-40 h-40 bg-[url('${item?.image_url}')] 
                    bg-cover rounded-[25px] shrink-0`}
        />

        <div className="w-full flex justify-between px-[15px] relative">
          <h2
            className="text-[#515151] text-[calc(12px+.3vw)] 
                        uppercase font-[600] [body.dark_&]:text-white"
          >
            {currentLang === "en"
              ? item?.title
              : currentLang === "ru"
              ? item?.title_ru
              : currentLang === "am"
              ? item?.title_am
              : ""}
          </h2>

          <ul className="h-full flex items-center gap-[5vw]">
            <li className="max-md:absolute right-0 bottom-0">
              <div
                className="flex gap-[16px] text-[calc(20px+.3vw)] 
                            items-center max-md:bg-[#e8f0fa] 
                            max-md:rounded-[12px]"
              >
                <button
                  className="cursor-pointer text-[#e33b41] max-md:text-white max-md:bg-[#e33b41] 
                  max-md:w-[34px] max-md:h-[34px] max-md:rounded-[12px] 
                  [body.dark_&]:text-white"
                  onClick={(evt) => {
                    evt.preventDefault();
                    setBasketInt((prev) => Math.max(1, prev - 1));
                  }}
                >
                  –
                </button>

                <p
                  className="text-[calc(12px+.3vw)] max-md:text-[#e33b41] 
                font-[500] [body.dark_&]:text-white [body.dark_&]:max-md:text-[#e33b41]"
                >
                  {basketInt}
                </p>

                <button
                  className="cursor-pointer text-[#e33b41] max-md:text-white max-md:bg-[#e33b41] 
                  max-md:w-[34px] max-md:h-[34px] max-md:rounded-[12px] 
                  [body.dark_&]:text-white"
                  onClick={(evt) => {
                    evt.preventDefault();
                    setBasketInt((prev) => prev + 1);
                  }}
                >
                  +
                </button>
              </div>
            </li>

            <li className="max-md:absolute left-[15px] bottom-0">
              <p
                className="text-[calc(12px+.3vw)] font-[600] 
                            text-[#515151] [body.dark_&]:text-white"
              >
                {item?.price.toLocaleString()}
              </p>
            </li>

            <li>
              <button
                className="w-[30px] h-[30px] rounded-[6px] 
                                border-1 border-[#ebebeb] flex items-center 
                                justify-center cursor-pointer 
                                max-md:hidden"
                onClick={() => setIsDeleting(true)}
              >
                <img
                  src="https://pizza-hut.am/assets/images/app_2/close.svg"
                  className="w-[8px]"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default BasketItem;
