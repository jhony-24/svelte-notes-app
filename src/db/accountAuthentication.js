import db from ".";

export const verifyIfExistsAccount = ({ username, email }) => {
    return  db.accounts.where({
        username,
        email : email
    }).first();
};


export const deleteAccount = (accountId) => {
   return db.where("id").anyOf(accountId).delete();
} 


export const verifyIsLogged = async () => {
    const localData = JSON.parse(localStorage.getItem("user") || "{}");
    const data = await db.accounts.where({
        id : localData.id,
        email : localData.email
    }).first();
    return {
        data : data ? data : {},
        status : !!data
    }
}

/**
 *
 * @param {{username,email,fullName,avatar}} accountProps
 */
export const addAccount = (accountProps) => {
    return db.accounts.add(accountProps);
};
