import db from ".";

const accounts = db.table("accounts");

export const verifyIfExistsAccount = async ({ username, email }) => {
    const data = await accounts.where({
        username,
        email
    }).first();
    if(data) {
        localStorage.setItem("user",JSON.stringify(data))
        return true;
    }
    return false;
};

export const logOut = () => {
    localStorage.removeItem("user");
    location.reload();
}

export const deleteAccount = (accountId) => {
   return accounts.where("id").anyOf(accountId).delete();
} 

export const verifyIsLogged = async () => {
    const localData = JSON.parse(localStorage.getItem("user") || "{}");
    const data = await accounts.where({
        id : localData.id || 0,
        email : localData.email || ""
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
    return accounts.add(accountProps);
};
