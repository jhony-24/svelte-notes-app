import db from "."

const notes = db.table("notes");

export const addNewNote = async ({note,color,date}) => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const id = await notes.add({
        note,
        color,
        date,
        accountId : user.id
    });
    return id;
}

export const removeNoteById = (noteId) => {
    return notes.delete(noteId);
}

export const getAllNotes = () => {
    return notes.toArray()
}