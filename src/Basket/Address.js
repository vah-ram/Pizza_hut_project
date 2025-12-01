import { useNavigate } from "react-router-dom"

export default function Address({ setAddressActive }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="fixed inset-0 z-[150] bg-black/45 flex
                items-center justify-center"
      >
        <div
          className="w-[50vw] max-w-[500px] p-[15px] rounded-[15px] 
                bg-white relative w-full 
                max-sm:max-w-full max-md:rounded-[6vw] 
                pb-5 mt-auto 
                [body.dark_&]:bg-[#2e2e2e]"
        >
          <button
            className="w-[40px] h-[40px] flex items-center justify-center
                        border-1 border-gray-200 rounded-xl outline-none absolute left-5
                        cursor-pointer"
            onClick={() => setAddressActive(false)}
          >
            <img
              src="https://pizza-hut.am/assets/images/app_2/close.svg"
              className="w-[30%]"
            />
          </button>

          <button
            className="w-full max-h-[60px] bg-[#e33b41] 
            mt-15 p-[15px] 
            rounded-[15px] flex items-center 
            justify-center gap-5 cursor-pointer 
            hover:opacity-80" 
            onClick={() => navigate('/location')}
          >

            <p 
                className="uppercase text-white">
                     + Add Address
            </p>

          </button>

        </div>
      </div>
    </>
  );
}
