import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";
export const openDialog = (options) => {
  const { title, content, ok, cancel } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,//渲染Dialog时传一个visible为true
        {
          visible: true,
          "onUpdate:visible": (newVisible) => {
            if (newVisible === false) {
              close();
            }
          },
          ok, cancel
        },
        {
          title,//插槽在后面传
          content,
        }
      );
    },
  });
  app.mount(div);
};