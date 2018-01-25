<template>
<div class="y-table" style="height: 100%;">
    <div class="y-row" style="height: 200px;">
        <div class="y-table" >
        <!-- class="col-xs-3" -->
        <div class="y-cell" style="width:150px;background-color:#1e2127">
            <div class="panel panel-black">
                <div class="panel-heading">
                    <Select v-model="cityId" size="small" style="width:100px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <i class="fa fa-refresh pull-right" @click="openDir"></i>
                    
                </div>
                <div class="panel-body" style="background-color:#1e2127">
                    <table class="table table-condensed"> 
                    <tbody>
                        <tr>  
                            <td>总资产</td>
                            <td>0.00</td>
                        </tr>
                        <tr>  
                            <td>可用</td>
                            <td>0.00</td>
                        </tr>
                        <tr>  
                            <td>可取</td>
                            <td>0.00</td>
                        </tr>
                        <tr>  
                            <td>冻结</td>
                            <td>0.00</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="y-cell" style="width:450px">
            <div class="panel panel-black">
                <div class="panel-heading">
                    下单
                </div>
                <div class="panel-body" >
                    <div class="y-table">
                        <div class="y-cell" style="background-color:#221f20;">
                        <Form  :label-width="40">
                                <FormItem label="代码">
                                    <AutoComplete
                                        size="small"
                                        v-model="value1"
                                        :data="data1"
                                        @on-search="handleSearch1"
                                        placeholder="input here"
                                        ></AutoComplete>
        <!-- <Input size="small"></Input> -->
                                </FormItem>
                                <FormItem label="类型">
                                    <Select disabled >
                                        <Option value="beijing" >现价委托</Option> 
                                    </Select>
                                </FormItem> 
                                <FormItem label="价格">
                                    <Input size="small"></Input>
                                </FormItem>
                                <FormItem label="数量">
                                    <Input size="small" ></Input>
                                </FormItem>  
                                <RadioGroup v-model="button6" type="button" size="small">
                                    <Radio label="1/4"></Radio>
                                    <Radio label="1/3"></Radio>
                                    <Radio label="1/2"></Radio>
                                    <Radio label="全部"></Radio>
                                    </RadioGroup>
                                <button type="button" class="btn btn-block btn-warning btn-sm">下单</button>
                            </Form>
                        </div>
                        <div class="y-cell" style="background-color:#1a1e28;">
                            <Form :label-width="40">
                                <FormItem label="代码">
                                    <Input size="small"></Input>
                                </FormItem>
                                <FormItem label="类型">
                                    <Select disabled >
                                        <Option value="beijing" >现价委托</Option> 
                                    </Select>
                                </FormItem> 
                                <FormItem label="价格">
                                    <Input size="small"></Input>
                                </FormItem>
                                <FormItem label="数量">
                                    <Input size="small" ></Input>
                                </FormItem> 
                                <button type="button" class="btn btn-block btn-primary btn-sm">卖出</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div class="y-cell" style="min-width:100px;background-color:#1e2127">
            <div class="panel panel-black">
                <div class="panel-heading">
                   <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active"><a href="#home1" aria-controls="home" role="tab" data-toggle="tab">盘口</a></li>
                    <li role="presentation"><a href="#profile1" aria-controls="profile" role="tab" data-toggle="tab">分时</a></li> 
                    </ul> 
                </div>
                <div class="panel-body" style="background-color:#1e2127">
                       <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="home1">
                        <table class="table table-condensed"> 
                    <tbody>
                        <tr>  
                            <td>总资产</td>
                            <td>0.00</td>
                        </tr>
                        <tr>  
                            <td>可用</td>
                            <td>0.00</td>
                        </tr>
                        <tr>  
                            <td>可取</td>
                            <td>0.00</td>
                        </tr>
                        <tr>  
                            <td>冻结</td>
                            <td>0.00</td>
                        </tr>
                    </tbody>
                    </table>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="profile1">...2</div> 
                </div>
                    
                </div>
            </div>
        </div>
        </div>
    </div>
     <div class="y-row">
        <div class="y-table" style="height: 100%;">
            <div class="y-cell"> 
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">今日委托</a></li>
                    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">今日成交</a></li>
                    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">持仓</a></li>
                    <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">自选</a></li>
                </ul> 
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="home">
                        <Table width="600" :height="height" :columns="columns8"  :data="data7" size="small" :border='true' ref="table"></Table>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="profile">...2</div>
                    <div role="tabpanel" class="tab-pane" id="messages">...3</div>
                    <div role="tabpanel" class="tab-pane" id="settings">...4</div>
                </div>
            </div>
        </div>
    </div>
  
    
</div>
</template> 
<style lang="scss" scoped>
.ivu-radio-group-button {
  .ivu-radio-wrapper {
    color: #c2c4d2;
    background-color: #3d424b;
    border: solid 1px #000;
  }
  &.ivu-radio-wrapper-checked {
    background-color: #ca712a;
  }
  .ivu-radio-wrapper-checked:first-child {
    background-color: #ca712a;
  }
}

.tab-content {
  height: calc(100% - 23px);
  > .tab-pane {
    // height:calc(100% - 23px) ;
  }
}



</style>

<script>
export default {
  data() {
    return {
      cityList: [
        {
          value: "1",
          label: "人民币账户"
        }
      ],
      height: 0,
      value1: "",
      data1: [],
      cityId: "1",
      model3: "",
      model4: "",
      value3: "",
      button6: "北京",
      par: {
        cityId: 1
      },
      columns8: [
        {
          title: "Name",
          key: "name",
          fixed: "left",
          width: 200
        },
        {
          title: "Show",
          key: "show",
          width: 150,
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
          title: "Weak",
          key: "weak",
          width: 150,
          sortable: true
        },
        {
          title: "Signin",
          key: "signin",
          width: 150,
          sortable: true
        },
        {
          title: "Click",
          key: "click",
          width: 150,
          sortable: true
        },
        {
          title: "Active",
          key: "active",
          width: 150,
          sortable: true
        },
        {
          title: "7, retained",
          key: "day7",
          width: 150,
          sortable: true
        },
        {
          title: "30, retained",
          key: "day30",
          width: 150,
          sortable: true
        },
        {
          title: "The next day left",
          key: "tomorrow",
          width: 150,
          sortable: true
        },
        {
          title: "Day Active",
          key: "day",
          width: 150,
          sortable: true
        },
        {
          title: "Week Active",
          key: "week",
          width: 150,
          sortable: true
        },
        {
          title: "Month Active",
          key: "month",
          width: 150,
          sortable: true
        }
      ],
      data7: [
        {
          name: "Name1",
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
        },
        {
          name: "Name2",
          fav: 0,
          show: 4720,
          weak: 4086,
          signin: 3792,
          click: 8690,
          active: 8470,
          day7: 8172,
          day30: 5197,
          tomorrow: 1684,
          day: 2593,
          week: 2507,
          month: 1537
        },
        {
          name: "Name3",
          fav: 0,
          show: 7181,
          weak: 8007,
          signin: 8477,
          click: 1879,
          active: 16,
          day7: 2249,
          day30: 3450,
          tomorrow: 377,
          day: 1561,
          week: 3219,
          month: 1588
        },
        {
          name: "Name4",
          fav: 0,
          show: 9911,
          weak: 8976,
          signin: 8807,
          click: 8050,
          active: 7668,
          day7: 1547,
          day30: 2357,
          tomorrow: 7278,
          day: 5309,
          week: 1655,
          month: 9043
        },
        {
          name: "Name5",
          fav: 0,
          show: 934,
          weak: 1394,
          signin: 6463,
          click: 5278,
          active: 9256,
          day7: 209,
          day30: 3563,
          tomorrow: 8285,
          day: 1230,
          week: 4840,
          month: 9908
        },
        {
          name: "Name6",
          fav: 0,
          show: 6856,
          weak: 1608,
          signin: 457,
          click: 4949,
          active: 2909,
          day7: 4525,
          day30: 6171,
          tomorrow: 1920,
          day: 1966,
          week: 904,
          month: 6851
        },
        {
          name: "Name7",
          fav: 0,
          show: 5107,
          weak: 6407,
          signin: 4166,
          click: 7970,
          active: 1002,
          day7: 8701,
          day30: 9040,
          tomorrow: 7632,
          day: 4061,
          week: 4359,
          month: 3676
        },
        {
          name: "Name8",
          fav: 0,
          show: 862,
          weak: 6520,
          signin: 6696,
          click: 3209,
          active: 6801,
          day7: 6364,
          day30: 6850,
          tomorrow: 9408,
          day: 2481,
          week: 1479,
          month: 2346
        },
        {
          name: "Name9",
          fav: 0,
          show: 567,
          weak: 5859,
          signin: 128,
          click: 6593,
          active: 1971,
          day7: 7596,
          day30: 3546,
          tomorrow: 6641,
          day: 1611,
          week: 5534,
          month: 3190
        },
        {
          name: "Name10",
          fav: 0,
          show: 3651,
          weak: 1819,
          signin: 4595,
          click: 7499,
          active: 7405,
          day7: 8710,
          day30: 5518,
          tomorrow: 428,
          day: 9768,
          week: 2864,
          month: 5811
        },
        {
          name: "Name11",
          fav: 0,
          show: 3651,
          weak: 1819,
          signin: 4595,
          click: 7499,
          active: 7405,
          day7: 8710,
          day30: 5518,
          tomorrow: 428,
          day: 9768,
          week: 2864,
          month: 5811
        },
        {
          name: "Name12",
          fav: 0,
          show: 3651,
          weak: 1819,
          signin: 4595,
          click: 7499,
          active: 7405,
          day7: 8710,
          day30: 5518,
          tomorrow: 428,
          day: 9768,
          week: 2864,
          month: 5811
        },
        {
          name: "Name13",
          fav: 0,
          show: 3651,
          weak: 1819,
          signin: 4595,
          click: 7499,
          active: 7405,
          day7: 8710,
          day30: 5518,
          tomorrow: 428,
          day: 9768,
          week: 2864,
          month: 5811
        },
        {
          name: "Name14",
          fav: 0,
          show: 3651,
          weak: 1819,
          signin: 4595,
          click: 7499,
          active: 7405,
          day7: 8710,
          day30: 5518,
          tomorrow: 428,
          day: 9768,
          week: 2864,
          month: 5811
        },
        {
          name: "Name15",
          fav: 0,
          show: 3651,
          weak: 1819,
          signin: 4595,
          click: 7499,
          active: 7405,
          day7: 8710,
          day30: 5518,
          tomorrow: 428,
          day: 9768,
          week: 2864,
          month: 5811
        },
        {
          name: "Name16",
          fav: 0,
          show: 3651,
          weak: 1819,
          signin: 4595,
          click: 7499,
          active: 7405,
          day7: 8710,
          day30: 5518,
          tomorrow: 428,
          day: 9768,
          week: 2864,
          month: 5811
        },
        {
          name: "Name17",
          fav: 0,
          show: 3651,
          weak: 1819,
          signin: 4595,
          click: 7499,
          active: 7405,
          day7: 8710,
          day30: 5518,
          tomorrow: 428,
          day: 9768,
          week: 2864,
          month: 5811
        },
        {
          name: "Name18",
          fav: 0,
          show: 3651,
          weak: 1819,
          signin: 4595,
          click: 7499,
          active: 7405,
          day7: 8710,
          day30: 5518,
          tomorrow: 428,
          day: 9768,
          week: 2864,
          month: 5811
        }
      ]
    };
  },
  mounted: function() {
    var self = this;
    self.$nextTick(function() {
      // Code that will run only after the
      // entire view has been rendered
      self.autoTableSize();
      window.addEventListener(
        "resize",
        function() {
          console.log(
            $(window).width() - document.querySelector("#home>div").offsetLeft
          );
          console.log(
            $(window).height() - document.querySelector("#home>div").offsetTop
          );
          self.autoTableSize();
        },
        false
      );
    });
  },
  methods: {
    openDir() {
      let self = this;
      app.post(self.par);
    },
    handleSearch1(value) {
      this.data1 = !value ? [] : [value, value + value, value + value + value];
    },
    autoTableSize() {
      var self = this;
      $("#home>div").width(
        $(window).width() - document.querySelector("#home>div").offsetLeft
      );
      self.height =
        $(window).height() - document.querySelector("#home>div").offsetTop - 20;
      // $("#home>div").height(
      //   $(window).height() - document.querySelector("#home>div").offsetTop
      // );
      // document.querySelector("#home>div").style.width =
      //   document.getElementById("home").clientWidth + "px";
    }
  }
};
</script>