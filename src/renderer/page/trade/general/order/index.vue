<template>
  <div class="content-body-right">
    <div class="tab-content">
      <div class="tab-top">
        <div>
          <div class="tab-header">
            <!-- <Select v-model="selAccountType" size="small" style="width:100px">
              <Option value="rmb" key="1">人民币账号</Option>
              <Option value="my" key="2">美元账号</Option>
            </Select> -->
            资产
            <i class="fa fa-refresh pull-right"></i>
          </div>
          <div class="tab-body">
            <table class="y-table">
              <tbody>
                <tr>
                  <th>总资产</th>
                  <td>0.00</td>
                </tr>
                <tr>
                  <th>可用资金</th>
                  <td>0.00</td>
                </tr>
                <tr>
                  <th>预扣资金</th>
                  <td>0.00</td>
                </tr>
                <tr>
                  <th>买入资金</th>
                  <td>0.00</td>
                </tr>
                <tr>
                  <th>买入费用</th>
                  <td>0.00</td>
                </tr>
                <tr>
                  <th>卖出资金</th>
                  <td></td>
                </tr>
                <tr>
                  <th>卖出费用</th>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div class="tab-header">
            下单
          </div>
          <div class="tab-body">
            <Form class="y-form" :method="parBuyOrder" :label-width="64">
              <FormItem label="交易市场">
                <Select class="y-orange" v-model="parBuyOrder.xtpMarketType" disabled size="small">
                  <Option :value='0'>未知</Option>
                  <Option :value='1'>深圳</Option>
                  <Option :value='2'>上海</Option>
                  <Option :value='3'>未知</Option>
                </Select>
              </FormItem>
              <FormItem label="股票代码">
                <AutoComplete size="small" class="y-orange" v-model="parBuyOrder.ticker" :data="data1" @on-search="handleSearch1" placeholder="请输入代码"></AutoComplete>
              </FormItem>
              <FormItem label="价格条件">
                <Select class="y-orange" v-model.number="parBuyOrder.xtpPriceType" size="small">
                  <Option :value='1'>限价-沪深</Option>
                  <Option :value='2'>即成剩撤-深</Option>
                  <Option :value='3'>五档即成转限价-沪</Option>
                  <Option :value='4'>五档即成转撤销-沪深</Option>
                  <Option :value='5'>全部成交或撤销-深</Option>
                  <Option :value='6'>本方最优-深</Option>
                  <Option :value='7'>对方最优转限价-深</Option>
                </Select>
              </FormItem>
              <FormItem label="价格">
                <InputNumber v-model="parBuyOrder.price" :step='0.01' class="y-orange" size="small"></InputNumber>
              </FormItem>
              <FormItem label="数量">
                <Input v-model="parBuyOrder.quantity" size="small" class="y-orange" placeholder="请输入数量"></Input>
              </FormItem>
              <!-- <FormItem class="y-block">
                <div class="pull-left">涨停
                  <span class="y-red">--</span>
                </div>
                <div class="pull-right">涨跌
                  <span class="y-green">--</span>
                </div>
              </FormItem>
              <FormItem class="y-block" :label-width="0">
                <RadioGroup v-model="buyPar.numCopies" class="y-orange" type="button" size="small">
                  <Radio label="1/4"></Radio>
                  <Radio label="2/4"></Radio>
                  <Radio label="3/4"></Radio>
                  <Radio label="全部"></Radio>
                </RadioGroup>
              </FormItem> -->

              <FormItem class="y-block">
                <Button type="warning" @click="insertOrder" size="small" long>买入</Button>
              </FormItem>
            </Form>
            <Form class="y-form" :method="parSellOrder" :label-width="64">
              <FormItem label="交易市场">
                <Select class="y-blue" v-model="parSellOrder.xtpMarketType" disabled size="small">
                  <Option :value='0'>未知</Option>
                  <Option :value='1'>深圳</Option>
                  <Option :value='2'>上海</Option>
                  <Option :value='3'>未知</Option>
                </Select>
              </FormItem>
              <FormItem label="股票代码">
                <AutoComplete size="small" class="y-blue" v-model="parSellOrder.ticker" :data="data1" @on-search="handleSearch1" placeholder="请输入代码"></AutoComplete>
              </FormItem>
              <FormItem label="价格条件">
                <Select class="y-blue" v-model.number="parSellOrder.xtpPriceType" size="small">
                  <Option :value='1'>限价-沪深</Option>
                  <Option :value='2'>即成剩撤-深</Option>
                  <Option :value='3'>五档即成转限价-沪</Option>
                  <Option :value='4'>五档即成转撤销-沪深</Option>
                  <Option :value='5'>全部成交或撤销-深</Option>
                  <Option :value='6'>本方最优-深</Option>
                  <Option :value='7'>对方最优转限价-深</Option>
                </Select>
              </FormItem>
              <FormItem label="价格">
                <InputNumber v-model="parSellOrder.price" :step='0.01' class="y-blue" size="small"></InputNumber>
              </FormItem>
              <FormItem label="数量">
                <Input v-model="parSellOrder.quantity" size="small" class="y-blue" placeholder="请输入数量"></Input>
              </FormItem>
              <!-- <FormItem class="y-block">
                <div class="pull-left">涨停
                  <span class="y-red">--</span>
                </div>
                <div class="pull-right">涨跌
                  <span class="y-green">--</span>
                </div>
              </FormItem>
              <FormItem class="y-block" :label-width="0">
                <RadioGroup v-model="sellPar.numCopies" class="y-blue" type="button" size="small">
                  <Radio label="1/4"></Radio>
                  <Radio label="2/4"></Radio>
                  <Radio label="3/4"></Radio>
                  <Radio label="全部"></Radio>
                </RadioGroup>
              </FormItem> -->
              <FormItem class="y-block">
                <Button type="primary" @click="buy2" size="small" long>卖出</Button>
              </FormItem>
            </Form>
          </div>
        </div>
        <div>
          <Tabs type="card" :animated='false'>
            <TabPane label="10档行情">
              <div class="row">
                <div class="col">
                  <table class="y-table y-table-condensed">
                    <tbody>
                      <tr>
                        <th>卖十</th>
                        <td>0.00</td>
                      </tr>
                      <tr>
                        <th>卖九</th>
                        <td>0.00</td>
                      </tr>
                      <tr>
                        <th>卖八</th>
                        <td>0.00</td>
                      </tr>
                      <tr>
                        <th>卖七</th>
                        <td>0.00</td>
                      </tr>
                      <tr>
                        <th>卖六</th>
                        <td>0.00</td>
                      </tr>
                      <tr>
                        <th>卖五</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th>卖四</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th>卖三</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th>卖二</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th>卖一</th>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col">
                  <table class="y-table y-table-condensed">
                    <tbody>
                      <tr>
                        <th>买十</th>
                        <td>0.00</td>
                      </tr>
                      <tr>
                        <th>买九</th>
                        <td>0.00</td>
                      </tr>
                      <tr>
                        <th>买八</th>
                        <td>0.00</td>
                      </tr>
                      <tr>
                        <th>买七</th>
                        <td>0.00</td>
                      </tr>
                      <tr>
                        <th>买六</th>
                        <td>0.00</td>
                      </tr>
                      <tr>
                        <th>买五</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th>买四</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th>买三</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th>买二</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th>买一</th>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </TabPane>
            <TabPane label="分时">
              <!-- style="width: 100%;min-height:200px" -->
              <!-- 11 -->
              <div id="mainChart" style="width: 400px;height:348px;"></div>
            </TabPane>
          </Tabs>
        </div>
      </div>
      <div class="tab-bottom">
        <div class="tab-wrapper">
          <div class="tab-bar">
            <RadioGroup v-model="sellPar.numCopies" class="y-black" type="button" size="small">
              <Radio label="今日委托"></Radio>
              <Radio label="今日成交"></Radio>
              <Radio label="持仓"></Radio>
              <Radio label="自选"></Radio>
            </RadioGroup>
            <!-- <ul class="y-tag small">
              <li class="active">
                <a href="#">今日委托</a>
              </li>
              <li>
                <a href="#">今日成交</a>
              </li>
              <li>
                <a href="#">持仓</a>
              </li>
              <li>
                <a href="#">自选</a>
              </li> 
            </ul> -->
          </div>
          <!-- width="600" -->
          <div class="tab-table">
            <Table class="i-table" highlight-row :width='width' :height="height" :columns="columns8" :data="data7" size="small" :border='true' ref="table"></Table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
<style lang="scss">
.y-form.ivu-form {
  padding: 18px 15px 0;
  .ivu-form-item-label {
    padding: 10px 10px 0px 0;
  }
}
.y-table {
  display: inline;
  &.y-table-condensed {
    // width: 50%;
    tbody th,
    tbody td {
      padding: 5px 8px;
    }
  }
}
.y-form.ivu-form {
  width: 100%;
}
</style>

<script>
export default {
  data() {
    return {
      selAccountType: "rmb",
      data1: [],
      width: 0,
      height: 0,
      parBuyOrder: {
        orderXtpId: 0, // XTP系统订单ID，在XTP系统中唯一
        orderClientId: 0, //报单引用
        ticker: "", //合约代码
        xtpMarketType: 1,
        price: 0.0,
        stopPrice: 0.0,
        quantity: 0,
        xtpPriceType: 1,
        xtpSideType: 0,
        xtpBusinessType: 0,
        side: 0
      },
      parSellOrder: {
        orderXtpId: 0, // XTP系统订单ID，在XTP系统中唯一
        orderClientId: 0, //报单引用
        ticker: "", //合约代码
        xtpMarketType: 1,
        price: 0.0,
        stopPrice: 0.0,
        quantity: 0,
        xtpPriceType: 1,
        xtpSideType: 0,
        xtpBusinessType: 0,
        side: 1
      },
      buyPar: {
        code: "",
        type: "xjwt",
        price: 0,
        num: 0,
        numCopies: ""
      },
      sellPar: {
        code: "",
        type: "xjwt",
        price: 0,
        num: 0,
        numCopies: ""
      },
      columns8: [
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
      data7: []
    };
  },
  sockets: {
    insertOrderResult: function(data) {
      this.$Message.success(`${JSON.stringify(data)}下单成功`);
      console.log(data);
    }
  },
  created() {
    // bottom中的列表渲染
    // var self = this;
    // var url = "api/order";
    // self.$http.get(url,{
    // }).then(function(){
    // })
  },
  mounted: function() {
    var self = this;
    // console.log("socketId::", this.$socket.id);
    self.$nextTick(function() {
      setTimeout(function() {
        for (let i = 0; i < 3; i++) {
          self.data7.push({
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
            month: 5610
          });
        }
      }, 100);

      // 绘制图表
      // 引入 ECharts 主模块
      var echarts = require("echarts/lib/echarts");
      // 引入柱状图
      require("echarts/lib/chart/bar");
      // 引入提示框和标题组件
      require("echarts/lib/component/tooltip");
      require("echarts/lib/component/title");

      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("mainChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });

      window.onresize = myChart.resize;
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
    handleSearch1(value) {
      this.data1 = !value ? [] : [value, value + value, value + value + value];
    },
    insertOrder() {
      let self = this;
      console.log(
        "self.parBuyOrder::",
        JSON.stringify(self.parBuyOrder, null, 4)
      );
      self.$socket.emit("insertOrder", self.parBuyOrder);
      // self.$socket.close();
      // self.$socket.connect({
      //   query: {
      //     token: "cde"
      //   },
      //   "force new connection": true,
      //   reconnect: true,
      //   "auto connect": true
      // });

      // import socketio from "socket.io-client";
      // self.$socket.destroy();
      // 重新建立连接
      // var so = socketio("http://127.0.0.1:11111", {
      //   query: {
      //     token: "cde"
      //   }
      // });
      // self.$socket = so;
    },
    buy2() {
      let self = this;
      self.$socket.emit("set nickname", self.buyPar.code);
    },
    autoTableSize() {
      var self = this;
      // $(".y-table").width(
      //   $(".y-table")
      //     .parent()
      //     .width() - 5
      // );
      //  $(".y-table").height($(".y-table").parent().height() - 5);
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