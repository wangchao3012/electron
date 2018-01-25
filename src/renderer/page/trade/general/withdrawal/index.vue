<template>
    <div class="content-body-right">
        <div class="tab-wrapper">
            <div class="tab-bar">
               <div style="min-width:400px">
                  <Form class="y-search y-dark" inline>
                    <FormItem label="XTP ID: ">
                         <AutoComplete
                        v-model="value1"
                        :search-filter="searchFilter"
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
                <Table class="i-table" :width='width' :height="height" :columns="columns" 
                :data="tdata" size="small" :border='true' ref="table"></Table>
            </div>
        </div>
    </div>
</template>
<style lang="scss" >
    
</style>


<script>
import axios from "axios"
import { setTimeout } from 'timers';

// import {changetable} from "../../../../mixins/mixin";

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
      tdata: []
    };
  },
  mounted: function() {
      var self = this;
      self.$nextTick(function() {
        setTimeout(function() {
            for (let i = 0; i < 10; i++) {
                self.tdata.push({
                index: "index" + (i + 1),
                xtpid: 0,
                cancelxtpid: 7302,
                errorCode: 5627,
                errorMessage: 1563,
                });
            } 
        }, 100);
        setTimeout(function(){
             document.querySelector('table').style.width = 0;
            $("table colgroup").children("col:last-child").width(200);
        },101)
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
//   mixins:[changetable],
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


    searchFilter (value, option) {
        return  option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
    },
    requestdata(value){
        var self = this;
        axios.get('./mock/search.json', {}).then((res) => {
            self.data1 = res.data.result;
            console.log(res.data.result)
        })
        // this.data1 = !value || value.indexOf('@') >= 0 ? [] : [
        //             value + '@qq.com',
        //             value + '@sina.com',
        //             value + '@163.com'
        // ];
    }
  },
   created(){
        var self = this;
       
    },
};
</script>