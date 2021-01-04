<script>
    export let dimension = 35;
</script>

<style>
    .action-button {
        cursor: pointer;
        background-color: black;
        color: white;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        outline: none;
        width: 35px;
        height: 35px;
        font-size: 1.4rem;
        position: relative;
        border-radius: 100%;
    }
</style>

<button
    class="action-button"
    style="width:{dimension}px;height:{dimension}px;"
    on:click>
    <slot />
</button>
