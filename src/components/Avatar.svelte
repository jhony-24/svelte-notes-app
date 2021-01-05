<script>
    export let image, dimension = 30, alt = "";
</script>
<style>
.avatar {
    border-radius: 100%;
    object-fit: cover;
    background-color: var(--preload-background-image);
    -webkit-user-drag: none;
}
</style>
<img 
    src={image} 
    style="width:{dimension}px;height:{dimension}px;" 
    alt={alt} 
    class="avatar" 
    on:click
    on:contextmenu={e=>{e.preventDefault()}} />