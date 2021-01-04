<script>
import Note from "../../components/Note.svelte";
import { personalNotes } from "../../stores/personalNotes"

</script>

<div class="list-notes">
    <div class="list-notes__header">
        My personal notes
    </div>
    <div class="list-notes__list">
        {#each $personalNotes as e}
            <Note {...e} />
        {/each}
    </div>
</div>
<style>
.list-notes {
    padding:var(--search-height) 60px;
    overflow-y: auto;
}
.list-notes__header {
    font-weight: bold;
    padding: 20px 0 60px;
    font-size: 1.6rem;
}
.list-notes__list {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 20px;
}

</style>
