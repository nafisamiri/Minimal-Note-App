import React, { useState } from "react";

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleAddNote = () => {
    if (title && note) {
      onAddNote({ title, note });
      setTitle("");
      setNote("");
    }
  };

  return (
    <div className="flex flex-col space-y-4 mt-8">
    <div className="flex flex-col md:flex-row md:space-x-4">
    {/* <div className="flex flex-col md:flex-row md:space-x-4"> */}
      <input
        type="text"
        className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600 h-32 md:h-auto"
        placeholder="Note"
        value={note}
        onChange={handleNoteChange}
      />
      <button
        className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
        onClick={handleAddNote}
      >
        Add Note
      </button>
    </div>
    </div>
  );
}

export default NoteForm;
