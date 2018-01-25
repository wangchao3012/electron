<template>
  <div class="main">
    <header class="titlebar" @dblclick="maximize">
      <div class="titlebar-login">
        <img src="../img/user2-160x160.jpg" />
        <a href="#" @click="modalLogin = true">登录/注册</a>
      </div>
      <div class="ctrls">
        <a href="#" @click="minimize">
          <i class="fa fa-window-minimize"></i>
        </a>
        <a href="#" @click="maximize">
          <i class="fa" :class="isMaximized?'fa-window-restore':'fa-window-maximize'"></i>
        </a>
        <a href="#" @click="modalClose = true">
          <i class="fa fa-close"></i>
        </a>
      </div>
    </header>
    <div class="content">
      <aside class="sidebar">
        <ul class="sidebar-menu">
          <li class="active">
            <a href="#/trade">
              <i class="fa fa-bars"></i>
              <span>交易</span>
            </a>
          </li>
          <li>
            <a href="#/quotes">
              <i class="fa fa-bookmark-o"></i>
              <span>价格</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-bookmark-o"></i>
              <span>新股</span>
            </a>
          </li>
        </ul>
      </aside>
      <section>
        <div class="content-wrapper">
          <div class="content-header">
            <ul class="y-tag">
              <li class="active">
                <a href="#">普通交易</a>
              </li>
              <li>
                <a href="#">信用交易</a>
              </li>
              <li>
                <a href="#">开放式基金</a>
              </li>
              <li>
                <a href="#">股转系统</a>
              </li>
              <li>
                <a href="#">港股通</a>
              </li>
            </ul>
          </div>
          <div class="content-body">
            <div class="content-body-main">
              <div class="content-body-left">
                <ul class="y-tag y-vertical">
                  <li class="active">
                    <a href="#">下单</a>
                  </li>
                  <li>
                    <a href="#">撤单</a>
                  </li>
                  <li>
                    <a href="#">资产持仓</a>
                  </li>
                  <li>
                    <a href="#">委托查询</a>
                  </li>
                  <li>
                    <a href="#">成交查询</a>
                  </li>
                  <li>
                    <a href="#">修改密码</a>
                  </li>
                </ul>
              </div>
              <div class="content-body-right">
                <div class="tab-content">
                  <div class="tab-top">
                    <!-- <div class="tab-order">
                        
                        </div> -->
                    <div>
                      <div class="tab-header">
                        <Select v-model="selAccountType" size="small" style="width:100px">
                          <Option value="rmb" key="1">人民币账号</Option>
                          <Option value="my" key="2">美元账号</Option>
                        </Select>
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
                              <th>可用</th>
                              <td>0.00</td>
                            </tr>
                            <tr>
                              <th>可取</th>
                              <td>0.00</td>
                            </tr>
                            <tr>
                              <th>冻结</th>
                              <td>0.00</td>
                            </tr>
                            <tr>
                              <th>参考市值</th>
                              <td>0.00</td>
                            </tr>
                            <tr>
                              <th>持仓占比</th>
                              <td></td>
                            </tr>
                            <tr>
                              <th>资产账号</th>
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
                        <Form class="y-form" :label-width="32">
                          <FormItem label="代码">
                            <Input size="small" class="y-orange" placeholder="请输入代码"></Input>
                          </FormItem>
                          <FormItem label="类型">
                            <Select size="small">
                              <Option selected value="xjwt">限价委托</Option>
                            </Select>
                          </FormItem>
                          <FormItem label="价格">
                            <InputNumber class="y-orange" size="small"></InputNumber>
                          </FormItem>
                          <FormItem label="数量">
                            <Input size="small" class="y-orange" placeholder="请输入数量"></Input>
                          </FormItem>
                          <FormItem class="y-black">
                            <div class="pull-left">涨停
                              <span class="y-red">--</span>
                            </div>
                            <div class="pull-right">涨跌
                              <span class="y-green">--</span>
                            </div>
                          </FormItem>
                          <FormItem class="y-black" :label-width="0">
                            <RadioGroup v-model="button6" class="y-orange" type="button" size="small">
                              <Radio label="1/4"></Radio>
                              <Radio label="2/4"></Radio>
                              <Radio label="3/4"></Radio>
                              <Radio label="全部"></Radio>
                            </RadioGroup>
                          </FormItem>

                          <FormItem class="y-black">
                            <Button type="warning" size="small" long>买入</Button>
                          </FormItem>
                        </Form>
                        <Form class="y-form" :label-width="32">
                          <FormItem label="代码">
                            <Input size="small" class="y-blue" placeholder="请输入代码"></Input>
                          </FormItem>
                          <FormItem label="类型">
                            <Select size="small">
                              <Option selected value="xjwt">限价委托</Option>
                            </Select>
                          </FormItem>
                          <FormItem label="价格">
                            <InputNumber class="y-blue" size="small"></InputNumber>
                            <!-- <Input size="small" class="y-blue" placeholder=""></Input> -->
                          </FormItem>
                          <FormItem label="数量">
                            <Input size="small" class="y-blue" placeholder="请输入数量"></Input>
                          </FormItem>
                          <FormItem class="y-black">
                            <div class="pull-left">涨停
                              <span class="y-red">--</span>
                            </div>
                            <div class="pull-right">涨跌
                              <span class="y-green">--</span>
                            </div>
                          </FormItem>
                          <FormItem class="y-black" :label-width="0">
                            <RadioGroup v-model="button6" class="y-blue" type="button" size="small">
                              <Radio label="1/4"></Radio>
                              <Radio label="2/4"></Radio>
                              <Radio label="3/4"></Radio>
                              <Radio label="全部"></Radio>
                            </RadioGroup>
                          </FormItem>
                          <FormItem class="y-black">
                            <Button type="primary" @click="buy" size="small" long>卖出</Button>
                          </FormItem>
                        </Form>
                      </div>
                    </div>
                    <div>
                      <Tabs type="card" :animated='false'>
                        <TabPane label="盘口">
                          <table class="y-table">
                            <tbody>
                              <tr>
                                <th>总资产</th>
                                <td>0.00</td>
                              </tr>
                              <tr>
                                <th>可用</th>
                                <td>0.00</td>
                              </tr>
                              <tr>
                                <th>可取</th>
                                <td>0.00</td>
                              </tr>
                              <tr>
                                <th>冻结</th>
                                <td>0.00</td>
                              </tr>
                              <tr>
                                <th>参考市值</th>
                                <td>0.00</td>
                              </tr>
                              <tr>
                                <th>持仓占比</th>
                                <td></td>
                              </tr>
                              <tr>
                                <th>资产账号</th>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
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
                        <ul class="y-tag">
                          <li class="active">
                            <a href="#">普通交易</a>
                          </li>
                          <li>
                            <a href="#">信用交易</a>
                          </li>
                          <li>
                            <a href="#">开放式基金</a>
                          </li>
                          <li>
                            <a href="#">股转系统</a>
                          </li>
                          <li>
                            <a href="#">港股通</a>
                          </li>
                        </ul>
                      </div>
                      <!-- width="600" -->
                      <div class="tab-table">
                        <Table class="i-table" :width='width' :height="height" :columns="columns8" :data="data7" size="small" :border='true' ref="table"></Table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Modal v-model="modalClose" width="300" class-name="vertical-center-modal" :mask-closable="false">
      <p slot="header">
        <span>XTP客户端</span>
      </p>
      <div style="text-align:center">
        <p>您确定要退退出系统吗？</p>
      </div>
      <div slot="footer">
        <Button type="primary" @click="close">退出</Button>
        <Button @click="modalClose = false">取消</Button>
      </div>
    </Modal>
    <Modal v-model="modalLogin" title="登录" class-name="vertical-center-modal" width="400" style="padding:50px">
      <Form :model="loginPar">
        <FormItem>
          <Input v-model="loginPar.userName" placeholder="请输入用户名">
          <Icon type="ios-person-outline" size='22' slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Input v-model="loginPar.password" placeholder="请输入密码">
          <Icon type="ios-locked-outline" size='22' slot="prepend"></Icon>
          </Input>
        </FormItem>
        <!-- <FormItem>
          <Button type="primary" long>登录</Button> 
        </FormItem> -->
      </Form>
      <div slot="footer">
        <Button type="primary" size="large" long>登录</Button>
        <div class="row ">
          <div class="col-xs-12">
            <a class="pull-left">忘记密码
            </a>
            <a class="pull-right">注册账号
            </a>
          </div>

        </div>

      </div>
    </Modal>
  </div>
</template>
<style lang="scss" scoped>

</style>

<script>
export default {
  data() {
    return {
      ipc: this.$electron.ipcRenderer,
      isMaximized: false,
      modalClose: false,
      modalLogin: false,
      width: 0,
      height: 0,
      button6: "",
      selAccountType: "rmb",
      loginPar: {
        userName: "",
        password: ""
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
          title: "The next",
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
          title: "最后一列",
          key: "month",
          width: 150,
          sortable: true
        }
      ],
      data7: []
    };
  },
  mounted: function() {
    var self = this;
    for (let i = 0; i < 50; i++) {
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
    self.$nextTick(function() {
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
  sockets: {
    connect: function() {
      //  debugger
      console.log("socket 连接成功");
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
  methods: {
    buy() {
      this.$socket.emit("set nickname", "aaa");
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
    },
    close() {
      this.ipc.send("window-close");
    },
    maximize() {
      this.isMaximized = !this.isMaximized;
      this.ipc.send("window-max");
    },
    minimize() {
      this.ipc.send("window-min");
    }
  }
};
</script>
