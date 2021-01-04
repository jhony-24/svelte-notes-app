<script>
    import MdEdit from 'svelte-icons/md/MdEdit.svelte'
    import MdSave from 'svelte-icons/md/MdSave.svelte'
    import { fade } from "svelte/transition"
    export let note = "",id = "",date = "",color = "";
    let editable = false;
    let value = note;
    const toggleEditable = () => editable = !editable;
</script>


<div class="note" style="background-color:{color}" data-note={id} transition:fade|local>
    <div class="note__editable">
        {#if editable}
            <textarea
            placeholder="Editar my nota..."
            bind:value={value}
            class="note__input--editable"
            spellcheck="false"
            autofocus />
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
        color: black;
        height: 220px;
        padding: 20px;
        display: flex;
        flex-direction: column;
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
