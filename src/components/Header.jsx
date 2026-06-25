
import { Link } from "react-router-dom";
export default function Header({ bgi, h , input }) {
  return (
    <>

            <header className={` ${bgi} ${h}  w-full h-84.5 bg-[url('/BackkGround.png')] bg-contain relative flex flex-col items-center  `}>
        <nav  className=" h-24 w-full  bottom-0 left-0 py-7.5  px-35 bg-white/20  flex justify-between ">
      
      <div className="w-106.75 h-8 flex justify-between ">
        <div className="flex " >
          <img src="/book-bookmark 1.png" alt="book-bookmark 1.png"  />
          <p className=" text-[18px]  text-white ml-2.5"> Bookshop</p>
</div>
<a href="/" className=" text-[18px] text-white hover:text-amber-300!">Home </a>
  <a href="" className=" text-[18px] text-white "> Books</a>
    <a href="" className=" text-[18px] text-white "> About us</a>

</div>

<div className="flex gap-3">
  <Link to="/Login">
  <p className=" w-26 h-11 text-white bg-[#D9176C] py-2.75 px-4 text-[16px] rounded-lg " >Log in </p>
  </Link>
<Link to="/SignUp">
  <p className="w-26 h-11 text-[#D9176C] bg-white py-2.75 px-4 text-[16px] rounded-lg">
    Sign Up
  </p>
</Link>
</div>
        </nav>
              {input}
       
            </header>
    </>
  )
}
