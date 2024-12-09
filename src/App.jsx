import { useEffect } from "react";
import { useState } from "react";
import Board from "./components/Board";
import WinnerModal from "./components/WinnerModal";

const cardIcons = [
	"👽",
	// "🤡",
	// "🍎",
	// "😁",
	// "😛",
	// "😅",
	// "🐭",
	// "🤣",
	// "😊",
	// "😇",
	// "🙂",
	// "🙃",
	// "😉",
	// "😌",
	// "😍",
	//  "🥰", "😘", "😗", "😋", ,
	// "👍", "👊", "🤛", "👋", "🖖", "✋",
	// "👌", "🤟", "🤞", "🤘", "🤙", "🤐", "👉",
	// "🐶", "🐱", , "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🦁",
	// "🍏", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", ,
	// "📱", "💻", "🖥️", "🖨️", "🖱️", "🎧", "🕹️", "📷", "🎥", "📺"
];


function App() {
	const [shuffledCards, setShuffledCards] = useState([]);
	const [selectedCard, setSelectedCard] = useState(null);
	const [animating, setAnimating] = useState(false);
	const [showModal, setShowModal] = useState(false);
  

	const initializeGame = () => {
		const shuffledIconList = shuffleIcons([...cardIcons, ...cardIcons]);
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
	};

	useEffect(() => {
		initializeGame();
	}, []);

	useEffect(() => {
		if (
			shuffledCards.length > 0 &&
			shuffledCards.every((card) => card.flipped)
		) {
			setShowModal(true);
		}
	}, [shuffledCards]);

	const shuffleIcons = (a) => {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	};

	const handleClick = (memoCard) => {
		const flippedMemoBlock = { ...memoCard, flipped: true };
		let shuffledCardsCopy = [...shuffledCards];
		shuffledCardsCopy.splice(memoCard.id, 1, flippedMemoBlock);
		setShuffledCards(shuffledCardsCopy);

		if (selectedCard === null) {
			setSelectedCard(memoCard);
		} else if (selectedCard.icon === memoCard.icon) {
			setSelectedCard(null);
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
		<div className="bg-gray-900">
			<Board
				handleClick={handleClick}
				memoCards={shuffledCards}
				animating={animating}
			/>
			 <WinnerModal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        onRestart={initializeGame}
      />
		</div>
	);
}

export default App;
