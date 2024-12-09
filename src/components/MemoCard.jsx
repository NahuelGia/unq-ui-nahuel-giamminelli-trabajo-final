export function MemoCard({ animating, handleClick, memoCard }) {
	return (
	  <div
		className="cursor-pointer select-none aspect-square"
		onClick={() => !memoCard.flipped && !animating && handleClick(memoCard)}
	  >
		<div
		  className={`w-full h-full text-center transition-transform duration-600 transform-style-preserve-3d ${
			memoCard.flipped ? "rotate-y-180" : ""
		  }`}
		>
		  {/* Front */}
		  <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-purple-500 to-indigo-500 rounded-md"></div>
		  {/* Back */}
		  <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-[#7898d2] to-[#a0c8ed] rounded-md shadow-[5px_5px_10px_rgba(0,0,0,0.5)] flex justify-center items-center text-5xl rotate-y-180">
			{memoCard.icon}
		  </div>
		</div>
	  </div>
	);
  }
  