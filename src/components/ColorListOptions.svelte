<script>
    import { createEventDispatcher } from "svelte";
    import { fade } from "svelte/transition";
    import ColorOption from "./ColorOption.svelte";
    import Tooltip from "./Tooltip.svelte";
    export let data = [];
    let dispatch = createEventDispatcher();
    const onColorSelected = payload => () => dispatch("colorselected", payload);
</script>

<style>
    .color {
        margin: 30px 0;
    }
</style>

<div class="list-colors">
    {#each data as item}
        <div class="color" transition:fade>
            <Tooltip tooltip="Color level {item.level}" w="100px" dark x="40%">
                <ColorOption
                    on:click={onColorSelected(item)}
                    color={item.color}
                    dimension="30px" />
            </Tooltip>
        </div>
    {/each}
</div>
