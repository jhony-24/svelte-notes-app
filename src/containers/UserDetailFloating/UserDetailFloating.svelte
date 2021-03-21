<script>
import Avatar from "../../components/Avatar.svelte";
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
</style>
<div class="wrapper">
    <span class="name"> 
        {username}
    </span>
    <div class="avatar">
        <Avatar image="" alt="" dimension={40} />
    </div>
</div>