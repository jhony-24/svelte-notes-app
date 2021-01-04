<script>
 import ListNotes from "./components/ListNotes.svelte";
 import SideBarCreator from "./components/SideBarCreator.svelte";
 let data = []

function onAddNewNote({detail:{color}}){
  let newData = {
    id : Math.random(),
    note : "",
    date : new Date().toLocaleTimeString(),
    color
  }
  data = [...data,newData]
}
</script>

<div id="app">
  <SideBarCreator on:createnewnote={onAddNewNote} />
  <ListNotes data={data} />
</div>

<style>
#app {
  position: relative;
  height: 100%;
  display: grid;
  grid-template-columns: 100px 1fr;
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
