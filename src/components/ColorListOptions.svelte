<script>
    import { createEventDispatcher } from "svelte";
    export const colors = [
        { color: "rgb(241, 202, 158)" },
        { color: "rgb(241, 158, 158)" },
        { color: "rgb(211, 158, 241)" },
        { color: " rgb(186, 230, 243)" },
        { color: "rgb(207, 243, 186)" }
    ];

    let dispatch = createEventDispatcher();
    const onColorSelected = (payload) => () => {
        dispatch("colorselected",payload);
    }
</script>

<div class="list-colors">
    {#each colors as item}
        <span
            class="list-colors__item"
            style="background-color:{item.color}"
            on:click={onColorSelected(item)} />
    {/each}
</div>
<style>
    .list-colors__item {
        width:25px;
        height:25px;
        display: block;
        margin: 30px 0;
        border-radius: 100%;
        transition: transform .3s;
    }
    .list-colors__item:hover {
        border:4px solid white;
        box-shadow: 0 0 0 2px black;
        transform: scale(1.2);
        cursor: pointer;
    }
</style>