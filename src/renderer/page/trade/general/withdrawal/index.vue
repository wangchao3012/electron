<template>
    <div class="content-body-right">
        <div class="tab-wrapper">
            <div class="tab-bar">
               <div style="min-width:400px">
                  <Form class="y-search y-dark" inline>
                    <FormItem label="XTP ID: ">
                        <AutoComplete
                        v-model="value1"
                        @on-change="requestdata"
                        class="y-dark"  size="small"
                        style="width:120px">
                            <div>
                                <Option v-for="option in search" :value="option.code" :key="option.code">
                                    <span class="">{{ option.code }}</span>
                                    <span class="">{{ option.name }}</span>
                                </Option>
                            </div>
                        </AutoComplete> 
                    </FormItem>
                    <FormItem>
                        <Button type="primary" size="small">撤单</Button>
                    </FormItem>
                  </Form>
                </div>
            </div>
            <div class="tab-table">
                <Table class="i-table" v-if="tdata.length" :width='width' :height="height" :columns="columns" 
                :data="tdata" size="small" :border='true' ref="table"></Table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import { setTimeout } from 'timers';

import {changetable} from "../../../../mixins/mixin";

export default {
    computed: {
       search(){
            return this.data1.filter(v => v.name.indexOf(this.value1) != -1) ||this.data1.filter(v => v.code.indexOf(this.value1) != -1);
        }
    },
  data() {
    return {
      modal: false,
      checked:true,
      stockCodeFlag: true,
      value1: '',
      data1: [
        {
            "code":"10001",
            "name":"平安银行"
        },
        {
            "code":"10002",
            "name":"银行广发"
        },
        {
            "code":"10300",
            "name":"证券银行"
        }
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
       columns: [
            {
            title: '序号',
            key: 'index',
            width: 100,
            align: "center"
            },
            {
            title: 'XTP ID',
            key: 'xtpid',
            width: 100,
            align: "center"
            },
            {
            title: 'CANCEL XTP ID',
            key: 'cancelxtpid',
            width: 150,
            align: "center"
            },
            {
            title: 'Error Code',
            key: 'errorCode',
            width: 150,
            align: "center"
            },
            {
            title: 'Error Message',
            key: 'errorMessage',
            width: 200,
            align: "center"
            } 
        ], 
      tdata: [],
      flag:false
    };
  },
  mounted: function() {
      var self = this;
      self.$nextTick(function() {     
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
  mixins:[changetable],
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
    requestdata(value){
        var self = this;
        axios.get('./mock/search.json', {}).then((res) => {
            self.data1 = res.data.result;
            console.log(res.data.result)
        })
    },
    changetable(){
            document.querySelector('table').style.width = 0;
            var lastwidth =$(".ivu-table-tbody tr").eq(1).children("td:last-child").width();
            $("table colgroup").children("col:last-child").width(lastwidth);
            console.log(11)
    }
  },
//   watch: {
//       flag(val){
//           setTimeout(()=>{
//               this.changetable()
//           },0)
//       }
//   },
   created(){
        var self = this;
         axios.get('./mock/withdrawal.json', {}).then((res) => {
             if(res.data.status == "ok"){
                 self.tdata = res.data.result
                 self.flag = true
                //console.log(res.data.result)
              }
        })
    },
};
</script>