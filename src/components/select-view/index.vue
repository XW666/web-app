<template>
  <div class="select-dom">
    <van-field
      readonly
      clickable
      :required="required"
      :value="value"
      :name="label"
      :label="label"
      placeholder="请选择"
      right-icon="arrow"
      input-align="right"
      @click="showPopup = true"
    />
    <van-popup
      v-model="showPopup"
      position="bottom"
      get-container=".address-contrain"
    >
      <van-picker
        show-toolbar
        :default-index="index"
        :columns="list"
        @confirm="onConfirm"
        @cancel="showPopup = false"
      />
    </van-popup>
  </div>
</template>
<script>
/**
 * list:下拉选择项
 * value：值
 * label：标题
 * required:是否必填
 */
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
    value: {
      default: "",
    },
    label: {
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      index: 0,
      showPopup: false,
    };
  },
  watch: {
    value: {
      handler(val) {
        this.setIndex(val);
      },
    },
  },
  created() {
    this.setIndex(this.value);
  },
  methods: {
    onConfirm(obj) {
      this.showPopup = false;
      this.$emit("update:value", obj.text);
      this.setIndex(obj.text);
    },
    setIndex(text) {
      if (text) {
        this.list.forEach((element, index) => {
          if (element.text == text) {
            this.index = index;
          }
        });
      }
    },
  },
};
</script>