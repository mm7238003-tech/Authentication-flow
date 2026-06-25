export default function RecommendedForYou() {
  return (
    <section className="w-full flex flex-col mb-30 ">
      <p className="text-[24px] font-bold text-[#222222] mb-8 ml-80">
        Recomended For You
      </p>

      <div className="flex gap-8 justify-center">
 
        <div className="w-153 h-90 bg-white p-6 flex gap-5 shadow-2xl mb-10">
          <img
            src="/81ZLwAwD-ML 4.png"
            alt=""
            className="w-45 h-66 object-cover"
          />

          <div className="flex-1">
            <p className="text-[18px] font-bold">
             Rich Dad And Poor Dad
            </p>

            <p className="text-[14px] text-gray-500 mb-2">
             Author: <strong>Robert T. Kiyosanki</strong> 
            </p>

            <p className="text-[14px] text-gray-400 leading-5 mb-2">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,
            </p>

            <div className="text-yellow-400 mb-3">
              ★★★★★
              <span className="text-gray-400 text-xs ml-2">
                (120 Reviews)
              </span>
            </div>

            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-500 text-sm">
                Rate : 4.2
              </span>

              <span className="font-bold text-[28px]">
                $30.00
              </span>
            </div>

            <div className="flex gap-3">
              <button className="w-55 h-11 bg-pink-600 text-white rounded  ">
                Add To Cart 
              </button>

              <button className="w-11 h-11 border border-pink-600 rounded text-pink-600">
                ♡
              </button>
            </div>
          </div>
        </div>

        <div className="w-153 h-90 bg-white p-6 flex gap-5 shadow-2xl">
          <img
            src="/seller4.png"
            alt=""
            className="w-45 h-66 object-cover"
          />

          <div className="flex-1">
            <p className="text-[18px] font-bold">
            The Design Of Books
            </p>

             <p className="text-[14px] text-gray-500 mb-2">
             Author: <strong> Debbie Berne</strong> 
            </p>

            <p className="text-[14px] text-gray-400 leading-5 mb-2">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,
            </p>

            <div className="text-yellow-400 mb-3">
              ★★★★★
              <span className="text-gray-400 text-xs ml-2">
                (120 Reviews)
              </span>
            </div>

            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-500 text-sm">
                Rate : 4.2
              </span>

              <span className="font-bold text-[28px]">
                $40.00
              </span>
            </div>

            <div className="flex gap-3">
              <button className="w-55 h-11 bg-pink-600 text-white rounded">
                Add To Cart
              </button>

              <button className="w-11 h-11 border border-pink-600 rounded text-pink-600 ">
                ♡
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}