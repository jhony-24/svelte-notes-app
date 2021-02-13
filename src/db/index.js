import Dexie from "dexie";

const db = new Dexie("notes_db");

db.version(1).stores({
  accounts: "++id,username,email,fullName,avatar",
  notes: "++id,note,color,date,accountId",
});

export default db;