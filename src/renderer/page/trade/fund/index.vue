<template>
  <div class="content-body-right">
    <div class="tab-content">
      <div class="tab-top">
        <div>
          <div class="tab-header">申购</div>
          <div class="tab-body">
            <Form class="y-form" :method="buyPar" :label-width="64">
              <FormItem label="交易市场">
                <Select class="y-orange" size="small" v-model="buyPar.market" disabled>
                  <Option value="market">深圳</Option>
                  <Option value="market">上海</Option>
                </Select>
              </FormItem>
              <FormItem label="基金代码">
                <Input size="small" class="y-orange" v-model="buyPar.code"></Input>
              </FormItem>
              <FormItem label="申购方向">
                <Select class="y-orange" size="small" v-model="buyPar.type" disabled>
                  <Option value="xjwt">申购</Option>
                </Select>
              </FormItem>
             <FormItem label="金额">
                <InputNumber class="y-orange" v-model="buyPar.price" size="small"></InputNumber>
              </FormItem>
              <FormItem class="y-block">
                <Button type="warning" @click="buy" size="small" long>确定</Button>
              </FormItem>
            </Form>
          </div>
        </div>
        <div>
          <div class="tab-header">赎回</div>
          <div class="tab-body">
            <Form class="y-form" :method="sellPar" :label-width="64">
              <FormItem label="交易市场">
                <Select class="y-blue" size="small" v-model="sellPar.market" disabled>
                  <Option value="market">深圳</Option>
                  <Option value="market">上海</Option>
                </Select>
              </FormItem>
               <FormItem label="基金代码">
                <Input size="small" class="y-blue" v-model="sellPar.code"></Input>
              </FormItem>
              <FormItem label="申购方向">
                <Select class="y-blue" size="small" v-model="sellPar.type" disabled>
                  <Option value="xjwt">赎回</Option>
                </Select>
              </FormItem>
               <FormItem label="数量">
                <InputNumber class="y-blue" v-model="sellPar.num" size="small"></InputNumber>
              </FormItem>
              <FormItem class="y-block">
                <Button type="primary" @click="buy2" size="small" long>确定</Button>
              </FormItem>
            </Form>
          </div>
        </div>
        <div>
           <div class="tab-header">合并</div>
           <div class="tab-body">
            <Form class="y-form" :method="buyPar" :label-width="64">
              <FormItem label="交易市场">
                <Select class="y-orange" size="small" v-model="buyPar.market" disabled>
                  <Option value="market">深圳</Option>
                  <Option value="market">上海</Option>
                </Select>
              </FormItem>
              <FormItem label="基金代码">
                <Input size="small" class="y-orange" v-model="buyPar.code"></Input>
              </FormItem>
              <FormItem label="拆分合并">
                <Select class="y-orange" size="small" v-model="buyPar.type" disabled>
                  <Option value="xjwt">合并</Option>
                </Select>
              </FormItem>
             <FormItem label="数量">
                <InputNumber class="y-orange" v-model="buyPar.num" size="small"></InputNumber>
              </FormItem>
              <FormItem class="y-block">
                <Button type="warning" @click="buy" size="small" long>确定</Button>
              </FormItem>
            </Form>
           </div>
        </div>
        <div>
          <div class="tab-header">拆分</div>
          <div class="tab-body">
             <Form class="y-form" :method="sellPar" :label-width="64">
              <FormItem label="交易市场">
                <Select class="y-blue" size="small" v-model="sellPar.market" disabled>
                  <Option value="market">深圳</Option>
                  <Option value="market">上海</Option>
                </Select>
              </FormItem>
               <FormItem label="基金代码">
                <Input size="small" class="y-blue" v-model="sellPar.code"></Input>
              </FormItem>
              <FormItem label="拆分合并">
                <Select class="y-blue" size="small" v-model="sellPar.type" disabled>
                  <Option value="xjwt">拆分</Option>
                </Select>
              </FormItem>
               <FormItem label="数量">
                <InputNumber class="y-blue" v-model="sellPar.num" size="small"></InputNumber>
              </FormItem>
              <FormItem class="y-block">
                <Button type="primary" @click="buy2" size="small" long>确定</Button>
              </FormItem>
            </Form>
          </div>
        </div>
       
      </div>
      <div class="tab-bottom">
        <div class="tab-wrapper">
          <div class="tab-bar">
              <Form class="y-dark" style="padding-left:20px" inline>
                  <FormItem label="母基金查询:">
                      <Input class="y-dark" size="small"></Input>
                  </FormItem>
                  <FormItem>
                      <Button type="primary" size="small" style="width:60px">查询</Button>
                  </FormItem>
                </Form>
          </div>
          <div class="tab-table">
            <Table class="i-table"  :height="height" :width="width" :columns="columns8" :data="data7" size="small" :border='true' ref="table"></Table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
<style lang="scss" scoped>
.tab-content {
  .tab-top {
    >div{
      flex: 1;
      background-color: #221f20;
      .tab-header{
        padding-left: 20px;
      }
      .tab-body{
        display: flex;
        justify-content: center;
      }
    }
  }  
}  
  .tab-table {
    height: 500px;
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
        type: "xjwt",
        market: "market",
        num: 0,
        numCopies: "",
        price:0
      },
      sellPar: {
        code: "",
        type: "xjwt",
        market: "market",
        num: 0,
        numCopies: ""
      },
      columns8: [
        {
          title: "序号",
          type: "index",
          width: 70,
          fixed: "left",
          align: "center"
        },
        {
          title: "交易市场",
          key: "name",
          fixed: "left",
          width: 120,
          align: "center"
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
          sortable: true,
          align:"center"
        },
        {
          title: "母基金代码",
          key: "signin",
          width: 140,
          sortable: true,
          align:"center"
        },
        {
          title: "拆分合并状态",
          key: "click",
          width: 140,
          sortable: true,
          align:"center"
        },
        {
          title: "拆分/合并比例",
          key: "active",
          width: 150,
          sortable: true,
          align:"center"
        },
        {
          title: "最小拆分数量",
          key: "day7",
          width: 140,
          sortable: true,
          align:"center"
        },
        {
          title: "最小合并数量",
          key: "day30",
          width: 140,
          sortable: true,
          align:"center"
        },
        {
          title: "基金净值",
          key: "tomorrow",
          width: 120,
          sortable: true,
          align:"center"
        },
        {
          title: "Error Code",
          key: "day",
          width: 140,
          align:"center"
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
    // bottom中的列表渲染
    // var self = this;
    // var url = "api/order";
    // self.$http.get(url,{

    // }).then(function(){

    // })
    var self = this;
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
          });
        }
      }, 100);
  },
  mounted: function() {
    var self = this;
    // console.log("socketId::", this.$socket.id);
       self.$nextTick(function() {
        // self.width = $(".i-table")
        //     .parent()
        //     .width();
        // self.height =
        //     $(".i-table")
        //     .parent()
        //     .height();
      })
   
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