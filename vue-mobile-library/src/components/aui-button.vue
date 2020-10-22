<script>
export default {
  name: "aui-button",

  props: {
    /**
     * 按钮类型
     * @values default / primary / info / warning / danger
     */
    type: {
      type: String,
      default: "default",
    },
    /**
     * 尺寸
     * @values large / small / mini
     */
    size: {
      type: String,
      default: "small",
    },

    /**
     * 按钮内容
     */
    text: {
      type: [String, Number],
      default: "按钮",
    },

    /**
     * 禁用状态
     * @values true / false
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     * 按钮中的图标
     */
    icon: {
      type: String,
    },

    /**
     * 按钮中的class
     */
    classList: {
      type: String,
      default: "",
    },
  },

  methods: {
    click(event) {
      this.$emit("onClickCallback", event);
    },
  },
  watch: {
    text: {
      handler(newValue, oldValue) {
          var a = newValue;
          var n = oldValue;
      },
    },
  },
  render(createElement) {
    console.log(this.$props);
    let {
      text,
      type,
      size,
      disabled,
      icon,
      classList,
      click,
      touchstart,
    } = this;
    return createElement(
      "van-button",
      {
        props: {
          type,
          size,
          disabled,
          icon,
          classList,
        },
        on: {
          click,
          touchstart,
        },
      },
      text
    );
  },
};
</script>
