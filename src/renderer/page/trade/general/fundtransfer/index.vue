<template>
  <div class="content-body-right">
     <Row class="flex-1 flex">
        <Col style="width:200px">
           <Form class="y-form" :method="buyPar" :label-width="60">
              <FormItem label="资金账户">
                <AutoComplete size="small" class="y-blue" v-model="buyPar.code" :data="data1" @on-search="handleSearch1"></AutoComplete>
              </FormItem>
              <FormItem label="密码">
                <InputNumber class="y-blue" v-model="buyPar.price" size="small"></InputNumber>
              </FormItem>
              <FormItem label="金额">
                <Input size="small" class="y-blue" v-model="buyPar.num"></Input>
              </FormItem>
              <FormItem class="y-block">
                <Button type="primary" @click="buy" size="small" long>转入</Button>
              </FormItem>
            </Form>

             <Form class="y-form" :method="buyPar" :label-width="60">
              <FormItem label="资金账户">
                <AutoComplete size="small" class="y-orange" v-model="buyPar.code" :data="data1" @on-search="handleSearch1"></AutoComplete>
              </FormItem>
              <FormItem label="密码">
                <InputNumber class="y-orange" v-model="buyPar.price" size="small"></InputNumber>
              </FormItem>
              <FormItem label="金额">
                <Input size="small" class="y-orange" v-model="buyPar.num"></Input>
              </FormItem>
              <FormItem class="y-block">
                <Button type="warning" @click="buy" size="small" long>转出</Button>
              </FormItem>
            </Form>
        </Col>
        <Col class="flex-1">
              <Table class="i-table" :width='width' :height="height" :columns="columns8" :data="data7" size="small" :border='true' ref="table"></Table>
        </Col>
     </Row>
  </div>

</template> 
<style lang="scss" scoped>
   .ivu-col,.y-form.ivu-form:first-child{
     background-color: #1e2127;
   }
   .y-form.ivu-form{
     padding: 40px 22px;
     background-color: #22252b;
     &.first-child{
       background-color: #1e2127;
     }
   }
  //  .tab-top{
  //    height: 25px;
  //    background-color: #2c3039;
  //  }
  //  .ivu-select .ivu-select-selection{
  //    background-color: #565c65;
  //  }
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
        price: 0,
        num: 0,
        numCopies: ""
      },
      sellPar: {
        code: "",
        price: 0,
        num: 0,
        numCopies: ""
      },
      columns8: [
        {
          title: "交易市场",
          type: "index",
          width: 100,
          fixed: "left",
          align: "center"
        },
        {
          title: "申购代码",
          key: "name",
          fixed: "left",
          width: 100,
          align:"center"
        },
        {
          title: "股票名称",
          key: "show",
          width: 140,
          sortable: true,
          align:"center",
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
          title: "申购价格",
          key: "weak",
          width: 120,
          sortable: true,
          align: "center"
        },
        {
          title: "最大允许申购数量",
          key: "signin",
          width: 180,
          sortable: true,
          align: "center"
        },
        {
          title: "可申购数量",
          key: "click",
          width: 120,
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
  mounted: function() {
    var self = this;
    console.log("socketId::", this.$socket.id);

    self.$nextTick(function() {
      setTimeout(function() {
        for (let i = 0; i < 12; i++) {
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