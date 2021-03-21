<script>
    import CircleActionButton from '../../components/CircleActionButton.svelte';
    import ColorListOptions from '../../components/ColorListOptions.svelte';
    import Tooltip from '../../components/Tooltip.svelte';
    import { tagColorLevels } from "../../stores/tagColorLevels"
    import { personalNotes } from "../../stores/personalNotes"

    let selectColorVisible = false;
    const showTagColorOptions = () => selectColorVisible = true;
    const onColorSelected = ({detail:{color}}) => {
        personalNotes.addNote({
            note : "",
            date : new Date().toLocaleTimeString(),
            color,
        });
        selectColorVisible = false;
    }
</script>

<div class="sidebar">
    <div class="sidebar__title">Notes</div>
    <div class="sidebar__button-add">
        <Tooltip tooltip="Agregar nueva nota" x="40%" y="40%">
            <CircleActionButton on:click={showTagColorOptions} dimension={60}>+</CircleActionButton>
        </Tooltip>
    </div>
    {#if selectColorVisible}
        <ColorListOptions data={$tagColorLevels} on:colorselected={onColorSelected}/>
    {/if}
</div>

<style>
.sidebar {
    display: flex;
    border-right: 1px solid rgba(15, 15, 15, 0.06);
    flex-direction: column;
    align-items: center;
    background-color: var(--sidebar-background);
}
.sidebar__title {
    font-weight: bold;
    font-size: 1rem;
    margin-top: 40px;
    color: var(--text-base-color);
}
.sidebar__button-add {
    margin-top: 50px;
}
</style>