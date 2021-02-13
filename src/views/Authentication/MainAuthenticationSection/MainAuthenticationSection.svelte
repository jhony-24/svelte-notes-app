<script>
  import { cx, css } from "@emotion/css";

  const classNames = {
    main: css({
      width: "var(--main-width)",
      display: "flex",
      alignItems: "center",
      backgroundColor : "rgba(0,0,0,.03)"
    }),
  };
</script>

<div class={cx(classNames.main)}>
  <div class="type-filter">
    <div>
      <h1 class="type-filter__title">Choose the type login</h1>
      <p class="type-filter__message">
        You can to choose a option to start a session in the application.
      </p>
    </div>
  </div>
</div>

<style>
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
</style>
