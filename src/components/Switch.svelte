<script>
    export let checked = false;
    let statusChecked = checked;

    console.log(statusChecked)

</script>
<style>
.switch-wrapper {
    display: inline-block;
}
.switch {
    background-color: rgb(219, 219, 219);
    display: inline-block;
    width: 50px;
    height: 20px;
    border-radius: 10px;
    position: relative;
    transition: .3s;
}
.switch.active {
    background-color: var(--primary-color-00);
}

.switch > input[type="checkbox"] {
    display: none;
}

.switch__active {
    background-color: white;
    box-shadow: 0 2px 5px rgba(0,0,0,.09);
    height: 30px;
    width: 30px;
    border-radius: 100%;
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: .3s;
}

input[type="checkbox"]:checked ~ .switch__active {
    background-color: var(--primary-color);
    transform: translate(100%,-50%);
}


</style>
<div class="switch-wrapper">
    <label class="switch" class:active={statusChecked}>
        <input type="checkbox" bind:checked={statusChecked} on:change />
        <span class="switch__active" />
    </label>
</div>