import { createApp } from "vue";
import Counter from "./Counter.vue";
import "./index.scss";

export default function (elem) {
  createApp(Counter).mount(elem);
}
