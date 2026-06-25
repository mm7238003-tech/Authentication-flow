export default function SearchInput() {
  return (
    <div className="flex items-center w-134 h-15 bg-white border border-[#22222233] rounded-[50px] overflow-hidden mt-85 ">
      <input
        type="text"
        placeholder="Search"
        className="flex-1 h-full pl-6 outline-none text-sm"
      />

      {/* Mic Icon */}
      <button className="px-3">
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<path fill="currentColor" fill-rule="evenodd" d="M8.7 6.5v6a3.3 3.3 0 1 0 6.6 0v-6a3.3 3.3 0 0 0-6.6 0m3.9 13.476V23h-1.2v-3.024A7.5 7.5 0 0 1 4.5 12.5V11h1.2v1.5a6.3 6.3 0 0 0 12.6 0V11h1.2v1.5a7.5 7.5 0 0 1-6.9 7.476M7.5 6.5a4.5 4.5 0 0 1 9 0v6a4.5 4.5 0 1 1-9 0z" />
</svg>

      </button>

      {/* Search Button */}
      <button className="w-12 h-full bg-[#E91E63] flex items-center justify-center text-white ">

    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<path fill="currentColor" d="M9.539 15.23q-2.398 0-4.065-1.666Q3.808 11.899 3.808 9.5t1.666-4.065T9.539 3.77t4.064 1.666T15.269 9.5q0 1.042-.369 2.017t-.97 1.668l5.909 5.907q.14.14.15.345q.009.203-.15.363q-.16.16-.354.16t-.354-.16l-5.908-5.908q-.75.639-1.725.989t-1.96.35m0-1q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361T12.9 6.14T9.54 4.77q-1.991 0-3.361 1.37T4.808 9.5t1.37 3.36t3.36 1.37" />
</svg>

      </button>
    </div>
  );
}