<script>
    import MdEdit from 'svelte-icons/md/MdEdit.svelte'
    import MdSave from 'svelte-icons/md/MdSave.svelte'
    import { fade } from "svelte/transition"
    import { removeNoteById } from "../db/personalNotes"
    import { personalNotes } from "../stores/personalNotes"
    export let note = "",id = "",date = "",color = "";
    let editable = false;
    let value = note;
    const toggleEditable = () => editable = !editable;
    const onDeleteNote = () => {
        removeNoteById(id)
        personalNotes.getNotes();
    }
</script>


<div class="note" style="background-color:{color}" data-note={id} transition:fade|local>
    <span class="note__delete" on:click={onDeleteNote}>&#x2715</span>
    <div class="note__editable">
        {#if editable}
            <textarea
            placeholder="Editar my nota..."
            bind:value={value}
            class="note__input--editable"
            spellcheck="false"
             />
        {:else}
            {#if value != ""}
                {value}
            {:else}
                Editar mi nota...
            {/if}
        {/if}
    </div>
    <div class="note__detail">
        <span class="note__date">{date}</span>
        <button class="note__button-edit" on:click={toggleEditable}>
            <div class="icon">
                {#if editable}
                    <MdSave/>
                {:else}
                    <MdEdit/>
                {/if}
            </div>
        </button>
    </div>
</div>
<style>
    .note {
        border-radius: 10px;
        color: var(--text-base-color);
        height: 220px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .note__delete {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        width:30px;
        right: -10px;
        top: -10px;
        color: var(--app-background);
        background-color: var(--text-base-color);
        height: 30px;
        cursor: pointer;
        transition: .3s;
        visibility: hidden;
        opacity: 0;
    }
    .note:hover .note__delete {
        opacity: 1;
        visibility: visible;
    }
    .note__editable {
        width: 100%;
        height: 100%;
    }
    .note__input--editable {
        background: none;
        resize: none;
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        border: none;
        font-size: 1rem;
    }
    .note__detail {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
    }
    .note__date {
        font-size: 0.8rem;
    }
    .note__button-edit {
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
        border-radius: 100%;
    }
    .note__button-edit > .icon {
        width: 20px;
        height: 20px;
    }
</style>
