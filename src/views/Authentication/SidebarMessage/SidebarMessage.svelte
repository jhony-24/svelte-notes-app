<script>
  import { cx, css } from "@emotion/css";

  const classNames = {
    sidebar: css({
      width: "var(--sidebar-width)",
      backgroundColor: "var(--primary-color)",
      display: "flex",
      alignItems: "center",
      color: "var(--text-button-add-note)",
      padding: "20px 40px",
    }),
    title: css({
      fontSize: "1.8em",
    }),
    text: css({
        fontSize : ".9rem",
        marginTop : "25px",
        opacity : .8
    }),
  };
</script>

<div class={cx(classNames.sidebar)}>
  <div>
    <div class={classNames.title}>
      A few click away to inspired saving your cards information.
    </div>
    <p class={classNames.text}>When you have a account saved you can change in other accounts.</p>
  </div>
</div>
