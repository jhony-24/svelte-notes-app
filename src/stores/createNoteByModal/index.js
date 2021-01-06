import { writable } from "svelte/store";

function createNoteByModalStore() {
    const { subscribe, set } = writable(false);

    const openModal = () => set(true);
    const closeModal = () => set(false);

    return {
        isVisible : subscribe,
        openModal,
        closeModal,
    }
}

export const createNoteByModal = createNoteByModalStore()