<template>
  <div class="info-container">
    <div class="title">
      <svg class="closeImg" aria-hidden="true">
        <use :xlink:href="'#icon-jibenxinxi'" />
      </svg>
      基本资料
    </div>
    <div class="infp-main">
      <van-cell-group>
        <van-cell v-for="(item, index) in fromData" :key="index">
          <van-field
            v-if="item.type === 'input'"
            v-model="item.value"
            :label="item.label"
            :required="item.required"
            right-icon="custom"
            placeholder="请填写"
            input-align="right"
          >
            <van-icon
              class="iconfont icon-kong"
              class-prefix="icon"
              slot="right-icon"
              name="custom"
            ></van-icon>
          </van-field>
          <van-field
            v-if="item.type === 'input2'"
            v-model="item.value"
            :label="item.label"
            :required="item.required"
            right-icon="custom"
            placeholder="请填写"
            input-align="right"
          >
            <van-icon
              class="iconfont"
              :class="
                cardCode ? 'icon-zizhuruzhi-miwen' : 'icon-zizhuruzhi-mingwen'
              "
              class-prefix="icon"
              slot="right-icon"
              name="custom"
              @click="iconClick(item)"
            ></van-icon>
          </van-field>
          <van-field
            v-if="item.type === 'textarea'"
            v-model="item.value"
            :label="item.label"
            rows="1"
            type="textarea"
            :required="item.required"
            :autosize="item.autosize"
            right-icon="custom"
            placeholder="请填写"
            input-align="right"
          >
            <van-icon
              class="iconfont icon-kong"
              class-prefix="icon"
              slot="right-icon"
              name="custom"
            ></van-icon>
          </van-field>
          <SelectView
            v-if="item.type === 'select'"
            :value.sync="item.value"
            :list="item.list"
            :label="item.label"
            :required="item.required"
          ></SelectView>
          <DatetimeView
            v-if="item.type === 'date'"
            :value.sync="item.value"
            :type="item.type"
            :label="item.label"
            :required="item.required"
          ></DatetimeView>
          <AreaView
            v-if="item.type === 'area'"
            :value.sync="item.value"
            :label="item.label"
            :required="item.required"
          ></AreaView>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
import SelectView from "../../components/select-view/index"; //下拉选择
import DatetimeView from "../../components/Datetime-view/index"; //日期类型选择
import AreaView from "../../components/Area-view/index";
import utils from "@/utils/index";
export default {
  components: {
    SelectView,
    DatetimeView,
    AreaView,
  },
  data() {
    return {
      fromData: [
        {
          label: "姓名",
          required: true,
          value: "",
          type: "input",
        },
        {
          label: "性别",
          required: true,
          value: "女",
          type: "select",
          showPopup: false,
          list: [
            {
              value: 1,
              text: "男",
            },
            {
              value: 2,
              text: "女",
            },
          ],
        },
        {
          label: "证件类型",
          required: true,
          value: "",
          type: "input",
        },
        {
          label: "证件号码",
          required: true,
          value: "11204416541220243X",
          type: "input2",
        },
        {
          label: "出生日期",
          required: true,
          value: "2020-01-05",
          type: "date",
        },
        {
          label: "证件生效日期",
          required: true,
          value: "",
          type: "date",
        },
        {
          label: "户籍地址所在地",
          required: true,
          value: {
            companyProvince: "140000",
            companyCity: "140100",
            companyDistrict: "140105",
          },
          type: "area",
        },
        {
          label: "详细地址",
          required: true,
          value: "",
          autosize: true,
          type: "textarea",
        },
      ],
      cardCode: false,
      cardCodeValue: "",
    };
  },
  created() {},
  mounted() {
    this.setFromData();
  },
  methods: {
    setFromData() {
      this.fromData.map((item) => {
        if (item.type === "input2") {
          this.cardCodeValue = JSON.parse(JSON.stringify(item.value));
          item.value = utils.setIdCard(item.value);
        }
      });
    },
    onConfirm(obj) {
      //性别
      console.log("kk", value, index, obj);
      obj.gender = obj.text;
      // this.setGenderIndex(obj.text);
      obj.showGender = false;
    },
    setGenderIndex(text) {
      this.columnsGender.forEach((element, index) => {
        if (element.text == text) {
          this.tgenderIndex = index;
        }
      });
    },
    iconClick(item) {
      this.cardCode = !this.cardCode;
      item.value = this.cardCode
        ? this.cardCodeValue
        : utils.setIdCard(item.value);
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/common.scss";
</style>