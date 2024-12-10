import { MemoCard } from "../memoCard";

const Board = ({ animating, handleClick, memoCards, boardSize }) => {
	return (
		<div className="flex justify-center items-center mt-2 ">
			<div
				className={`gap-3 w-full max-w-[50rem] p-4 grid ${
					boardSize == 4
						? "grid-cols-4"
						: boardSize == 6
						? "grid-cols-6"
						: "grid-cols-8"
				}`}
			>
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
