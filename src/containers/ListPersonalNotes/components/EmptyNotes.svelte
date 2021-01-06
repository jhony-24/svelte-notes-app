<script>
    import { createNoteByModal } from "../../../stores/createNoteByModal";
</script>

<style>
    .empty-notes {
        color: var(--text-base-color);
        text-align: center;
        width: 100%;
        grid-column: 4 span;
        margin-top: 80px;
    }
    .title {
        font-size: 3rem;
        margin-bottom: 30px;
    }
    .message {
        font-size: 14px;
        line-height: 20px;
    }
    .empty-notes__button {
        margin-top: 20px;
        background-color: var(--primary-color);
        border-radius: 30px;
        display: inline-block;
        padding: 15px;
        font-size: 0.9rem;
        font-weight: bold;
        outline: none;
        cursor: pointer;
    }
</style>

<div class="empty-notes">
    <h3 class="title">Sorry, empty notes</h3>
    <p class="message">
        You don't have notes to previsualize in this moment, Do you want to
        create a note ?
    </p>
    <div
        on:click={createNoteByModal.openModal}
        tabindex="0"
        role="button"
        class="empty-notes__button">
        Create a note now
    </div>
</div>
