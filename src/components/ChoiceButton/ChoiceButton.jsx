// src/components/ChoiceButton/ChoiceButton.jsx

export default function ChoiceButton({ choices = [], onSelect }) {
  return (
    <div className="flex flex-col gap-2">
      {choices.map((choice, index) => (
        <button
          key={index}
          onClick={() => onSelect(choice)}
          className="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
        >
          {index + 1}. {choice}
        </button>
      ))}
    </div>
  )
}