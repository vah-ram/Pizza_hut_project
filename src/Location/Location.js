import { Link } from "react-router-dom";

export default function Location() {
  return (
    <>
      <section
        className="w-full h-[100vh] bg-white 
            flex"
      >
        <div
          className="w-[50%] h-full 
                bg-white max-md:w-full p-[4vw] 
                flex flex-col"
        >
          <span className="flex gap-5">
            <Link to="/" className="text-[calc(10px+.3vw)]">
              Main page
            </Link>

            <img
              src="https://pizza-hut.am/assets/images/app_2/arrow.svg"
              className="w-[6px] rotate-[180deg]"
            />

            <Link to="/basket" className="text-[calc(10px+.3vw)]">
              Basket
            </Link>

            <img
              src="https://pizza-hut.am/assets/images/app_2/arrow.svg"
              className="w-[6px] rotate-[180deg]"
            />

            <Link
              className="text-[calc(10px+.3vw)] 
                        text-[#e33b41] cursor-default"
            >
              Add Address
            </Link>
          </span>

          <h2
            className="text-[calc(18px+.3vw)] uppercase 
                        max-md:text-[calc(16px+.3vw)] text-[#515151]"
          >
            Add Address
          </h2>

          <div className="w-full flex gap-2 items-center">
            <button
              className="w-[45%] px-[15px] py-[10px] 
                         border-1 border-[#ebebeb] text-[calc(14px+.3vw)] 
                        text-[#9d9d9d] rounded-[12px] cursor-pointer"
            >
              Search by address
            </button>

            <p className="uppercase">or</p>

            <button
              className="w-[45%] px-[15px] py-[10px] 
                         border-1 border-[#ebebeb] text-[calc(14px+.3vw)] 
                        text-[#9d9d9d] rounded-[12px] cursor-pointer"
            >
              Mark on the map
            </button>
          </div>

          <div
            className="px-[15px] py-[10px] 
                         border-1 border-[#ebebeb]  
                         rounded-[12px]"
          >
            <input
              type="text"
              placeholder="Enter street name and building number"
              className="w-full text-[calc(10px+.3vw)] 
                            border-none outline-none"
            />
          </div>

          <label
            className="text-[calc(10px+.3vw)] 
           text-[#515151]"
          >
            Additional instructions for the courier
          </label>

          <textarea
            className="px-[15px] py-[10px] 
                         border-1 border-[#ebebeb] 
                         outline-none rounded-[12px] 
                         text-[calc(10px+.3vw)] min-h-[100px]"
            placeholder="Entrance / floor / appartment / entrance code / other."
          ></textarea>

          <ul className="flex gap-3 w-full">
            <li className="w-full">
              <button
                className="w-full gap-2  
                    flex justify-center items-center 
                    p-[8px] rounded-[12px] border-1 border-[#ebebeb] 
                    cursor-pointer"
              >
                <img src="" />
                <p>Home</p>
              </button>
            </li>
            <li className="w-full">
              <button
                className="w-full gap-2  
                    flex justify-center items-center 
                    p-[8px] rounded-[12px] border-1 border-[#ebebeb] 
                    cursor-pointer"
              >
                <img src="" />
                <p>Work</p>
              </button>
            </li>
            <li className="w-full">
              <button
                className="w-full gap-2  
                    flex justify-center items-center 
                    p-[8px] rounded-[12px] border-1 border-[#ebebeb] 
                    cursor-pointer"
              >
                <img src="" />
                <p>Other</p>
              </button>
            </li>
          </ul>
        </div>

        <div className="w-[50%] h-full max-md:hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563416.714472416!2d43.71882285162848!3d40.06318082537997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40155684e773bac7%3A0xd0b4757aeb822d23!2z0JDRgNC80LXQvdC40Y8!5e0!3m2!1sru!2sam!4v1764513359243!5m2!1sru!2sam"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
