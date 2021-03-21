import { writable } from "svelte/store";

function userAccountStore() {
    const userAccountData= writable(JSON.parse(localStorage.getItem("user")));
    return userAccountData;
}


export const userAccount = userAccountStore()