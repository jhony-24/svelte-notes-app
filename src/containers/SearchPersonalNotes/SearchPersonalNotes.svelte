<script>
    import IoIosSearch from 'svelte-icons/io/IoIosSearch.svelte'
    import Switch from '../../components/Switch.svelte';
    import UserDetailFloating from '../UserDetailFloating/UserDetailFloating.svelte';

</script>

<div class="search">
    <div class="engine">
        <div class="search__logo">
            <IoIosSearch/>
        </div>
        <div class="search__wrapper-input">
            <input placeholder="Search in notes..." class="search__input-engine" />
        </div>
        <div class="search__theme">
            <Switch />
        </div>
        <UserDetailFloating/>
    </div>
</div>
<style>
.search {
    display: flex;
    position: fixed;
    right: 0;
    width: calc(100% - var(--sidebar-width));
    height: var(--search-height);
    align-items: center;
    padding: 0 60px;
    background-color: var(--app-background);
}
.engine {
    width: 100%;
    display: flex;
    align-items: center;
}
.search__logo {
    width: 25px;
    height: 25px;
    user-select: none;
    flex: none;
    color: var(--search-text-color);
}
.search__wrapper-input {
    width: 100%;
    display: flex;
    margin-left: 10px;
}
.search__theme {
    margin:0 20px 0 10px;
}
.search__input-engine {
    color: var(--search-text-color);
    width: 100%;
    border:none;
    font-size: 1rem;
    outline: none;
    background: none;
    padding: 10px 0;
}
</style>