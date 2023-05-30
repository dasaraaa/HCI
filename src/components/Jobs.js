import React from "react";
import {BiTimeFive} from "react-icons/bi";
import logo1 from "../images/q6X7hdUc.jpeg";
import logo2 from "../images/R.png";
import logo3 from "../images/R (1).png";
import logo4 from "../images/OIP.png";
import logo5 from "../images/NIN-logo.jpg"
import logo6 from "../images/modern-company-logo-design-vector.jpg"
import logo7 from "../images/R (2).png"
import logo8 from "../images/R (3).png"
import FindAJob from "./FindAJob";
const Data= [
    {
        id:1,
        image: logo1,
        title: 'Web Developer',
        time: 'Now',
        location: "Canada",
        desc: "Web developers build websites and ensure they perform reliably and efficiently. Learn more about this critical role in the tech industry and how to get started. ",
        company:"Novac Linus Co."
        
    },
    {
        id:2,
        image: logo2,
        title: 'Software Engineer',
        time: '8Hrs',
        location: "Rome",
        desc: "Web developers build websites and ensure they perform reliably and efficiently. Learn more about this critical role in the tech industry and how to get started. ",
        company:"Apple"
    },
    {
        id:3,
        image: logo3,
        title: 'UI/UX Designer',
        time: '14Hrs',
        location: "Manchester",
        desc: "Web developers build websites and ensure they perform reliably and efficiently. Learn more about this critical role in the tech industry and how to get started. ",
        company:"Liquid Accessments"
    },
    {
        id:4,
        image: logo4,
        title: 'Product Designer',
        time: '14Hrs',
        location: "Manchester",
        desc: "Web developers build websites and ensure they perform reliably and efficiently. Learn more about this critical role in the tech industry and how to get started. ",
        company:"Web Tech Agency"
    },
    {
        id:5,
        image: logo5,
        title: 'Lead Developer',
        time: '10Hrs',
        location: "Turkey",
        desc: "Web developers build websites and ensure they perform reliably and efficiently. Learn more about this critical role in the tech industry and how to get started. ",
        company:"Nome and Sons"
    },
    {
        id:6,
        image: logo6,
        title: 'Data Scientist',
        time: 'Now',
        location: "Norway",
        desc: "Web developers build websites and ensure they perform reliably and efficiently. Learn more about this critical role in the tech industry and how to get started. ",
        company:"Nin Co."
    },
    {
        id:7,
        image: logo7,
        title: 'Researcher',
        time: '5Hrs',
        location: "Germany",
        desc: "Web developers build websites and ensure they perform reliably and efficiently. Learn more about this critical role in the tech industry and how to get started. ",
        company:"Government"
    },
    {
        id:8,
        image: logo8,
        title: 'UI Developer',
        time: '2 Days',
        location: "Leeds",
        desc: "Web developers build websites and ensure they perform reliably and efficiently. Learn more about this critical role in the tech industry and how to get started. ",
        company:"Nimeloi-UK"
    }
]

const Jobs = () => {
    return (
        <div >
            <FindAJob/>
            <div className=" flex gap-10 p-12 grid grid-cols-4 justify-center flex-wrap items-center py-10">
                {
                    Data.map(({id,image,title,time,location,desc,company})=> {
                        return(

                            <div key ={id}className=" group group/item w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blue-800 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                            <span className="flex justify-between items-center gap-4">
                                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{title}</h1>
                                <span className="flex items-center text-[#ccc] gap-1">
                                    <BiTimeFive/>{time}
                                </span>
        
                            </span>
                            <h6 className=" text-[#ccc]">{location}</h6>
                            <p className="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                            {desc} 
                            </p>
                            <div className="company flex items-center gap-2 ">
                                <img src={image} alt="Company Logo" className="w-[10%]" />
                                <span className="text-[14px] py-[1rem] block group-hover:text-white">{company}</span>
                            </div>
                            <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-black hover:bg-white group-hover/item:text-black group-hover:text-white">Apply Now</button>
                        
                        </div>
                   
                        )
                    })
                }
               
            </div>
        </div>
    )
}

export default Jobs;