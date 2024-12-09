import { MemoCard } from "./memoCard";

const Board = ({ animating, handleClick, memoCards }) => {
	return (
		<div className="flex justify-center items-center h-screen bg-gray-900">
			<div className="grid grid-cols-4 gap-3 w-full max-w-[600px] p-4">
				{memoCards.map((memoBlock, i) => {
					return (
						<MemoCard
							key={`${i}_${memoBlock.icon}`}
							animating={animating}
							handleClick={handleClick}
							memoCard={memoBlock}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Board;
