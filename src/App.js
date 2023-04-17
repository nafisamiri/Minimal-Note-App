import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import NoteForm from "./components/NoteForm/NoteForm.js";
import NoteList from "./components/NoteList/NoteList.js";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import "tailwindcss/tailwind.css";
function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes([...notes, { id: uuidv4(), ...newNote }]);
  };

  const handleRemoveNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div>
      {" "}
      <Navbar />
      <div className="bg-white-50 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-screen-md w-full px-4 sm:px-6 lg:px-8 py-8">
          <NoteForm onAddNote={handleAddNote} />
          <div className="mt-8">
            <NoteList notes={notes} onRemoveNote={handleRemoveNote} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
