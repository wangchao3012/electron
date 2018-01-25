<template>
    <div class="content-body-right">
        <div class="tab-wrapper">
            <div class="tab-bar">
                <RadioGroup v-model="sellPar.numCopies" class="y-black" type="button" size="small">
                    <Radio label="今日委托"></Radio>
                    <Radio label="历史委托"></Radio>
                </RadioGroup>
               <div class="formsearch pull-right" style="min-width:400px">
                  <Form :model="formItem"  class="y-dark" inline>
                    <FormItem label="股票代码:  ">
                        <Input v-model="formItem.stockcode" class="y-dark"  size="small" @focus="stockCodeFlag=true" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="XTP ID:  ">
                        <Input v-model="formItem.xtpid" class="y-dark"  size="small" placeholder="" autofocus></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" size="small">查询</Button>
                    </FormItem>
                  </Form>
                </div>
                <div class="pull-right">
                    <DatePicker type="daterange" size="small" :options="options2" placement="bottom-end" placeholder="请选择查询日期" style="width: 190px"></DatePicker>
                    <i class="fa fa-refresh" title="刷新"></i>
                    <i class="fa fa-cog" @click="modal = true" title="设置"></i>
                </div>
            </div>
            <!-- 委托查询 -->
            <div class="tab-table">
                <Table class="i-table" :width='width' :height="height" :columns="columns" 
                :data="tData" size="small" :border='true' ref="table"></Table>
            </div>
            <Modal
                title="设置"
                v-model="modal"
                class-name="vertical-center-modal"
                :mask-closable="false">
                <div class="mod">
                       <Row>
                            <i-col span="4">拖动</i-col>
                            <i-col span="18">标签名称</i-col>
                            <i-col span="2">显示</i-col>
                       </Row>   
                       <Row v-for="(item, index) in targetname" :key="index">
                            <i-col span="4"> 
                              <Icon type="navicon-round" size='22'></Icon>
                            </i-col>
                            <i-col span="18">{{item.name}}</i-col>
                            <i-col span="2">
                              <Checkbox :checked.sync="checked" class="y-black-checkbox"></Checkbox>
                            </i-col>
                      </Row>    
                </div>
            </Modal>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.mod{
   width: 500px;
   height: 200px;
   overflow: auto;
}
.pull-right {
  margin-right: 10px;
}
.tab-bar {
    width: 100%;
    height: 22px;
    position: relative;
}
.ivu-form .ivu-form-item-label{
    padding-top: 0px;
    color: #d0d0d4;
    height: 22px;
    line-height: 22px;
}
</style>
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
      stockcodekv:[
          {code:'00001',name:"平安银行"},
          {code:'00002',name:"中国银行"},
          {code:'00003',name:"建设"},
          {code:'00004',name:"上海银"},
          {code:'00005',name:"北京银行"}
      ],
      targetname:[
         {name:"委托时间1"},
         {name:"委托时间1"},
         {name:"委托时间1"},
         {name:"委托时间1"},
         {name:"委托时间1"},
         {name:"委托时间1"},
         {name:"委托时间1"},
         {name:"委托时间1"},
      ],
      width: 0,
      height: 0, 
      sellPar: {
        code: "",
        type: "xjwt",
        price: 0,
        num: 0,
        numCopies: ""
      },
      options2: {
        shortcuts: [
          {
            text: "一周",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return [start, end];
            }
          },
          {
            text: "一月",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            }
          },
          {
            text: "三个月",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              return [start, end];
            }
          }
        ]
      },
      columns: [
        {
          title: "序号",
          type: "index",
          width: 70,
          fixed: "left",
          align: "center"
        },
        {
          title: "XTP ID",
          key: "name",
          fixed: "left",
          width: 100
        },
        {
          title: "报单引用",
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
          title: "股票代码",
          key: "weak",
          width: 120,
          sortable: true
        },
        {
          title: "交易所",
          key: "signin",
          width: 120,
          sortable: true
        },
        {
          title: "订单号",
          key: "click",
          width: 120,
          sortable: true
        },
        {
          title: "价格",
          key: "active",
          width: 100,
          sortable: true
        },
        {
          title: "数量",
          key: "day7",
          width: 100,
          sortable: true
        },
        {
          title: "成交编号",
          key: "day30",
          width: 120,
          sortable: true
        },
        {
          title: "成交时间",
          key: "tomorrow",
          width: 120,
          sortable: true
        },
        {
          title: "成交金额",
          key: "day",
          width: 120,
          sortable: true
        },
        {
          title: "报单编号",
          key: "week",
          width: 120,
          sortable: true
        },
        {
          title: "成交类型",
          key: "month",
          width: 120,
          sortable: true
        },
        {
          title: "买卖方向",
          key: "v1",
          width: 120,
          sortable: true
        },
        {
          title: "业务类型",
          key: "v2",
          width: 120,
          sortable: true
        },
        {
          title: "交易员代码",
          key: "v3",
          width: 130,
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
          v1: 1,
          v2: 1,
          v3: 1,
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
    // getCode (val) {
    //         let self = this
    //         self.formItem.stockcode = val.code
    //         self.stockCodeFlag = false
    // },
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
  },
  // watch: {
  //         code (val) {
  //             if (val.length >= 6) {
  //               this.formItem.stockcode = val.slice(0,6)
  //             }
  //           }
  // },
  // computed: {
  //   code () {
  //       return this.formItem.stockcode
  //   },
  //   stocksearch () { 
  //       return this.stockcodekv.filter(v => v.code.indexOf(this.formItem.stockcode) != -1);
  //   },
  //   infosearch () {
  //       return this.tdata.filter(v => v.show.indexOf(this.formItem.stockcode) != -1)
  //           //    return this.data1.filter(v => v.xtpid.indexOf(this.formItem.xtpid) != -1); 
  //    }
  // }
};
</script>