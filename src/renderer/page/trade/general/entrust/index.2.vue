<template>
    <div class="content-body-right">
        <div class="tab-wrapper">
            <div class="tab-bar">
                <RadioGroup v-model="sellPar.numCopies" class="y-black" type="button" size="small">
                    <Radio label="今日委托"></Radio>
                    <Radio label="历史委托"></Radio>
                </RadioGroup>
               <div class="formsearch pull-right" style="min-width:400px">
                  <Form :model="formItem" class="y-dark" inline>
                    <FormItem label="股票代码: ">
                        <!-- <Input v-model="formItem.stockcode" class="y-dark"  size="small" @focus="stockCodeFlag=true" placeholder=""></Input> -->
                         <AutoComplete
                            v-model="value1"
                            style="width:300px">
                            <div class="demo-auto-complete-item" v-for="(item,index) in data1" :key="index">
                                <div class="demo-auto-complete-group">
                                    <span>{{ item.title }}</span>
                                </div>
                                <Option v-for="option in item.children" :value="option.title" :key="option.title">
                                    <span class="demo-auto-complete-title">{{ option.title }}</span>
                                    <span class="demo-auto-complete-count">{{ option.count }} 人关注</span>
                                </Option>
                            </div>
                        </AutoComplete>
                    </FormItem>
                    <FormItem label="XTP ID: ">
                        <Input v-model="formItem.xtpid" class="y-dark"  size="small" autofocus></Input>
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


  .demo-auto-complete-item{
        padding: 4px 0;
        border-bottom: 1px solid #F6F6F6;
    }
    .demo-auto-complete-group{
        font-size: 12px;
        padding: 4px 6px;
    }
    .demo-auto-complete-group span{
        color: #666;
        font-weight: bold;
    }
    .demo-auto-complete-group a{
        float: right;
    }
    .demo-auto-complete-count{
        float: right;
        color: #999;
    }
    .demo-auto-complete-more{
        display: block;
        margin: 0 auto;
        padding: 4px;
        text-align: center;
        font-size: 12px;
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
      value1:"",
      data1:[
         {
          title: '话题1',
          children: [
            {
              title: 'iView',
              count: 10000,
            },
            {
              title: 'iView UI',
              count: 10600,
            }
          ]
        },
        {
          title: '话题2',
          children: [
              {
                  title: 'iView',
                  count: 10000,
              },
              {
                  title: 'iView UI',
                  count: 10600,
              }
          ]
        },
      ],
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
          width: 120,
          align: "center"
        },
        {
          title: "股票代码",
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
          title: "交易所",
          key: "weak",
          width: 120,
          sortable: true,
          align: "center"
        },
        {
          title: "价格条件",
          key: "signin",
          width: 120,
          sortable: true,
          align: "center"
        },
        {
          title: "价格",
          key: "click",
          width: 100,
          sortable: true,
          align: "center"
        },
        {
          title: "数量",
          key: "active",
          width: 100,
          sortable: true,
          align: "center"
        },
        {
          title: "买卖方向",
          key: "day7",
          width: 120,
          sortable: true,
          align: "center"
        },
        {
          title: "业务类型",
          key: "day30",
          width: 120,
          sortable: true,
          align: "center"
        },
        {
          title: "成交数量",
          key: "tomorrow",
          width: 120,
          sortable: true,
          align: "center"
        },
        {
          title: "剩余数量",
          key: "day",
          width: 120,
          sortable: true,
          align: "center"
        },
        {
          title: "成交金额",
          key: "week",
          width: 120,
          sortable: true,
          align: "center"
        },
        {
          title: "报单状态",
          key: "month",
          width: 120,
          sortable: true,
          align: "center"
        },
        {
          title: "提交状态",
          key: "v1",
          width: 120,
          sortable: true,
          align: "center"
        },
        {
          title: "提交时间",
          key: "v2",
          width: 120,
          sortable: true,
          align: "center"
        },
        {
          title: "最后修改时间",
          key: "v3",
          width: 150,
          sortable: true,
          align: "center"
        },
        {
          title: "撤销时间",
          key: "v4",
          width: 120,
          sortable: true,
          align: "center"
        },
        {
          title: "Order Client Id",
          key: "v5",
          width: 160,
          sortable: true,
          align: "center"
        },
        {
          title: "本地报单编号",
          key: "v6",
          width: 140,
          sortable: true,
          align: "center"
        },
        {
          title: "CANCEL XTP ID",
          key: "v7",
          width: 180,
          sortable: true,
          align: "center"
        },
        {
          title: "Error Code",
          key: "v8",
          width: 120,
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
          v4: 1,
          v5: 1,
          v6: 1,
          v7: 1,
          v8: 1
        });
      } 
        }, 0);

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
    },
    handleSearch1 (value) {
        var self = this;
        self.data1 = !value ? [] : [
            value,
            value + value,
            value + value + value
        ];
        // self.stockcodekv.filter(el => el.code==value||el.name==value);
    }
    
  }

};
</script>