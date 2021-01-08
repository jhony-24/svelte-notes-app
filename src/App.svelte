<script>
  import ListPersonalNotes from "./containers/ListPersonalNotes/ListPersonalNotes.svelte";
  import SearchPersonalNotes from "./containers/SearchPersonalNotes/SearchPersonalNotes.svelte";
  import SideBarCreator from "./containers/SideBarCreator/SideBarCreator.svelte";
  import { themeApplication } from "./stores/themeApplication";

  themeApplication.setTheme(localStorage.getItem("theme") || "light");
  themeApplication.subscribe(theme => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  });
</script>

<style>
  :global(:root) {
    --sidebar-width: 150px;
    --search-height: 90px;
    --search-text-color: gray;
    --preload-background-image: rgba(0, 0, 0, 0.05);
    --primary-color:rgb(230,60,100);
    --primary-color-00:rgb(241, 204, 213);
    --text-base-color: black;
    --app-background: white;
    --background-button-add-note:black;
    --text-button-add-note: white;
    --sidebar-background:white;
    --backdrop-modal-background:rgba(250,250,250,.8);
    --close-button-background:rgba(150,150,150,.4);
    --close-button-text:black;
  }

  :global([data-theme="dark"]) {
    --app-background: black;
    --text-base-color: white;
    --preload-background-image: rgba(100, 100, 100, 0.5);
    --background-button-add-note: white;
    --text-button-add-note: rgb(7, 7, 7);
    --sidebar-background:rgb(15,15,15);
    --backdrop-modal-background:rgba(20,20,20,.7);
    --close-button-background:rgb(88, 88, 88);
    --close-button-text:rgb(206, 206, 206);
  }

  #app {
    position: relative;
    height: 100%;
    display: grid;
    grid-template-columns: var(--sidebar-width) 1fr;
    grid-template-rows: 1fr;
    background-color: var(--app-background);
  }
  :global(*) {
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :global(body, html) {
    height: 100%;
  }
</style>

<div id="app">
  <SideBarCreator />
  <SearchPersonalNotes />
  <ListPersonalNotes />
</div>
