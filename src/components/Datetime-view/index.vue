<template>
  <div class="picker-dom">
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
      <van-datetime-picker
        v-model="currentDate"
        :type="type"
        :title="title"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @confirm="onConfirm"
        @cancel="showPopup = false"
      />
    </van-popup>
  </div>
</template>
<script>
/**
 * value：值
 * label：标题
 * required:是否必填
 * title：弹框标题
 * type：日期类型
 * minDate：日期选择范围，最小值
 * maxDate：日期选择范围，最大值
 */
export default {
  props: {
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
    title: {
      default: "选择日期",
    },
    type: {
      default: "date",
    },
    minDate: {
      default: () => {
        return new Date(2020, 0, 1);
      },
    },
    maxDate: {
      defrult: () => {
        return new Date(2025, 10, 1);
      },
    },
  },
  data() {
    return {
      index: 0,
      showPopup: false,
      currentDate: new Date(),
    };
  },

  created() {
    this.currentDate = this.value;
  },
  methods: {
    onConfirm(value) {
      this.showPopup = false;
      this.currentDate = this.timestampToDate(value);
      this.$emit("update:value", this.currentDate);
    },
    // 时间戳转日期
    addZero(n) {
      return n < 10 ? "0" + n : n;
    },
    timestampToDate(data) {
      const time = new Date(data);
      const year = time.getFullYear();
      const month = time.getMonth() + 1;
      const day = time.getDate();
      return `${year}-${this.addZero(month)}-${this.addZero(day)}`;
    },

    formatter(type, val) {
      if (type === "year") {
        return `${val}年`;
      } else if (type === "month") {
        return `${val}月`;
      } else if (type === "day") {
        return `${val}日`;
      }
      return val;
    },
  },
};
</script>