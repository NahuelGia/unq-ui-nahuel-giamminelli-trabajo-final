import Modal from "react-modal";

const WinnerModal = ({ isOpen, onRequestClose, onRestart }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Ganador"
      className="bg-white p-6 rounded-lg shadow-lg w-1/3 mx-auto mt-20 text-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div>
        <h2 className="text-2xl font-bold">¡Felicidades!</h2>
        <p>Has completado el MemoTest</p>
        <button
          onClick={onRestart}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Jugar de nuevo
        </button>
      </div>
    </Modal>
  );
};

export default WinnerModal;
