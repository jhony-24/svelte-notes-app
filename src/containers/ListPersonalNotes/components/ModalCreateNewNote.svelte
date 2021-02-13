<script>
    import Modal from "../../../components/Modal.svelte";
    import { tagColorLevels } from "../../../stores/tagColorLevels"
    import ColorOption from "../../../components/ColorOption.svelte"
    import { createNoteByModal } from "../../../stores/createNoteByModal";
    import { personalNotes } from "../../../stores/personalNotes";
    import { fade } from "svelte/transition"

    let isModalVisible = false;
    let value = "";
    let colorSelected = "";
    $: isEmptyValue = value.trim() === "";
    
    const onSelectColorOption = (color) => () =>  colorSelected = color;
    const onCreateNewNote = () => {
        let data = {
            note:value,
            color:colorSelected,
            date : new Date().toLocaleString()
        }
        if(data.color !== ""){
            personalNotes.addNote(data);
            createNoteByModal.closeModal();
        }
        else {
            alert("Choose a tag color")
        }
    }

    createNoteByModal.isVisible(isVisible => isModalVisible = isVisible);

</script>

<style>
    .detail {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .detail__message {
        color: var(--text-base-color);
        font-size: .8rem;
        display: block;
        margin-bottom:30px;
    }
    .color__items {
        display: flex;
        justify-content: space-between;
    }
    .color-option {
        display: flex;
        flex-direction: column;
        align-items: center;   
    }
    .color-option__text {
        color: var(--text-input-base-color);
        display: block;
        margin-top: 10px;
        font-size: .9rem;
        opacity: .8;
    }
    .input__type-note {
        resize: none;
        border:none;
        background: rgba(100,100,100,.1);
        border-radius: 20px;
        margin: 20px 0;
        padding: 20px;
        font-size: 1rem;
        height: 100%;
        color: var(--text-input-base-color);
        outline: none;
    }
    .detail__button-create {
        width: 100%;
        padding: 16px;
        outline: none;
        background-color: var(--primary-color);
        border-radius: 10px;
        color: white;
        border: none;
        margin-top: auto;
        cursor: pointer;
        transition:background-color .3s;
    }
    .detail__button-create:disabled {
        background-color: rgba(100,100,100,.1);
        cursor: not-allowed;
    }
</style>

{#if isModalVisible}
    <Modal title="Create new note" on:onClose={createNoteByModal.closeModal}>
        <div class="detail" transition:fade={{duration:200}}>
            <span class="detail__message">You can to create a note with a custom tag.</span>
            <div class="color__items">
                {#each $tagColorLevels as {color,text}}
                    <div class="color-option">
                        <ColorOption color={color} on:click={onSelectColorOption(color)} />
                        <span class="color-option__text">{text}</span>
                    </div>
                {/each}
            </div>
            <textarea bind:value={value} class="input__type-note" placeholder="Type a note..." spellcheck="false" ></textarea>
            <button disabled={isEmptyValue} on:click={onCreateNewNote} class="detail__button-create" >Create note</button>
        </div>
    </Modal>
{/if}