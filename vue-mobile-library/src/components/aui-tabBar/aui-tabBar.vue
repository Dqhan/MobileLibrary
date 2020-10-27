<script>
export default {
  name: "aui-tabBar",

  props: {
    selectedIndex: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    onChange(index) {
      this.$emit("handleChange", index);
    },
  },
  watch: {},
  render(createElement) {
    let { selectedIndex, onChange } = this;
    console.log(this.$slots.default);
    return createElement(
      "van-tabbar",
      {
        props: {
          "v-model": selectedIndex,
        },
        on: {
          change: onChange,
        },
      },
      this.$slots.default
    );
  },
};
</script>
