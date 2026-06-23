import { Link } from "react-router-dom";

export default function Input5() {
  return (
    <>
          <section className='mt-15  mb-40 ml-[30%]'>

      <p className='text-[#D9176C] text-[16px] w-xl text-center font-semibold mt-10'>Create new password! </p>
      <p  className='text-[#22222280] text-[14px] w-xl text-center font-normal  '>Create a strong password</p>
      <p  className='text-[#22222280] text-[14px] w-xl text-center font-normal mb-10 '>Your new password must be different from previous one</p>
    
      <form>
                <div className="flex flex-col mb-10 ">
 
    <label htmlFor="password" className='mb-2 mt-6 font-semibold text-[#222222]' >password</label>
    <input type="password" id='password' className='w-xl h-13.5 border border-solid rounded-lg bg-white border-[#22222233] mb-4 pl-2 'placeholder="Enter password" required />
      <p  className='text-[#22222280] text-[16px]   font-normal  '>Must be at least 8 characterss</p>
    <label htmlFor="password" className='mb-2  font-semibold text-[#222222]' >Confirm password</label>
    <input type="password" id='password' className='w-xl h-13.5 border border-solid rounded-lg bg-white border-[#22222233] mb-4 pl-2 'placeholder="Confirm password" required />
    <div className='flex'>
<input type="checkbox" required className=' w-5'  />

<label className="ml-2 mt-2 text-[14px] text-[#222222] ">Remember me </label>

</div>
      </div> 
<button className='w-xl h-13.5 border border-solid rounded-lg bg-[#D9176C] border-[#D9176C]  text-[18px] text-white font-semibold ' >

Reset password
</button>
      </form>
    
      </section>
    </>
  )
}
