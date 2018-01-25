<template>
    <div class="row ">
        <!-- class="col-xs-3" -->
  <div style="width:180px">
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
  <div class="col-xs-6">
    <div class="panel panel-black">
        <div class="panel-heading">
            下单
        </div>
        <div class="panel-body" >
            <div class="row">
                <div class="col-xs-6" style="background-color:#221f20;">
                  <Form  :label-width="40">
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
                          <RadioGroup v-model="button6" type="button" size="small">
                            <Radio label="1/4"></Radio>
                            <Radio label="1/3"></Radio>
                            <Radio label="1/2"></Radio>
                            <Radio label="全部"></Radio>
                            </RadioGroup>
                        <button type="button" class="btn btn-block btn-warning btn-sm">下单</button>
                    </Form>
                </div>
                <div class="col-xs-6" style="background-color:#1a1e28;">
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
  <div class="col-xs-3">
      
  <!-- Nav tabs -->
  <!-- <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
    <li role="presentation"><a href="#/trade/credit" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
    <li role="presentation"><a href="#/trade/credit" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
    <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
  </ul> -->

  <!-- Tab panes -->
  <!-- <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="home">...1</div>
    <div role="tabpanel" class="tab-pane" id="profile">...2</div>
    <div role="tabpanel" class="tab-pane" id="messages">...3</div>
    <div role="tabpanel" class="tab-pane" id="settings">...4</div>
  </div> -->
 

  </div>
</div>
</template>
<style>
.form-horizontal {
}
</style>
<style lang="scss" scoped>
.ivu-radio-group-button {
  .ivu-radio-wrapper {
      color:#c2c4d2;
    background-color: #3d424b;
    border: solid 1px #000;
  }
  &.ivu-radio-wrapper-checked {
      background-color: #ca712a;
  }
  .ivu-radio-wrapper-checked:first-child{
       background-color: #ca712a;
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
      cityId: "1",
      model3: "",
      model4: "",
      value3: "",
      button6: "北京",
      par: {
        cityId: 1
      }
    };
  },
  methods: {
    openDir() {
      let self = this;
      app.post(self.par);
    }
  }
};
</script>