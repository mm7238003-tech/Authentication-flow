import { Link } from "react-router-dom";


export default function Input2() {
  return (
       <>
<section className='mt-15  mb-40'>

  <div className='w-xl  flex flex-col mx-[30%] '>

    <form >
  <div className="flex mb-6">
    <div>
 <label htmlFor=" First  " className='mb-2 text-[18px] text-[#222222] font-semibold' >First Name</label>
   <input type="text" id=' First' className='w-70 h-13.5 border border-solid rounded-lg bg-white border-[#22222233] pl-2 ' required/>
   </div>
      <div>
 <label htmlFor=" Last  " className='mb-2 text-[18px] text-[#222222] font-semibold' >Last Name</label>
   <input type="text" id=' Last' className='w-70 h-13.5 border border-solid rounded-lg bg-white border-[#22222233] pl-2 ' required/>
   </div>

  </div>
    <label htmlFor=" Email " className='mb-2 text-[18px] text-[#222222] font-semibold' >Email</label>
    <input type="email" id=' Email' className='w-xl h-13.5 border border-solid rounded-lg bg-white border-[#22222233] pl-2 'placeholder="example@gmail.com"  required/>

    <label htmlFor="password" className='mb-2 mt-6 font-semibold text-[#222222]' >password</label>
    <input type="password" id='password' className='w-xl h-13.5 border border-solid rounded-lg bg-white border-[#22222233] mb-4 pl-2 'placeholder="Enter password" required />
    <label htmlFor="password" className='mb-2 mt-6 font-semibold text-[#222222]' >Confirm password</label>
    <input type="password" id='password' className='w-xl h-13.5 border border-solid rounded-lg bg-white border-[#22222233] mb-4 pl-2 'placeholder="Confirm password" required />

<div className='flex justify-between'>
<div className='flex'>
<input type="checkbox" required className=' w-5'  />

<label className="ml-2 mt-2 text-[14px] text-[#222222] ">Agree with  <span className="text-[#D9176C] text-[12px]">Terms & Condition</span></label>

</div>
<Link to="/ForgetPassword">
<p className='text-[#D9176C]'> Forget password? </p>
</Link>
</div>

 

<button className='w-xl h-13.5 border border-solid rounded-lg bg-[#D9176C] border-[#D9176C]  text-[18px] text-white font-semibold mt-10 ' >
Sign up
</button>
</form>

<div className='flex justify-center mt-5' >
<span span  className='text-[#222222] text-[16px]  font-normal' >Already have an account?</span>
<Link to="/Login">
<span className='text-[#D9176C] text-[16px]  font-semibold  mb-10'>Log in</span>
</Link>
</div>


<p className='text-[#222222] text-[19px] text-center mb-5 font-normal'> or </p>

<div  className='flex w-xl h-13.5 border border-solid rounded-lg bg-white border-[#22222233] mb-4 px-45 py-2.5 drop-shadow-2xl ' >
  <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 16 16">
	<path d="M0 0h16v16H0z" fill="none" />
	<g fill="none" fill-rule="evenodd" clip-rule="evenodd">
		<path fill="#f44336" d="M7.209 1.061c.725-.081 1.154-.081 1.933 0a6.57 6.57 0 0 1 3.65 1.82a100 100 0 0 0-1.986 1.93q-1.876-1.59-4.188-.734q-1.696.78-2.362 2.528a78 78 0 0 1-2.148-1.658a.26.26 0 0 0-.16-.027q1.683-3.245 5.26-3.86" opacity=".987" />
		<path fill="#ffc107" d="M1.946 4.92q.085-.013.161.027a78 78 0 0 0 2.148 1.658A7.6 7.6 0 0 0 4.04 7.99q.037.678.215 1.331L2 11.116Q.527 8.038 1.946 4.92" opacity=".997" />
		<path fill="#448aff" d="M12.685 13.29a26 26 0 0 0-2.202-1.74q1.15-.812 1.396-2.228H8.122V6.713q3.25-.027 6.497.055q.616 3.345-1.423 6.032a7 7 0 0 1-.51.49" opacity=".999" />
		<path fill="#43a047" d="M4.255 9.322q1.23 3.057 4.51 2.854a3.94 3.94 0 0 0 1.718-.626q1.148.812 2.202 1.74a6.62 6.62 0 0 1-4.027 1.684a6.4 6.4 0 0 1-1.02 0Q3.82 14.524 2 11.116z" opacity=".993" />
	</g>
</svg>
<Link to="https://www.google.com/">
 <p className=' font-normal text-[#222222] text-[16px] ml-3 w-40'> Login with Google</p>
</Link>
</div>
<div  className='flex w-xl h-13.5 border border-solid rounded-lg bg-white border-[#22222233] mb-4 px-45 py-2.5 drop-shadow-2xl ' >
<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 256 256">
	<path d="M0 0h256v256H0z" fill="none" />
	<path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" />
	<path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z" />
</svg>
<Link to="https://www.facebook.com/?locale=ar_AR">
 <p className=' font-normal text-[#222222] text-[16px] ml-3 w-40 '> Login with Facebook</p>
 </Link>
 </div>




 </div>


</section>








      
    </>
  )
}
