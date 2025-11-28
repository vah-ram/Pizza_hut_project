import { useNavigate } from "react-router-dom";

export default function CatalogItemTable({ isMobile, setMenuTask }) {
  const navigate = useNavigate();

  return (
    <div
      className="w-full mt-3 gap-2 
                    flex flex-row justify-start 
                    items-center relative  
                    border-b-1 border-gray-300 before:content-['-30%']
                    before:absolute before:top-0 before:z-[1] 
                    before:w-[80px] before:h-[30px] before:bg-[#f33]
                    before:text-white before:flex before:justify-center
                     before:items-center before:rounded-tr-[2px] 
                     before:rounded-br-[8px] before:text-[16px] 
                     max-md:before:rounded-tl-[2vw] 
                     max-md:before:rounded-br-[30px] 
                     max-md:before:bg-[#e33b41]"
      onClick={() => {
        isMobile ? setMenuTask(true) : navigate(`/catalog/hi`);
      }}
    >
      <span
        className="w-[30vw] h-[30vw] 
         rounded-[6vw] rounded-tl-[2vw] 
         mb-[17px] shrink-0 border-1 
         border-[#ebebeb]"
      >
        <img
          src="https://bonee.blob.core.windows.net/images/a0bcdc66-7da3-0c1a-3887-396ce30bd05a_2.webp"
          className="w-full h-full 
          duration-700 rounded-[6vw] rounded-tl-[2vw]"
          alt="slider item img"
        />
      </span>

      <div className="flex flex-col relative w-full h-[30vw]">
        <h2
          className="absolute top-0 left-0 text-[#515151] 
          font-[600] text-[calc(14px+.3vw)]"
        >
          Combo Pepperoni
        </h2>

        <span
          className="absolute bottom-0 flex 
        flex-col"
        >
          <p
            className="text-[#9d9d9d] line-through font-[400]  
          text-[calc(12px+.3vw)]"
          >
            4,500
          </p>

          <p
            className="text-[#FF3333] font-[600] 
            text-[calc(12px+.3vw)]"
          >
            3,000
          </p>
        </span>

        <button className="absolute right-0 bottom-0 
        text-[calc(12px+.3vw)] bg-[#e33b41] text-white uppercase  
        p-[7px] min-w-[70px] h-[34px] flex items-center justify-center border-none 
        cursor-pointer rounded-[10px]">
          Add
        </button>
      </div>
    </div>
  );
}
