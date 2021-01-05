<script>
import Avatar from "../../components/Avatar.svelte";

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
        Jhony Vega
    </span>
    <div class="avatar">
        <Avatar image="" alt="" dimension={40} />
    </div>
</div>