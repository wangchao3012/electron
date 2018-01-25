<template>
   <div class="content-body-main">
     <div class="content-body-left" style="min-width:220px">
       <div>
         <div class="tab-header">
           新股申购
         </div>
         <div class="tab-body">
            <Form class="y-form" :method="buyPar" :label-width="64">
              <FormItem label="交易市场">
                <Select class="y-orange" size="small" v-model="buyPar.market" disabled>
                  <Option value="market">深圳</Option>
                  <Option value="market">上海</Option>
                </Select>
              </FormItem>
              <FormItem label="股票代码">
                <Input size="small" class="y-orange" v-model="buyPar.code"></Input>
              </FormItem>
             <FormItem label="数量">
                <InputNumber class="y-orange" v-model="buyPar.num" size="small"></InputNumber>
              </FormItem>
              <FormItem class="y-block">
                <Button type="warning" @click="buy" size="small" long>新股申购</Button>
              </FormItem>
            </Form>
         </div>
       </div>
       <div style="margin-top:20px">
          <div class="tab-header">
            配股
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
                <Button type="primary" @click="buy2" size="small" long>配股</Button>
              </FormItem>
            </Form>
          </div>
       </div>
       <div style="margin-top:20px">
          <div class="tab-header">
            国债逆回购
          </div>
          <div class="tab-body">
            <Form class="y-form" :method="sellPar" :label-width="64">
              <FormItem label="交易市场">
                <Select class="y-orange" size="small" v-model="sellPar.market" disabled>
                  <Option value="market">深圳</Option>
                  <Option value="market">上海</Option>
                </Select>
              </FormItem>
              <FormItem label="ETF代码">
                <Input size="small" class="y-orange" v-model="sellPar.code"></Input>
              </FormItem>
               <FormItem label="价格">
                <InputNumber class="y-orange" v-model="sellPar.price" size="small"></InputNumber>
              </FormItem>
              <FormItem label="数量">
                <InputNumber class="y-orange" v-model="sellPar.num" size="small"></InputNumber>
              </FormItem>
              <FormItem class="y-block">
                <Button type="warning" @click="buy2" size="small" long>确定</Button>
              </FormItem>
            </Form>
          </div>
       </div>
     </div>
     <div class="content-body-right">
       <div class="tab-content">
          <div class="tab-top">
               <Form  align="center"  class="y-dark" :label-width="80" inline>
                  <FormItem label="新股申购：">
                      <Button type="primary" size="small" style="width:60px">一键申购</Button>
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
        price:0,
        numCopies: ""
      },
      columns8: [
        {
          title: "交易市场",
          type: "index",
          width: 120,
          fixed: "left",
          align: "center"
        },
        {
          title: "申购代码",
          key: "name",
          fixed: "left",
          width: 120,
          align: "center"
          
        },
        {
          title: "股票名称",
          key: "show",
          width: 120,
          align: "center",
         
        },
        {
          title: "申购价格",
          key: "weak",
          width: 140,
          sortable: true,
          align: "center",          
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
          title: "最大允许申购数量",
          key: "signin",
          width: 170,
          sortable: true,
          align: "center"
        },
        {
          title: "可申购数量",
          key: "click",
          width: 140,
          sortable: true,
          align: "center"
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
          });
        }
      }, 100);
   
  },
  mounted: function() {
    var self = this;
    // console.log("socketId::", this.$socket.id);
      // console.log("成功" + res);
     self.$nextTick(function() {
      //  self.width = $(".i-table")
      //   .parent()
      //   .width();
      //  self.height =
      //   $(".i-table")
      //     .parent()
      //     .height() - 17;
     });
      self.autoTableSize();
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