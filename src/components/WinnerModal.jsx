import Modal from "react-modal";

const WinnerModal = ({ isOpen, onRequestClose, onRestart, time}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Ganador"
      className="bg-[#41769b] p-6 rounded-lg shadow-lg w-1/3 mx-auto text-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="space-y-2 text-white">
        <h2 className="text-2xl font-bold">¡Completado!</h2>
        <p className="text-xl">Has completado el MemoTest</p>
        <p className="pb-2">Tiempo de juego: {time} segundos</p>
        <button
          onClick={onRestart}
          className="bg-[#3c57ef] text-white px-4 py-2 rounded hover:bg-[#3c4bef]"
        >
          Jugar de nuevo  
        </button>
      </div>
    </Modal>
  );
};

export default WinnerModal;
