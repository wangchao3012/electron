<template>
    <div class="content-body-right">
        <div class="tab-wrapper">
            <div class="tab-bar">
               实时行情
            </div>
            <div class="tab-table">
                <Table class="i-table" :width='width' :height="height" :columns="columns" :data="tData" size="small" :border='true' ref="table"></Table>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
   .tab-bar{
     padding-left: 20px;
   }
</style> 

<script>
export default {
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
          title: "交易所",
          type: "index",
          width: 100,
          fixed: "left",
          align: "center"
        },
        {
          title: "证券代码",
          key: "name",
          fixed: "left",
          width: 100,
          align: "center"
        },
        {
          title: "证券名称",
          key: "show",
          width: 100,
          align: "center"
        },
        {
          title: "最新价",
          key: "weak",
          width: 100,
          sortable: true,
          align: "center"
        },
        {
          title: "昨收价",
          key: "signin",
          width: 100,
          sortable: true,
          align: "center"
        },
        {
          title: "开盘价",
          key: "click",
          width: 100,
          sortable: true,
          align: "center"
        },
        {
          title: "最高价",
          key: "active",
          width: 100,
          align: "center"
        },
        {
          title: "最低价",
          key: "day7",
          width: 100,
          align: "center"
        },
        {
          title: "收盘价",
          key: "day30",
          width: 100,
          sortable: true,
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
          day30: 285,
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