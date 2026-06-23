
import { Link } from "react-router-dom";

export default function Input4() {
  return (
    <section className="min-h-screen flex justify-center items-center bg-[#F5F5F5]">
      <form className="flex flex-col items-center">

        <p className="text-[#D9176C] text-xl font-semibold ">
          Reset your password!
        </p>

        <p  className='text-[#22222280] text-[14px] w-xl text-center font-normal mb-10 '>Enter the 4 dights code that you received on your email</p>
        <div className="flex gap-4 mb-8">
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 border border-gray-400 rounded-lg text-center text-xl outline-none focus:border-[#D9176C]"
          required/>

          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 border border-gray-400 rounded-lg text-center text-xl outline-none focus:border-[#D9176C]"
          required/>

          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 border border-gray-300 rounded-lg text-center text-xl outline-none focus:border-[#D9176C]"
          required/>

          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 border border-gray-300 rounded-lg text-center text-xl outline-none focus:border-[#D9176C]"
          required/>
        </div>
<div className="flex flex-col gap-5">
        <button
          type="submit"
          className="w-72 h-12 bg-[#D9176C]  text-white font-semibold hover:bg-pink-700 duration-300 rounded-[28px]"
        >
         Submit
        </button>
        <Link to="/ResetPassword">
<button className='  w-40 h-13.5 border border-solid  bg-[#D9176C] border-[#D9176C]  text-[18px] text-white font-semibold '>Reset password</button>
</Link>
</div>
        <p className="mt-5 text-sm text-gray-600 font-semibold ">
          Didn't receive a code?{" "}
          <span className="text-[#D9176C] font-medium cursor-pointer">
            Send again
          </span>
        </p>

      </form>
    </section>
  );
}