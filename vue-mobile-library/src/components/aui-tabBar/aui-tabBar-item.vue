<script>
export default {
  name: "aui-tabBar",

  props: {
    index: {
      type: Number,
      default: 0,
    },
  },

  methods: {},
  watch: {},
  render(createElement) {
    let { index } = this;
    return createElement(
      "van-tabbar-item",
      {
        props: {
          name: index,
        },
      },
      this.$slots.default
    );
  },
};
</script>
