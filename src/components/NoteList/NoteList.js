


import React from "react";
import Note from "./Note";

function NoteList({ notes, onRemoveNote }) {
  return (
    <div className=" space-y-4">
      {notes.map((note) => (
        <Note key={note.id} note={note} onRemoveNote={onRemoveNote} />
      ))}
    </div>
  );
}

export default NoteList;





