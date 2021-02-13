<script>
    import ListPersonalNotes from "../../containers/ListPersonalNotes/ListPersonalNotes.svelte";
    import SearchPersonalNotes from "../../containers/SearchPersonalNotes/SearchPersonalNotes.svelte";
    import SideBarCreator from "../../containers/SideBarCreator/SideBarCreator.svelte";
    import { themeApplication } from "../../stores/themeApplication";
  
    themeApplication.setTheme(localStorage.getItem("theme") || "light");
    themeApplication.subscribe(theme => {
      document.body.dataset.theme = theme;
      localStorage.setItem("theme", theme);
    });
  </script>
  
  <style>
    #app {
      position: relative;
      height: 100%;
      display: grid;
      grid-template-columns: var(--sidebar-width) 1fr;
      grid-template-rows: 1fr;
      background-color: var(--app-background);
    }
  </style>
  
  <div id="app">
    <SideBarCreator />
    <SearchPersonalNotes />
    <ListPersonalNotes />
  </div>
  