<script>
import Note from "./Note.svelte";

export const colors = {
    important1 : "rgb(241, 202, 158)",
    important2 : "rgb(241, 158, 158)",
    important3 : "rgb(211, 158, 241)",
    important4 : " rgb(186, 230, 243)",
    important5 : "rgb(207, 243, 186)"
};

export let data = []
let visibleModal = false;

</script>

<div class="list-notes">
    <div class="list-notes__header">
        My personal notes
    </div>
    <div class="list-notes__list">
        {#each data as e}
        <Note {...e} />
        {/each}
    </div>
</div>
<style>
.list-notes {
    padding: 60px;
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
