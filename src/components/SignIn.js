import react from "react";

const SignIn =()=>{
    return (
        
    <div className="h-screen w-full flex bg-blue-50">
    <div className=" grid grid-cols-1 md:grid-cols-2 m-auto  shadow-lg bg-blue-200 max-w-[1000px] rounded-lg">
      <div className="w-full  h-[550px] hidden md:block bg-blue-900 ">
        <p className="flex justify-center p-5 text-white text-3xl" >Start your journey with us.</p>
        <p className="flex justify-center px-4 text-white text-2xl">Empowering you to find joy and fulfillment in your work.</p>
      </div>
      <form className="  w-[500px] h-[550px] w-full rounded-lg mx-auto bg-blue-100  p-7">
        <h2 className="text-4xl font-bold text-center  py-5">Sign in</h2>
        <div className="flex flex-col py-2 mb-4">
          <label>Email</label>
          <input
            name="email"
            className=" border-transparent rounded-md shadow-lg shadow-gray-300  border p-2  relative  "
            type="text"
            placeholder="user@gmail.com"
          />
        </div>
        <div className="flex flex-col py-2">
          <label>Password</label>
          <input
            name="password"
            className=" py-2  relative   shadow-gray-300 rounded-md  border border-transparent shadow-lg shadow-gray-300 "
            type="password"
            placeholder="********"
          />
        </div>
        <button
          className=" w-full bg-blue-500 hover:bg-blue-600 border-2 text-white   border-transparent rounded-lg my-6 py-2"
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
);
};
export default SignIn;
