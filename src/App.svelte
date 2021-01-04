<script>
 import ListPersonalNotes from "./containers/ListPersonalNotes/ListPersonalNotes.svelte";
import SearchPersonalNotes from "./containers/SearchPersonalNotes/SearchPersonalNotes.svelte";
 import SideBarCreator from "./containers/SideBarCreator/SideBarCreator.svelte";

</script>

<div id="app">
  <SideBarCreator  />
  <SearchPersonalNotes/>
  <ListPersonalNotes />
</div>

<style>
:global(:root) {
    --sidebar-width:150px;
    --search-height:90px;
    --search-text-color:gray;
}
#app {
  position: relative;
  height: 100%;
  display: grid;
  grid-template-columns: var(--sidebar-width) 1fr;
  grid-template-rows: 1fr;
}
:global(*) {
  font-family:Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  margin:0;
  padding:0;
}
:global(body,html) {
  height: 100%;

}
</style>
