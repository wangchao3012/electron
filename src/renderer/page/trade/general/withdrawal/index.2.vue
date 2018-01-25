<template>
   <AutoComplete
        v-model="value1"
        :search-filter="searchFilter"
        class="y-dark" size="small"
        style="width:140px">
        <div>
            <Option v-for="option in data1" :value="option.code" :key="option.code">
                <span class="">{{ option.code }}</span>
                <span class="">{{ option.name }}</span>
            </Option>
        </div>
    </AutoComplete> 
</template>
<script>
import axios from "axios"

export default {
        data () {
            return {
                value1: '',
                data1: []
            }
        },
        created(){
            var self = this;
            self.getComments();
        },
        methods:{
            searchFilter (value, option) {
               return  option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
            },
            getComments(){
                var self = this;
                axios.get('./mock/search.json', {}).then((res) => {
                    self.data1 = res.data.result;
                    console.log(res.data.result)
                })
            }
        }
    }
</script>
<style>
   
</style>
