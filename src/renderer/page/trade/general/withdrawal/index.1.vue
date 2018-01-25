<template>
    <div class="content-body-right">
        <div class="tab-wrapper">
            <div class="tab-bar">
               <div style="min-width:400px">
                  <Form :model="formItem" class="y-dark" inline>
                    <FormItem label="XTP ID: ">
                        <Input v-model="formItem.xtpid" class="y-dark"  size="small" placeholder="" autofocus></Input>
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
    }
  } 
};
</script>