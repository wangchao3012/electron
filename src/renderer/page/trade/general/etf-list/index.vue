<template>
    <div class="content-body-right">
        <div class="tab-wrapper">
            <div class="tab-bar">
               <div style="min-width:400px">
                  <span class="padding-left-20 lh-22">ETF清单</span>
                  <Form :model="formItem" class="y-dark pull-right" inline>
                    <FormItem label="ETF代码: ">
                        <Input v-model="formItem.xtpid" class="y-dark"  size="small" placeholder="" autofocus></Input>
                    </FormItem>
                    <FormItem label="市场：">
                      <Select class="y-dark"  style="width:100px" size="small">
                        <Option value="xjwt">全部</Option>
                        <Option value="xjwt" >限价委托</Option>
                      </Select>
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
          title: "交易市场",
          type: "index",
          width: 100,
          fixed: "left",
          align: "center"
        },
        {
          title: "ETF代码",
          key: "name",
          fixed: "left",
          align: "center",
          width: 100
        },
        {
          title: "申赎代码",
          key: "show",
          width: 140,
          align: "center",
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
          title: "最小申赎单位",
          key: "weak",
          width: 130,
          align: "center",
        },
        {
          title: "可申购",
          key: "signin",
          width: 100,
          align: "center",
        },
        {
          title: "可赎回",
          key: "click",
          width: 100,
          align: "center",
        },
        {
          title: "现金替代比例",
          key: "active",
          width: 150,
          sortable: true,
          align: "center",
        },
        {
          title: "预估金额",
          key: "day7",
          width: 120,
          sortable: true,
          align: "center",
        },
        {
          title: "现金差额",
          key: "day30",
          width: 120,
          sortable: true,
          align: "center",
        },
        {
          title: "单位净值",
          key: "tomorrow",
          width: 120,
          sortable: true,
          align: "center",
        },
        {
          title: "单位申赎总金额",
          key: "day",
          width: 140,
          sortable: true,
          align: "center",
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