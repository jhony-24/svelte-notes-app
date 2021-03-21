<script>
import Avatar from "../../components/Avatar.svelte";
import { logOut } from "../../db/accountAuthentication";
import { userAccount } from "../../stores/userAccount"

    let username = "";
    userAccount.subscribe(e => {
        username = e.username;
    })
</script>
<style>
    .wrapper {
        display: flex;
        align-items: center;
        flex: none;
    }
    .avatar {
        margin-left: 10px;
    }
    .name {
        color: var(--text-base-color);
        font-weight: bold;
    }
    .logout {
        background: none;
        color: var(--primary-color);
        border: none;
        font-weight: bold;  
        padding: 10px 30px;
        font-size: 1rem;
    }
</style>
<div class="wrapper">
    <button class="logout" on:click={logOut}>Log out</button>
    <span class="name"> 
        {username}
    </span>
    <div class="avatar">
        <Avatar image="" alt="" dimension={40} />
    </div>
</div>