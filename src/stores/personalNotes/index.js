import { writable } from "svelte/store";
import { getAllNotes, addNewNote } from "../../db/personalNotes"

function personalNotesStore() {
  const { subscribe, update,set } = writable([]);

  const addNote = (payload) => {
    addNewNote(payload).then(id=> {
      update((prevState) => [...prevState, {...payload,id}]);
    });
  };

  getAllNotes().then(notes => {
    set(notes);
  })

  return {
    subscribe,
    addNote,
  };
}

export const personalNotes = personalNotesStore();
