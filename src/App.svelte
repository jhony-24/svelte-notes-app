<script>
import { verifyIsLogged } from "./db/accountAuthentication";
import { onMount } from "svelte";
import ScreenLoading from "./components/ScreenLoading.svelte";

  let logged = false;
  let loading = true;
  const AsyncDashboard = import('./views/NotesDashboard/NotesDashboard.svelte').then(e=>e.default);
  const AsyncAuthentication = import('./views/Authentication/Authentication.svelte').then(e=>e.default);

  onMount(async () => {
    const { status } = await verifyIsLogged();
    logged = status;
    loading = false;
  });
</script>

{#if loading}
  <ScreenLoading />
{:else if logged}
  {#await AsyncDashboard}
    <ScreenLoading />    
  {:then DashboardComponentSuccess} 
    <DashboardComponentSuccess/>
  {/await}
{:else}
  {#await AsyncAuthentication}
    <ScreenLoading />    
  {:then AuthenticationComponentSuccess} 
    <AuthenticationComponentSuccess/>
  {/await}
  <AsyncAuthentication/>
{/if}

<style>
  :global(:root) {
    --sidebar-width: 150px;
    --search-height: 90px;
    --search-text-color: gray;
    --preload-background-image: rgba(0, 0, 0, 0.05);
    --primary-color: rgb(230, 60, 100);
    --primary-color-00: rgb(241, 204, 213);
    --text-base-color: black;
    --app-background: white;
    --background-button-add-note: black;
    --text-button-add-note: white;
    --text-input-base-color: black;
    --sidebar-background: white;
    --backdrop-modal-background: rgba(250, 250, 250, 0.8);
    --close-button-background: rgba(150, 150, 150, 0.4);
    --close-button-text: black;
  }

  :global([data-theme="dark"]) {
    --app-background: black;
    --text-base-color: white;
    --preload-background-image: rgba(100, 100, 100, 0.5);
    --background-button-add-note: white;
    --text-button-add-note: rgb(7, 7, 7);
    --text-input-base-color: white;
    --sidebar-background: rgb(15, 15, 15);
    --backdrop-modal-background: rgba(20, 20, 20, 0.7);
    --close-button-background: rgb(88, 88, 88);
    --close-button-text: rgb(206, 206, 206);
  }
</style>
