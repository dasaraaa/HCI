import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    
  } from "@material-tailwind/react";
  import img1 from '../images/pexels-andrea-piacquadio-3760069.jpg'
import { Link } from "react-router-dom";
   
  export default function Welcome() {
    return (
      <Card className="flex-row w-full w-[100%] bg-[#E6FFFD] p-5">
        <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
          <img 
          src={img1}
            alt="image" 
            className="w-full h-full "
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6"  className="uppercase text-[#11009E]/[0.5]   text-[13px] mx-[20px] text-center pl-[150px] mb-5">Easiest way to find a job</Typography>
          <Typography variant="h1"  className="mb-2 text-[#11009E] font-extrabold text-[50px] pl-[120px] ml-[50px]">
            Find Your Next <br/> Dream Job
          </Typography>
          <div className="pl-[45%] my-5">
          <Link className="bg-blue-500 no-underline hover:bg-blue-700 text-white font-bold ml-1 mr-3  py-2 px-4 rounded-[9px]" to="cv"> Post a CV</Link>

            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-2 mr-5 py-2 px-4 rounded-[9px]"> */}
            <Link className="bg-blue-500 no-underline hover:bg-blue-700 text-white font-bold ml-2 mr-5 py-2 px-4 rounded-[9px]" to="postjob"> Post a Job</Link>
            {/* </button> */}
          </div>
        </CardBody>
      </Card>
    );
  }
