import { useNavigate } from "react-router-dom";

export default function CatalogItem({ isMobile, setMenuTask }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="w-full mt-7 max-md:mt-3  
                     flex flex-col justify-start
                    items-center relative rounded-[15px] 
                    max-md:rounded-[5vw] border-1 border-gray-300 before:content-['-30%']
                    before:absolute before:z-1 before:left-0 before:top-[25px]
                    before:w-[80px] before:h-[30px] before:bg-[#f33]
                    before:text-white before:flex before:justify-center
                     before:items-center before:rounded-tr-[8px]
                     before:rounded-br-[8px] before:text-[16px] cursor-pointer 
                     max-md:before:top-[-.5px] max-md:before:left-[-.5px] 
                     max-md:before:rounded-tl-[30px] 
                     max-md:before:rounded-br-[30px] 
                     max-md:before:bg-[#e33b41]"
        onClick={() => {
          isMobile ? setMenuTask(true) : navigate(`/catalog/hi`);
        }}
      >
        <span
          className="max-md:w-full 
         rounded-[15px] overflow-hidden group"
        >
          <img
            src="https://bonee.blob.core.windows.net/images/a0bcdc66-7da3-0c1a-3887-396ce30bd05a_2.webp"
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
            Combo Pepperoni
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
            8,800
          </p>

          <p
            className="text-[#9d9d9d] line-through 
          text-[calc(14px+.3vw)"
          >
            11,000
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
              8,800
            </p>

            <p className="text-[#9d9d9d] text-[12px] line-through">11,000</p>
          </button>

          <button
            className="w-[50%] cursor-pointer bg-[#e33b41]
                          flex justify-center items-center gap-2 hover:opacity-90"
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
