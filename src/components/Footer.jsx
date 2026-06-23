
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      
<footer className=" bg-[#3B2F4A] h-92.5 w-full py-30 px-15  ">
    <section className='flex justify-between'>
      <div className="w-93 h-5.5 flex justify-between ">
        <div className="flex " >
          <img src="/book-bookmark 1.png" alt="book-bookmark 1.png"  />
          <p className=" text-[18px]  text-white ml-2.5 mr-10"> Bookshop</p>
</div>
<Link to="" className=" text-[16px] text-white decoration-solid">Home </Link>
  <Link to="" className=" text-[16px] text-white decoration-solid"> Books</Link>
    <Link to="" className=" text-[16px] text-white decoration-solid"> About us</Link>

</div>
<div className='flex justify-between w-42 h-6'>
  <Link to="https://www.facebook.com/?locale=ar_AR"> <img src="/Social Icons (3).png" alt="Social Icons (3).png" /> </Link>
  <Link to="https://www.instagram.com/"> <img src="/Social Icons (2).png" alt="Social Icons (2).png" /> </Link>
  <Link to="https://www.youtube.com/"> <img src="/Social Icons (1).png" alt="Social Icons (1).png" /> </Link>
  <Link to="https://x.com/"> <img src="/Social Icons.png" alt="Social Icons.png" /> </Link>


</div>
</section > 

<div className='border-b border-b-gray-400 my-4'> </div>


<div className='text-white text-[14px]'>
  &lt;Developed By&gt; EraaSoft &lt;All Copy Rights Reserved&gt;
</div>



</footer>

    </>
  )
}
