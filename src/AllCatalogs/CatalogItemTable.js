import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import i18next from "i18next";
import { addProductToBasketHost } from "../utils/Hosts"
import axios from "axios";

export default function CatalogItemTable({ isMobile, setMenuTask, item, currentUser, setCurrentProduct }) {
  const navigate = useNavigate();
  const [currentLang, setCurrentLang] = useState(i18next.language);
  const dineIn = localStorage.getItem("dine_in");

  useEffect(() => {
    setCurrentProduct(item)
  }, [item]);

  useEffect(() => {
    const onLangChange = (lng) => {
      setCurrentLang(lng);
    };

    i18next.on("languageChanged", onLangChange);

    return () => i18next.off("languageChanged", onLangChange);
  }, []);

  const addBasketFunc = async() => {

      if(!currentUser) {
        return;
      };

      await axios.post(addProductToBasketHost, {
          myId: currentUser?.id,
          productId: item.id,
          type: dineIn
      });

  }

  return (
    <div
      className={`w-full mt-3 gap-2 
                    flex flex-row justify-start 
                    items-center relative  
                    border-b-1 border-gray-300 
                    before:content-['${
                      item?.sale_percent ? 
                      '-' + item?.sale_percent + '%' : 
                      ''
                    }']
                    before:absolute before:top-0 before:z-[1] 
                    before:w-[80px] before:h-[30px] before:bg-[#f33]
                    before:text-white before:flex before:justify-center
                     before:items-center before:rounded-tr-[2px] 
                     before:rounded-br-[8px] before:text-[16px] 
                     max-md:before:rounded-tl-[2vw] 
                     max-md:before:rounded-br-[30px] 
                     max-md:before:bg-[#e33b41] 
                     [body.dark_&]:border-[#FFF4] 
                     ${item?.sale_percent === 0 ? 
                      'before:hidden' :
                      ''
                     }`}
              onClick={() => {
              if (isMobile) {
                setCurrentProduct(item);
                setMenuTask(true);
              } else {
                navigate(`/catalog/${item.id}`);
              }
            }}

    >
      <span
        className="w-[30vw] h-[30vw] 
         rounded-[6vw]  
         mb-[17px] shrink-0 border-1 
         border-[#ebebeb] [body.dark_&]:border-[#FFF4]"
      >
        <img
          src={item?.image_url}
          className="w-full h-full 
          duration-700 rounded-[6vw] rounded-tl-[2vw]"
          alt="slider item img"
        />
      </span>

      <div className="flex flex-col relative w-full h-[30vw]">
        <h2
          className="absolute top-0 left-0 text-[#515151] 
          font-[600] text-[calc(14px+.3vw)] [body.dark_&]:text-white"
        >
          {currentLang === "en"
              ? item?.title
              : currentLang === "ru"
              ? item?.title_ru
              : currentLang === "am"
              ? item?.title_am
              : ""
            }
        </h2>

        <span
          className="absolute bottom-0 flex 
        flex-col"
        >
          <p
            className="text-[#9d9d9d] line-through font-[400]  
          text-[calc(12px+.3vw)]"
          >
           {
            item?.old_price === 0 
            ?
            ''
            :
            item?.old_price.toLocaleString()
           }
          </p>

          <p
            className="text-[#FF3333] font-[600] 
            text-[calc(12px+.3vw)]"
          >
            {item?.price.toLocaleString()}
          </p>
        </span>

        <button 
          className="absolute right-0 bottom-0 
          text-[calc(12px+.3vw)] bg-[#e33b41] text-white uppercase  
          p-[7px] min-w-[70px] h-[34px] flex items-center justify-center border-none 
          cursor-pointer rounded-[10px]" 
          onClick={() => {
            if (isMobile) {
              addBasketFunc()
              setCurrentProduct(item);
              setMenuTask(true);
            } else {
              navigate(`/catalog/${item.id}`);
            }
          }}>
          Add
        </button>
      </div>
    </div>
  );
}
