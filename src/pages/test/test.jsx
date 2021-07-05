import { defineComponent, ref } from "vue";
import styles from "./index.module.scss";
import Scroll from "../../components/scroll/scroll.vue";

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
        <Scroll className={styles.scroll}>
          <div>
            <p className={styles.test}>{this.title}</p>
          </div>
        </Scroll>
      </div>
    );
  },
});

export default test;
