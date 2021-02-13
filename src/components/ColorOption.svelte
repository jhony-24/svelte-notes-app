<script>
    export let color, dimension = "25px";
</script>

<style>
    .color {
        display: block;
        border-radius: 100%;
        transition: transform 0.3s;
        outline: none;
    }
    .color:hover {
        border: 4px solid white;
        box-shadow: 0 0 0 2px black;
        transform: scale(1.2);
        cursor: pointer;
    }
</style>

<span role="button" tabindex="0" class="color" style="background-color:{color};width:{dimension};height:{dimension};" on:click />
