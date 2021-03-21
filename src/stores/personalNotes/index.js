import { writable } from "svelte/store";
import { getAllNotes, addNewNote } from "../../db/personalNotes";

function personalNotesStore() {
  const { subscribe, update, set } = writable([]);

  const getNotes = () => {
    getAllNotes().then((notes) => {
      set(notes);
    });
  }

  const addNote = (payload) => {
    addNewNote(payload).then((id) => {
      update((prevState) => [...prevState, { ...payload, id }]);
    });
  };
  
  getNotes()

  return {
    subscribe,
    addNote,
    getNotes
  };
}

export const personalNotes = personalNotesStore();
