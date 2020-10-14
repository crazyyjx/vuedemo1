<template lang="html">
  <div class="table-content">

    <el-table :data="tableData" size="mini" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <pagination
      @sendPageSize="receivePageSize"
      @sendCurrentPage="receiveCurrentPage"
      :totalPage="totalPage"
    ></pagination>
  </div>
</template>

<script>
import pagination from "common/pagination";
export default {
  data() {
    return {
      totalPage: 300,
      tableData: [
        {
          date: "1919-05-02",
          name: "A",
          address: "东北"
        },
        {
          date: "2018-12-04",
          name: "B",
          address: "上海"
        },
        {
          date: "2017-05-01",
          name: "C",
          address: "北京"
        },
        {
          date: "2019-10-01",
          name: "D",
          address: "深圳"
        }
      ]
    };
  },
  methods: {
    receivePageSize(val) {
      console.log(val);
    },
    receiveCurrentPage(val) {
      console.log(val);
    }
  },
  components: {
    pagination
  }
};
</script>

<style scoped lang="scss">
.table-content{
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>