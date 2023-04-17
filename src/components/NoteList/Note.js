import React from "react";

const Note = ({ note, onRemoveNote }) => {
  return (
    <div
      className="p-4 border border-gray-300 rounded-lg flex items-center justify-between"
    >
      <div>
        <h2 className="font-bold">{note.title}</h2>
        <p className="text-gray-500">{note.note}</p>
      </div>
      <button
        className="text-red-600 hover:text-red-700"
        onClick={() => onRemoveNote(note.id)}
      >
        delete
      </button>
    </div>
  );
}

export default Note;