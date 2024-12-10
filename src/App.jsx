import { useEffect } from "react";
import { useState } from "react";
import Board from "./components/board/Board";
import WinnerModal from "./components/WinnerModal";
import { BoardHeader } from "./components/BoardHeader";
import "./styles.css";

const cardIcons = [
	"👽",
	"🤡",
	"🍎",
	"😁",
	"😛",
	"😅",
	"🐭",
	"📱",
	"🤣",
	"😊",
	"😇",
	"🙂",
	"🙃",
	"😉",
	"😌",
	"😍",
	"🥰",
	"😘",
	"😗",
	"😋",
	"👍",
	"🕹️",
	"🤛",
	"🍇",
	"🖖",
	"✋",
	"👌",
	"🤟",
	"🤞",
	"🤘",
	"🤙",
	"🤐",
];

function App() {
	const [shuffledCards, setShuffledCards] = useState([]);
	const [selectedCard, setSelectedCard] = useState(null);
	const [animating, setAnimating] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [boardSize, setBoardSize] = useState(4);
	const [score, setScore] = useState(0);
	const [elapsedTime, setElapsedTime] = useState(0);
	const [isGameStarted, setIsGameStarted] = useState(false);

	const initializeGame = () => {
		const totalCards = boardSize * boardSize;

		const icons = cardIcons.slice(0, totalCards / 2);

		const shuffledIconList = shuffleIcons([...icons, ...icons]);
		setShuffledCards(
			shuffledIconList.map((emoji, i) => ({
				id: i,
				icon: emoji,
				flipped: false,
			}))
		);
		setSelectedCard(null);
		setAnimating(false);
		setShowModal(false);
		setElapsedTime(0);
		setScore(0);
	};

	useEffect(() => {
		initializeGame();
	}, [boardSize]);

	useEffect(() => {
		if (
			shuffledCards.length > 0 &&
			shuffledCards.every((card) => card.flipped)
		) {
			setShowModal(true);
			setIsGameStarted(false);
		}
	}, [shuffledCards]);

	useEffect(() => {
		let timer;
		if (isGameStarted) {
			timer = setInterval(() => {
				setElapsedTime((prev) => prev + 1);
			}, 1000);
		} else {
			clearInterval(timer);
		}
		return () => clearInterval(timer);
	}, [isGameStarted]);

	const shuffleIcons = (a) => {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	};

	const handleClick = (memoCard) => {
		if (!isGameStarted) {
			setIsGameStarted(true);
		}

		const flippedMemoBlock = { ...memoCard, flipped: true };
		let shuffledCardsCopy = [...shuffledCards];
		shuffledCardsCopy.splice(memoCard.id, 1, flippedMemoBlock);
		setShuffledCards(shuffledCardsCopy);

		if (selectedCard === null) {
			setSelectedCard(memoCard);
		} else if (selectedCard.icon === memoCard.icon) {
			setSelectedCard(null);
			setScore(score + 1);
		} else {
			setAnimating(true);
			setTimeout(() => {
				shuffledCardsCopy.splice(memoCard.id, 1, memoCard);
				shuffledCardsCopy.splice(selectedCard.id, 1, selectedCard);
				setShuffledCards(shuffledCardsCopy);
				setSelectedCard(null);
				setAnimating(false);
			}, 500);
		}
	};

	return (
		<div className="bg-gray-900 min-h-screen">
			<BoardHeader
				boardSize={boardSize}
				onSizeChange={(newSize) => {
					setBoardSize(newSize);
					setIsGameStarted(false);
				}}
				score={score}
				time={elapsedTime}
			/>
			<Board
				handleClick={handleClick}
				memoCards={shuffledCards}
				animating={animating}
				boardSize={boardSize}
			/>
			<WinnerModal
				isOpen={showModal}
				onRequestClose={() => setShowModal(false)}
				onRestart={initializeGame}
				time={elapsedTime}
			/>
		</div>
	);
}

export default App;
