<script>
  import { cx, css } from "@emotion/css";
  export let title = "", description = "", selected = false;

  const classNames = {
      wrapper : {
          default : css({
            backgroundColor : "white",
            borderRadius : "15px",
            boxShadow : "0 10px 15px rgba(0,0,0,.1)",
            display: "flex",
            alignItems : "center"
          }),
          selected : css({
            border : "2px solid rgb(30,130,230)",
          })
      },
      title: css({
          fontWeight : "bold",
      }),
      description : css({
          fontSize : ".8em",
          marginTop : "5px"
      }),
      detail : css({
      })
  }

</script>

<div on:click class={cx(classNames.wrapper.default,selected && classNames.wrapper.selected)}>
    <div class={classNames.detail}>
        <div class={classNames.title}>{title}</div>
        <div class={classNames.description}>{description}</div>
    </div>
</div>
