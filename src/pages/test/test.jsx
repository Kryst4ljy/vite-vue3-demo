import { defineComponent, ref } from "vue";
import styles from "./index.module.scss";

const test = defineComponent({
  setup() {
    const title = ref("ceshi");

    return {
      title,
    };
  },
  render() {
    return (
      <div>
        <p className={styles["test"]}>{this.title}</p>
      </div>
    );
  },
});

export default test;
