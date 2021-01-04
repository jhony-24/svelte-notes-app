<script>
    export let note = "",id = "",date = "",color = "";
    
    let editable = false;
    let value = note;

    function saveTextEditable() {
        alert(id);
    }
    function toggleEditable() {
        if(editable) {
            saveTextEditable();
        }
        editable = !editable;
    }
</script>


<div class="note" style="background-color:{color}" data-note={id}>
    <div class="note__editable">
        {#if editable}
            <textarea
                placeholder="Editar my nota..."
                bind:value={value}
                class="note__input--editable"
                spellcheck="false"
                autofocus />
        {:else}{value}{/if}
    </div>
    <div class="note__detail">
        <span class="note__date">{date}</span>
        <button class="note__button-edit" on:click={toggleEditable}>
        {#if editable}
            Guardar
        {:else}
            Editar
        {/if}
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
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .8rem;
        border: none;
        width: 80px;
        outline: none;
    }
</style>
