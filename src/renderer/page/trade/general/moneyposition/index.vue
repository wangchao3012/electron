<template>
    <div class="content-body-right">
        <div class="tab-wrapper">
            <div class="tab-bar">
                <ul>
                    <li><span>资产净值:</span><span>{{data1.v1}}</span></li>
                    <li><span>参考市值:</span><span>{{data1.v2}}</span></li>
                    <li><span>资金:</span><span>{{data1.v3}}</span></li>
                    <li>
                       <div class="pull-right">  
                          <i class="fa fa-refresh" title="刷新"></i>
                          <i class="fa fa-cog" title="设置"></i>
                      </div>
                    </li>
                </ul>
            </div>
            <!-- 委托查询 -->
            <div class="tab-table">
                <Table class="i-table" :width='width' :height="height" :columns="columns" :data="tData" size="small" :border='true' ref="table"></Table>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    ul{
        display: flex;
        >li{
            list-style: none;
            // width: 140px;
            // min-width:140px;
            padding-left: 20px;
            padding-right: 20px;
            line-height: 22px;
        }
        >li:last-child{
         flex: 1;
         padding-right: 20px;
        }
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
          title: "序号",
          type: "index",
          width: 70,
          fixed: "left",
          align: "right"
        },
        {
          title: "名称",
          key: "name",
          fixed: "left",
          width: 100
        },
        {
          title: "代码",
          key: "show",
          width: 100,
          sortable: true,
          filters: [
            {
              label: "Greater than 4000",
              value: 1
            },
            {
              label: "Less than 4000",
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.show > 4000;
            } else if (value === 2) {
              return row.show < 4000;
            }
          }
        },
        {
          title: "涨幅",
          key: "weak",
          width: 100,
          sortable: true
        },
        {
          title: "现价",
          key: "signin",
          width: 100,
          sortable: true
        },
        {
          title: "涨跌",
          key: "click",
          width: 100,
          sortable: true
        },
        {
          title: "总量",
          key: "active",
          width: 100,
          sortable: true
        },
        {
          title: "总金额",
          key: "day7",
          width: 100,
          sortable: true
        },
        {
          title: "换手",
          key: "day30",
          width: 100,
          sortable: true
        },
        {
          title: "今开",
          key: "tomorrow",
          width: 100,
          sortable: true
        },
        {
          title: "最高",
          key: "day",
          width: 100,
          sortable: true
        },
        {
          title: "最低",
          key: "week",
          width: 100,
          sortable: true
        },
        {
          title: "昨收",
          key: "month",
          width: 100,
          sortable: true
        }
      ],
      tData: []
    };
  },
  mounted: function() {
    var self = this;
    self.$nextTick(function() {
        setTimeout(function() {
      for (let i = 0; i < 50; i++) {
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
          tomorrow: 1727,
          day: 558,
          week: 4440,
          month: 5610,
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