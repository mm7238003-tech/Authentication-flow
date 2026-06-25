export default function BestSeller() {
  return (
    <section className="w-full h-199 bg-[#3B2F4A] flex flex-col items-center justify-center mb-30">
      
      <p className="text-white text-[26px] font-bold mb-2">
        Best Seller
      </p>

      <p className="text-[#B8B8B8] text-center max-w-125 text-sm leading-6 mb-20 text-[16px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.
      </p>

      <div className="flex items-center justify-between gap-5 mt-20 mb-20 max-w-360">
        <img src="/81ZLwAwD-ML 4.png" alt="Book 1" className="w-30 h-46" />
        <img src="/seller1.png" alt="Book 2" className="w-30 h-46" />
        <img src="/seller2.png" alt="Book 3" className="w-30 h-46" />
        <img src="/seller3.png" alt="Book 4" className="w-30 h-46" />
        <img src="/seller4.png" alt="Book 5" className="w-30 h-46" />
        <img src="/seller5.png" alt="Book 6" className="w-30 h-46" />
        <img src="/seller6.png" alt="Book 7" className="w-30 h-46" />
        <img src="/seller7.png" alt="Book 8" className="w-30 h-46" />
      </div>

      <button className="w-45 h-13 bg-[#E91E63] text-white font-medium  rounded hover:bg-[#d81b60] transition">
        Shop now
      </button>

    </section>
  );
}