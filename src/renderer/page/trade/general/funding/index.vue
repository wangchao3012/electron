<template>
    <div class="content-body-right">
        <div class="tab-wrapper">
            <div class="tab-bar padding-left-20 lh-22">
               资金划拨
            </div>
            <div class="tab-table">
                <Table class="i-table" v-if="tData.length" :width='width'
                 :height="height" :columns="columns" :data="tData" size="small" :border='true' ref="table"></Table>
            </div>
        </div>
    </div>
</template>
<script>
import {changetable} from "../../../../mixins/mixin";
export default {
  mixins:[changetable],
  data() {
    return {
      data1: {v1:100 ,v2:200 ,v3:300},
      width: 0,
      height: 0, 
      sellPar: {
        code: "",
        type: "xjwt",
        price: 0,
        num: 0,
        numCopies: ""
      },
      columns: [
        {
          title: "序号",
          type: "index",
          width: 100,
          fixed: "left",
          align: "center"
        },
        {
          title: "资金划转编号",
          key: "name",
          fixed: "left",
          width: 140,
          align: "center"
        },
        {
          title: "划转方向",
          key: "show",
          width: 100,
          align: "center"
        },
        {
          title: "金额",
          key: "weak",
          width: 100,
          sortable: true,
          align: "center"
        },
        {
          title: "操作结果",
          key: "signin",
          width: 100,
          align: "center"
        },
        {
          title: "操作时间",
          key: "click",
          width: 100,
          align: "center"
        },
        {
          title: "Error Code",
          key: "active",
          width: 120,
          align: "center"
        },
        {
          title: "Error Message",
          key: "day7",
          width: 130,
          align: "center"
        } 
      ],
      tData: []
    };
  },
  mounted: function() {
    var self = this;
    self.$nextTick(function() {
        setTimeout(function() {
      for (let i = 0; i < 10; i++) {
        self.tData.push({
          name: "Name" + (i + 1),
          fav: 0,
          show: 7302,
          weak: 5627,
          signin: 1563,
          click: 4254,
          active: 1438,
          day7: 274,
        });
      } 
    }, 100);
      // console.log("成功" + res);
      self.autoTableSize();
      window.addEventListener(
        "resize",
        function() {
          self.autoTableSize();
        },
        false
      );
    });
  },
  methods: {
    autoTableSize() {
      var self = this;
      self.width = $(".i-table")
        .parent()
        .width();
      self.height =
        $(".i-table")
          .parent()
          .height() - 17;
    }
  }
};
</script>