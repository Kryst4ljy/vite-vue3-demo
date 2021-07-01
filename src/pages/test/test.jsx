import { defineComponent, ref } from "vue";

const test = defineComponent({
  setup() {
    const title = ref("ceshi");

    return {
      title,
    };
  },
  render() {
    return <div>{this.title}</div>;
  },
});

export default test;
