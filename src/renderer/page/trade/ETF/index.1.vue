<template>
   <div class="content-body-main">
     <div class="content-body-left" style="min-width:220px">
       <div>
         <div class="tab-header">
           申购
         </div>
         <div class="tab-body">
            <Form class="y-form" :method="buyPar" :label-width="64">
              <FormItem label="交易市场">
                <Select class="y-orange" size="small" v-model="buyPar.market" disabled>
                  <Option value="market">深圳</Option>
                  <Option value="market">上海</Option>
                </Select>
              </FormItem>
              <FormItem label="ETF代码">
                <Input size="small" class="y-orange" v-model="buyPar.code"></Input>
              </FormItem>
             <FormItem label="数量">
                <InputNumber class="y-orange" v-model="buyPar.num" size="small"></InputNumber>
              </FormItem>
              <FormItem class="y-block">
                <Button type="warning" @click="buy" size="small" long>申购</Button>
              </FormItem>
            </Form>
         </div>
       </div>
       <div style="margin-top:20px">
          <div class="tab-header">
            赎回
          </div>
          <div class="tab-body">
            <Form class="y-form" :method="sellPar" :label-width="64">
              <FormItem label="交易市场">
                <Select class="y-blue" size="small" v-model="sellPar.market" disabled>
                  <Option value="market">深圳</Option>
                  <Option value="market">上海</Option>
                </Select>
              </FormItem>
              <FormItem label="ETF代码">
                <Input size="small" class="y-blue" v-model="sellPar.code"></Input>
              </FormItem>
              <FormItem label="数量">
                <InputNumber class="y-blue" v-model="sellPar.num" size="small"></InputNumber>
              </FormItem>
              <FormItem class="y-block">
                <Button type="primary" @click="buy2" size="small" long>赎回</Button>
              </FormItem>
            </Form>
          </div>
        </div>
       </div>
     <div class="content-body-right">
       <div class="tab-content">
          <div class="tab-top">
               <Form  align="center"  class="y-dark"  inline>
                  <FormItem label="ETF代码：">
                      <Input class="y-dark" size="small"  placeholder=""></Input>
                  </FormItem>
                  <FormItem label="市场：">
                    <Select class="y-dark"  style="width:100px" size="small">
                        <Option value="xjwt">全部</Option>
                        <Option value="xjwt" >限价委托</Option>
                    </Select>
                  </FormItem>
                  <FormItem>
                      <Button type="primary" size="small" style="width:60px">查询</Button>
                  </FormItem>
                </Form>
          </div>
          <div class="tab-bottom">
            <Table class="i-table" :width='width' :height="height" :columns="columns8" :data="data7" size="small" :border='true' ref="table"></Table>
          </div> 
       </div>
     </div>
   </div>
</template> 
<style scoped>
   .y-form.ivu-form{
     background-color: #22252b;
   }
   .tab-top{
     height: 22px;
     background-color: #2c3039;
   }
</style>
<script>
import socketio from "socket.io-client";
export default {
  data() {
    return {
      selAccountType: "rmb",
      data1: [],
      width: 0,
      height: 0,
      buyPar: {
        code: "",
        market:"market",
        num: 0,
        numCopies: ""
      },
      sellPar: {
        code: "",
        market:"market",
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
    connect: function() {
      // debugger;
      console.log("socket 连接成功", this.$socket.id);
    },
    customEmit: function(val) {
      console.log(
        'this method was fired by the socket server. eg: io.emit("customEmit", data)'
      );
    },
    login: function(data) {
      this.$Message.success(`${data.nickname}登录成功`);
      console.log(data);
    }
  },
  created(){
    var self = this;
    setTimeout(function() {
        for (let i = 0; i < 6; i++) {
          self.data7.push({
            name: "Name" + (i + 1),
            fav:0,
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
  },
  mounted: function() {
    var self = this;
    self.$nextTick(function() {
        // self.width = $(".i-table")
        //     .parent()
        //     .width();
        // self.height =
        //     $(".i-table")
        //     .parent()
        //     .height();
        // 以下解决表格最后一格不对齐
        document.querySelector('table').style.width = 0;
        var lastwidth =$(".ivu-table-tbody tr").eq(1).children("td:last-child").width() ;
        $("table colgroup").children("col:last-child").width(lastwidth);
         
      })
    // console.log("socketId::", this.$socket.id);
      window.addEventListener(
        "resize",
        function() {
          self.autoTableSize();
        },
        false
      );
  },
  methods: {
    handleSearch1(value) {
      this.data1 = !value ? [] : [value, value + value, value + value + value];
    },
    buy() {
      let self = this; 
      // self.$socket.close();
      // self.$socket.connect({
      //   query: {
      //     token: "cde"
      //   },
      //   "force new connection": true,
      //   reconnect: true,
      //   "auto connect": true
      // });

      // self.$socket.destroy();
      // 重新建立连接
      // var so = socketio("http://127.0.0.1:11111", {
      //   query: {
      //     token: "cde"
      //   }
      // });
      // self.$socket = so;
 
      this.$socket.emit("set nickname", self.buyPar.code);
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