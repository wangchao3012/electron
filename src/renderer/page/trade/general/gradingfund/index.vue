<template>
    <div class="content-body-right">
        <div class="tab-wrapper">
            <div class="tab-bar">
               <div style="min-width:400px">
                  <Form :model="formItem" class="y-dark" inline>
                    <FormItem label="母基金代码: ">
                        <Input v-model="formItem.xtpid" class="y-dark"  size="small" placeholder="" autofocus></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" size="small">查询</Button>
                    </FormItem>
                  </Form>
                </div>
            </div>
            <div class="tab-table">
                <Table class="i-table" :width='width' :height="height" :columns="columns" 
                :data="tdata" size="small" :border='true' ref="table"></Table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      modal: false,
      checked:true,
      stockCodeFlag: true,
      formItem: {
          stockcode: '',
          starttime: '',
          lasttime: '',
          xtpid: ''
      },
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
          title: "交易市场",
          key: "name",
          fixed: "left",
          width: 120
        },
        {
          title: "基金代码",
          key: "show",
          width: 140,
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
          title: "基金名称",
          key: "weak",
          width: 120,
          sortable: true
        },
        {
          title: "母基金代码",
          key: "signin",
          width: 140,
          sortable: true
        },
        {
          title: "拆分合并状态",
          key: "click",
          width: 140,
          sortable: true
        },
        {
          title: "拆分/合并比例",
          key: "active",
          width: 150,
          sortable: true
        },
        {
          title: "最小拆分数量",
          key: "day7",
          width: 140,
          sortable: true
        },
        {
          title: "最小合并数量",
          key: "day30",
          width: 140,
          sortable: true
        },
        {
          title: "基金净值",
          key: "tomorrow",
          width: 120,
          sortable: true
        },
        {
          title: "Error Code",
          key: "day",
          width: 120,
          sortable: true
        }
      ],
      tdata: []
    };
  },
  mounted: function() {
      var self = this;
      self.$nextTick(function() {
        setTimeout(function() {
        for (let i = 0; i < 10; i++) {
            self.tdata.push({
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