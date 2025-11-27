import { useNavigate } from "react-router-dom";

export default function CatalogItem({ isMobile, setMenuTask }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="w-full mt-7 
                     flex flex-col justify-start
                    items-center relative rounded-[30px] 
                    border-1 border-gray-300 before:content-['-30%']
                    before:absolute before:z-1 before:left-0 before:top-[25px]
                    before:w-[80px] before:h-[30px] before:bg-[#f33]
                    before:text-white before:flex before:justify-center
                     before:items-center before:rounded-tr-[8px]
                     before:rounded-br-[8px] before:text-[16px] cursor-pointer"
        onClick={() => {
          isMobile ? setMenuTask(true) : navigate(`/catalog/hi`);
        }}
      >
        <span className="max-md:w-full 
         rounded-[20px] overflow-hidden group">
          <img
            src="https://bonee.blob.core.windows.net/images/a0bcdc66-7da3-0c1a-3887-396ce30bd05a_2.webp"
            className="group-hover:scale-110 duration-500"
            alt="slider item img"
          />
        </span>

        <div className="w-full h-auto flex justify-center items-center mt-2">
          <p
            className="[body.dark_&]:text-white text-[#515151] font-[600]
                                 text-[18px] uppercase mt-3 mb-10"
          >
            Combo Pepperoni
          </p>
        </div>

        <div className="w-[90%] h-[44px] absolute bottom-[-22px] rounded-[10px] flex overflow-hidden">
          <button className="w-[50%] cursor-pointer bg-[#3d3d3d]">
            <p className="text-[#e33b41] text-[17px] font-[800] font-sans leading-[15px]">
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
