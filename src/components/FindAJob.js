import React from "react";
import { AiOutlineSearch} from "react-icons/ai"
const FindAJob = () => {
    return (
        
        <div className="flex grid  bg-blue-900 rounded-full p-12 max-w-[1550px] h-[200px]">
            <p className=" flex text-3xl font-bold  text-white  ">Find your dream job</p>
            <div className="text-xl flex justify-between items-center rounded-full  bg-gray-200 p-[10px] shadow-lg shadow-greyIsh-700">
                <div className="flex gap-3 items-end ">
                <AiOutlineSearch className="text-[30px] icon  text-gray-500"/>
                <input type="text" className=" focus:outline-none w-[100%] bg-transparent" placeholder="Find a job here..." /> 
                </div>
                <button  className="bg-blue-800 p-[5px] rounded-[15px] hover:bg-blue-400">
                    <p className="text-white font-semibold text-sm">Search</p>
                </button>
            </div>

        </div>
    )
}
export default FindAJob;