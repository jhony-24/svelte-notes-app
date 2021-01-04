<script>
	import { createEventDispatcher } from 'svelte';
    import ColorListOptions from './ColorListOptions.svelte';

    let dispatch = createEventDispatcher()
    let selectColorVisible = false;
    function showTagColorOptions() {
        selectColorVisible = true;
    }
    function onColorSelected({detail}){
        dispatch("createnewnote",detail);
    }
</script>
<div class="sidebar">
    <div class="sidebar__title">Notes</div>
    <div class="sidebar__button--add" on:click={showTagColorOptions}>
        + <span class="tooltip">agregar nueva nota</span>
    </div>
    {#if selectColorVisible}
        <ColorListOptions on:colorselected={onColorSelected}/>
    {/if}
</div>
<style>
.sidebar {
    display: flex;
    border-right: 1px solid rgba(0,0,0,.06);
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;
}
.sidebar__title {
    font-weight: bold;
    font-size: .9rem;
}
.sidebar__button--add {
    position: relative;
    background-color: black;
    color: white;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    flex: none;
    user-select: none;
    font-size: 1.5rem;
    cursor: pointer;
}
.sidebar__button--add:hover .tooltip {
    visibility: visible;
    opacity: 1;
}
.sidebar__button--add .tooltip{
    position: absolute;
    visibility: hidden;
    background-color:white;
    right: -10px;
    color: black;
    box-shadow: 0 10px 20px rgba(0,0,0,.1);
    transform: translateX(100%);
    width: 200px;
    border-radius: 5px;
    padding: 10px;
    font-size: .8rem;
    opacity: 0;
    transition: opacity .3s;
}
</style>