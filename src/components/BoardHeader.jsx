import {
  AlarmClock,
  GalleryHorizontalEnd,
} from "lucide-react";

export const BoardHeader = ({ boardSize, onSizeChange, score, time }) => {
  return (
    <div className="bg-gray-800 text-white py-4 px-4 flex flex-row items-center justify-evenly">

      <div className="flex items-center">
        <AlarmClock size={30} />
        <p className="ml-2 text-2xl">{time}</p>
      </div>

      <div className="flex flex-row items-center space-x-2">
        <h1 className="text-2xl font-bold">Dificultad:</h1>
        <select
          value={boardSize}
          onChange={(e) => onSizeChange(parseInt(e.target.value))}
          className="bg-gray-700 text-white p-2 rounded text-base"
        >
          <option value={4}>4x4</option>
          <option value={6}>6x6</option>
          <option value={8}>8x8</option>
        </select>
      </div>

      {/* Sección del score */}
      <div className="flex items-center">
        <GalleryHorizontalEnd size={30} className="mt-[1px]" />
        <h1 className="ml-2 text-2xl">{score}</h1>
      </div>
    </div>
  );
};
