<script>
  import { addAccount, verifyIfExistsAccount } from "../../../db/accountAuthentication";


  let tab = "";
  let username = "";
  let email = "";
  function changeTab(tabValue) {
    tab = tabValue;
  }

  function onStart() {
    if(tab === "Sign up") {
      addAccount({username,email}).then(()=>{
        tab = "Sign in";
      })
    }
    if(tab === "Sign in") {
      verifyIfExistsAccount({username,email}).then(isSuccess => {
        if(isSuccess) {
          location.reload();
        }
      });
    }
  }
</script>

<div class="main-auth">
  <div class="type-filter">
      {#if !tab}
        <h1 class="type-filter__title">Choose the type login</h1>
        <p class="type-filter__message">
          You can to choose a option to start a session in the application.
        </p>  
        <div class="options-access">
          <div class="options-access__item" on:click={() => changeTab('Sign in')}>Sign in</div>
          <div class="options-access__item" on:click={() => changeTab('Sign up')}>Create an account</div>
        </div>
      {:else}
        <section class="form">
          <h1 class="form__title">{tab}</h1>  
          <input type="text" placeholder="Username" class="form__control" bind:value={username}/>
          <input type="text" placeholder="Email" class="form__control" bind:value={email} />
          <div class="flex-center">
            <div class="form__submit" on:click={onStart}>Start</div>
            <div class="form__cancel" on:click={()=>changeTab('')}>Cancel</div>
          </div>
        </section>
      {/if}
  </div>
</div>

<style>
  .form {
    display: inline-block;
    width: 300px; 
  }
  .form__title {
    font-size: 2.3em;
    margin-bottom: 15px;
  }
  .form__control {
    padding: 15px;
    margin-bottom: 30px;
    border-radius: 10px;
    display: block;
    outline: none;
    border: none;
    font-size: .96em;
    width: 100%;
  }
  .form__submit {
    background-color: var(--primary-color);
    padding: 10px 30px;
    border-radius: 5px;
    color: var(--text-button-add-note);
    text-align: center;
    flex: 1;
  }
  .form__cancel {
    flex: 1;
    margin-left: 10px;
    background-color: var(--preload-background-image);
    padding: 10px 30px;
    border-radius: 5px;
    text-align: center;
    color: var(--text-base-color);
  }
  .flex-center {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .main-auth {
    width: var(--main-width);
    display:flex;
    align-items: center;
    background-color: rgba(0,0,0,.03);
  }
  .type-filter {
    width: 80%;
    margin: auto;
  }
  .type-filter__title {
    color: var(--text-base-color);
  }
  .type-filter__message {
    color: var(--text-base-color);
    margin-top:15px;
    font-size:.9em;
  }
  .options-access {
    margin-top: 30px;
    display: inline-flex;
    flex-direction: column;
    width: 60%;
  } 
  .options-access__item {
    transition: .3s;
    padding: 20px 10px;
    border-radius: 10px;
    margin-bottom: 30px;
    font-weight: bold;
    border: 2px solid transparent;
    background-color: var(--app-background);
    box-shadow: 0 10px 20px rgba(0,0,0,.02);
  }
  .options-access__item:hover {
    border-color: var(--primary-color);
  }
</style>
