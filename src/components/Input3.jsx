import { Link } from "react-router-dom";

export default function Input3() {
  return (
    <>
    <section className='mt-15  mb-40 ml-[30%]'>

      <p className='text-[#D9176C] text-[16px] w-xl text-center font-semibold mt-10'>Forget Password? </p>
      <p  className='text-[#22222280] text-[14px] w-xl text-center font-normal mb-10 '>Enter your email to reset your password</p>
      <form>
                <div className="flex flex-col mb-10 ">
  <label htmlFor=" Email " className='mb-2 text-[18px] text-[#222222] font-semibold' >Email</label>
    <input type="email" id=' Email' className='w-xl h-13.5 border border-solid rounded-lg bg-white border-[#22222233] pl-2 'placeholder="example@gmail.com"  required/>

      </div> 
      <div className="flex flex-col gap-5">
<button className='w-xl h-13.5 border border-solid rounded-lg bg-[#D9176C] border-[#D9176C]  text-[18px] text-white font-semibold ' >

Submit
</button>
<Link to="/AddCode">
<button className='  w-40 h-13.5 border border-solid  bg-[#D9176C] border-[#D9176C]  text-[18px] text-white font-semibold '>Send reset code</button>
</Link>
</div>
      </form>
    
      </section>
    </>
  )
}
