<script>
    import { createEventDispatcher } from "svelte"
    import IoIosClose from "svelte-icons/io/IoIosClose.svelte"
    export let w = 500,h = 400, title, fluid = false;
    const dispatcher = createEventDispatcher();
    const handlerOnClose = () => dispatcher("onClose");
</script>
<div class="backdrop">
    <div class="modal" style="width:{w}px;height:{h}px;">
        <div class="close" on:click={handlerOnClose}>
            <span class="close__icon"><IoIosClose/></span>
        </div>
        <div class="modal__header" class:fluid>
            {#if $$slots.header}
                <slot name="header"></slot>
            {:else}
                <span class="title">{title}</span>
            {/if}
        </div>
        <div class="modal__body" class:fluid>
            <slot></slot>
        </div>
    </div>
</div>
<style>
.backdrop {
    background-color: var(--backdrop-modal-background);
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    display: flex;  
}
.modal {
    background-color: var(--app-background);
    border-radius: 20px;
    margin: auto;
    box-shadow: 0 20px 10px rgba(0,0,0,.05);
    position: relative;
}
.modal__header {
    color: var(--text-base-color);
    padding: 20px;
}
.modal__body {
    padding: 20px;
}
.title {
    font-size: 1.6em;
    display: block;
}
.fluid {
    padding: 0;
}
.close {
    width:40px;
    height:40px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
    margin: 15px;
    background-color: var(--close-button-background);
    color: var(--close-button-text);
    cursor: pointer;
}
.close__icon {
    width: 80%;
    height: 80%;
}
</style>