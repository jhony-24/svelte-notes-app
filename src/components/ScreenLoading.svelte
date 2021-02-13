<script>
  import { css, keyframes } from "@emotion/css";

  const keyframesLoading = keyframes`
    from {
        transform:rotate(360deg);
    }
  `;

  const cssBackdrop = css({
    background: "var(--app-background)",
    position: "fixed",
    width: "100%",
    height: "100%",
    display: "flex",
  });
  const cssLoading = css({
    border: "3px solid var(--app-background)",
    width: "30px",
    height: "30px",
    borderRadius: "100%",
    margin: "auto",
    borderLeftColor: "var(--primary-color)",
    animation: `${keyframesLoading} .6s infinite linear`,
  });
</script>

<div class={cssBackdrop}>
  <div class={cssLoading} />
</div>
