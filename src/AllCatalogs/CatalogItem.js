import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addProductToBasketHost } from "../utils/Hosts"

export default function CatalogItem({ isMobile, setMenuTask, item, currentUser }) {
  const navigate = useNavigate();

  const addBasketFunc = async() => {

    if(!currentUser) {
      return
    };

    const res = await axios.post(addProductToBasketHost, {
        myId: currentUser?.id,
        productId: item.id
    })

  }

  return (
    <>
      <div
        className={`w-full mt-7 max-md:mt-3  
                     flex flex-col justify-start
                    items-center relative rounded-[15px] 
                    max-md:rounded-[5vw] border-1 border-gray-300 before:content-['-${item?.sale_percent}%']
                    before:absolute before:z-1 before:left-0 before:top-[25px]
                    before:w-[80px] before:h-[30px] before:bg-[#f33]
                    before:text-white before:flex before:justify-center
                     before:items-center before:rounded-tr-[8px]
                     before:rounded-br-[8px] before:text-[16px] cursor-pointer 
                     max-md:before:top-[-.5px] max-md:before:left-[-.5px] 
                     max-md:before:rounded-tl-[25px] 
                     max-md:before:rounded-br-[30px] 
                     max-md:before:bg-[#e33b41] 
                     [body.dark_&]:border-[#FFF4] 
                     ${item?.sale_percent === 0 ? 
                      'before:hidden' :
                      ''
                     }`}

        onClick={() => {
          isMobile ? setMenuTask(true) : navigate(`/catalog/${item.id}`);
        }}
      >
        <span
          className="max-md:w-full max-h-[30vh] 
         rounded-[15px] overflow-hidden group"
        >
          <img
            src={item.image_url}
            className="group-hover:scale-110 duration-500"
            alt="slider item img"
          />
        </span>

        <div className="w-full h-auto flex justify-center items-center mt-2">
          <p
            className="[body.dark_&]:text-white text-[#515151] font-[600]
                                 text-[18px] uppercase mt-3 mb-10 max-md:mb-3 
                                 text-center max-md:mt-0"
          >
            {item.title}
          </p>
        </div>

        <span
          className="hidden max-md:flex mb-3 items-center 
            gap-2"
        >
          <p
            className="text-[#e33b41] text-[17px] font-[800] 
           leading-[15px] max-md:text-[#FF3333]"
          >
            {item.price}
          </p>

          <p
            className="text-[#9d9d9d] line-through 
          text-[calc(14px+.3vw)"
          >
            {
              item.old_price === 0 ? '' : item.old_price
            }
          </p>
        </span>

        <button
          className="w-[90%] 
          hidden max-md:flex text-[calc(12px+.3vw)] bg-[#e33b41] 
          rounded-[3vw] text-white py-[7px] 
          items-center justify-center mb-[10px] 
          uppercase cursor-pointer"
        >
          Add
        </button>

        <div
          className="w-[90%] h-[44px] absolute bottom-[-22px] rounded-[10px] flex overflow-hidden 
        max-md:hidden"
        >
          <button className="w-[50%] cursor-pointer bg-[#3d3d3d]">
            <p className="text-[#e33b41] text-[17px] font-[800] leading-[15px]">
              {item.price}
            </p>

            <p className="text-[#9d9d9d] text-[12px] line-through ">
              {
                item.old_price === 0 ? '' : item.old_price
              }
            </p>

          </button>

          <button
            className="w-[50%] cursor-pointer bg-[#e33b41]
                          flex justify-center items-center gap-2 hover:opacity-90" 
            onClick={(evt) => {
              evt.stopPropagation()
              addBasketFunc()
            }}
          >
            <img
              src="https://www.pizza-hut.am/assets/images/app_2/basketPlus.svg"
              className="w-[22px] h-[30px]"
              alt=""
            />

            <p className="text-white text-[14px]">ADD</p>
          </button>
        </div>
      </div>
    </>
  );
}
