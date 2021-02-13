<script>
import MainAuthenticationSection from "./MainAuthenticationSection/MainAuthenticationSection.svelte";
import SidebarMessage from "./SidebarMessage/SidebarMessage.svelte";


</script>

<div id="app">
    <SidebarMessage />
    <MainAuthenticationSection/>
</div>
<style>
    #app {
        height: 100%;
        display:flex;
        width:100%;
        --sidebar-width:280px;
        --main-width:100%;
    }
</style>