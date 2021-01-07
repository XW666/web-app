<template>
  <div class="area-dom">
    <van-field
      label-width="7em"
      readonly
      clickable
      :required="required"
      :value="area"
      :name="label"
      :label="label"
      placeholder="请选择"
      right-icon="arrow"
      input-align="right"
      @click="showArea = true"
    />
    <van-popup
      v-model="showArea"
      position="bottom"
      get-container=".address-contrain"
    >
      <van-area
        :area-list="areaList"
        :value="value.companyDistrict"
        @confirm="onConfirm"
        @cancel="showArea = false"
      />
    </van-popup>
  </div>
</template>
<script>
/**
 * value：值
 * label：标题
 * required:是否必填
 */
import AreaList from "@/utils/area";
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
  },
  data() {
    return {
      areaList: AreaList, //省市区
      showArea: false,
      companyProvince: "", //省
      companyCity: "", //市
      companyDistrict: "", //区
      area: "",
    };
  },

  created() {
    this.setIndex(this.value);
  },
  methods: {
    onConfirm(values) {
      this.companyProvince = values[0].code;
      this.companyCity = values[1].code;
      this.companyDistrict = values[2].code;
      this.area = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("");
      this.$emit("update:value", {
        companyProvince: this.companyProvince,
        companyCity: this.companyCity,
        companyDistrict: this.companyDistrict,
      });
      this.showArea = false;
    },
    setIndex() {
      if (this.value) {
        this.area = `${AreaList.province_list[this.value.companyProvince]}${
          AreaList.city_list[this.value.companyCity]
        }${AreaList.county_list[this.value.companyDistrict]}`;
      }
    },
  },
};
</script>
<style lang="scss">
.area-dom {
  .van-field__body .van-field__control {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>