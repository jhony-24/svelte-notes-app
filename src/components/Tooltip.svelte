<script>
    import { fade } from "svelte/transition";
    export let tooltip = false,x = "30%", y = "0%", w = "200px", dark = false;
    let visible = false;
    const onCreateTooltip = () => (visible = true);
    const onDestroyTooltip = () => (visible = false);
</script>

<style>
    .tooltip-wrapper {
        position: relative;
        display: inline-block;
    }
    .tooltip {
        position: absolute;
        background-color: white;
        left:0;
        color: black;
        top: 0;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        padding: 10px;
        font-size: 0.8rem;
    }
    .tooltip.dark {
        color: white;
        background-color: rgba(0,0,0,.9);
    }
</style>

<div
    class="tooltip-wrapper"
    data-tooltip={tooltip}
    on:mouseenter={onCreateTooltip}
    on:mouseleave={onDestroyTooltip}>
    <slot />
    {#if visible}
        <span
            class="tooltip"
            class:dark={dark}
            transition:fade
            style="transform:translateX({x})translateY({y});width:{w};">{tooltip}</span>
    {/if}
</div>
