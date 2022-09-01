<template>
<div>
  <el-date-picker
      v-model="value"
      type="date"
      placeholder="请选择日期"
  />
  <div style="margin-top: 20px">
    <el-date-picker
        v-model="value2"
        type="date"
        placeholder="Pick a day"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
    />
  </div>
  <div style="margin-top: 20px">
    <el-date-picker
        v-model="value"
        type="week"
        format="[Week] ww"
        placeholder="请选择周"
    />
  </div>
  <div style="margin-top: 20px">
    <el-date-picker
        v-model="value2"
        type="month"
        placeholder="请选择月份"
    />
  </div>
  <div style="margin-top: 20px">
    <el-date-picker
        v-model="value2"
        type="year"
        placeholder="请选择年份"
    />
  </div>
  <div style="margin-top: 20px">
    <el-date-picker
        v-model="value4"
        type="dates"
        placeholder="请选择多个天数"
    />
  </div>
  <div style="margin-top: 20px">
  <el-date-picker
      v-model="value5"
      type="daterange"
      range-separator="To"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
  />
    <el-date-picker
        v-model="value6"
        type="daterange"
        unlink-panels
        range-separator="To"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
    />
  </div>
  <div style="margin-top: 20px">
    <div class="demonstration">Value：{{ value7 }}</div>
    <el-date-picker
        v-model="value7"
        type="date"
        placeholder="请选择日期"
        format="YYYY/MM/DD"
        value-format="YYYY-MM-DD"
    />
  </div>
  <div style="margin-top: 20px">
    <el-date-picker
        v-model="value8"
        type="date"
        placeholder="请选择日期"
        format="YYYY/MM/DD"
        value-format="YYYY-MM-DD"
    >
      <template #default="cell">
        <div class="cell" :class="{ current: cell.isCurrent }">
          <span class="text">{{ cell.text }}</span>
          <span v-if="isHoliday(cell)" class="holiday">假</span>
        </div>
      </template>
    </el-date-picker>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      value2: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      holidays: [
        '2022-10-01',
        '2022-10-02',
        '2022-10-03',
        '2022-10-04',
        '2022-10-05',
        '2022-10-06',
        '2022-10-07'
      ],
      shortcuts: [
        {
          text: 'Today',
          value: new Date(),
        },
        {
          text: 'Yesterday',
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
          },
        },
        {
          text: 'A week ago',
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
          },
        }
      ]
    }
  },
  methods: {
    disabledDate(time) {
      return time.getTime() > Date.now()
    },
    isHoliday({ dayjs  }) {
      return this.holidays.includes(dayjs.format('YYYY-MM-DD'))
    }
  }
}
</script>

<style scoped>
.cell {
  height: 30px;
  padding: 3px 0;
  box-sizing: border-box;
}
.cell .text {
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto;
  line-height: 24px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}
.cell.current .text {
  background: #626aef;
  color: #fff;
}
.cell .holiday {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--el-color-danger);
  border-radius: 50%;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
