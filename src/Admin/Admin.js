import React, { useEffect } from "react";
import { useNavigate,  } from "react-router-dom";
import axios from "axios";
import AdminProducts from "./AdminProducts";

export default function Admin({ currentUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser?.role !== "Admin") {
      navigate("/");
    }
  }, [currentUser]);

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <section className="flex">
        <div
          className="w-full h-[100vh] flex bg-white 
                p-[4vw]"
        >
          <div className="flex flex-col w-[30vh] h-full">
            <img
              src="https://bonee.blob.core.windows.net/images/b2167a89-02a4-2b85-b68b-efbdc4238980_1.png"
              className="w-[70px] h-[70px] rounded-md"
            />

            <ul className="flex flex-col w-full h-full gap-5 mt-10 
            relative">

              <li
                className="w-full h-[50px] border-b-1 
                                border-[#cacacaff] cursor-pointer 
                                hover:bg-[#cacacaff] p-2 
                                hover:text-[#e33b41]"
              >
                <a className="text-[17px]">Users</a>
              </li>

              <li
                className="w-full h-[50px] border-b-1 
                                border-[#cacacaff] cursor-pointer 
                                hover:bg-[#cacacaff] p-2 
                                hover:text-[#e33b41]"
              >
                <a className="text-[17px]">Orders</a>
              </li>

              <li
                className="w-full h-[50px] border-b-1 
                                border-[#cacacaff] cursor-pointer 
                                hover:bg-[#cacacaff] p-2 
                                hover:text-[#e33b41]"
              >
                <a className="text-[17px]">Feedbacks</a>
              </li>

              <li
                className="w-full h-[50px] border-b-1 
                                border-[#cacacaff] cursor-pointer 
                                hover:bg-[#cacacaff] p-2 
                                hover:text-[#e33b41]"
              >
                <a className="text-[17px]">Products</a>
              </li>

              <button 
                className="w-full absolute bottom-0 flex justify-between  
                cursor-pointer hover:opacity-80" 
                onClick={() => logOut()}>

                    <p>
                        Exit
                    </p>

                    <img  
                        src="https://cdn-icons-png.flaticon.com/512/1286/1286853.png" 
                        className="w-[20px]"/>
              </button>

            </ul>
          </div>

          <div
            className="w-[calc(100%-40vh)] h-[full] bg-[#e33b41] 
                    rounded-lg ml-20 overflow-y-scroll"
          >
            <AdminProducts currentUser={currentUser}/>
          </div>
        </div>
      </section>
    </>
  );
}
