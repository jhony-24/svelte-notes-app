import { writable } from "svelte/store";

function personalNotesStore() {
  const { subscribe, update } = writable([]);

  const addNote = (payload) => {
    update((prevState) => [...prevState, payload]);
  };

  return {
    subscribe,
    addNote,
  };
}

export const personalNotes = personalNotesStore();
