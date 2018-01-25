<template>
    <div class="content-body-right">
        <div class="tab-wrapper">
            <div class="tab-bar">
               <div style="min-width:400px">
                  <Form :model="formItem" class="y-dark" inline>
                    <FormItem>
                        <Button type="primary" size="small">一键申购</Button>
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
            title: '交易市场',
            key: 'market',
            width: 120,
            align: "center"
            },
            {
            title: '申购代码',
            key: 'xtpid',
            width: 120,
            align: "center"
            },
            {
            title: '股票名称',
            key: 'stockname',
            width: 120,
            align: "center"
            },
            {
            title: '申购价格',
            key: 'price',
            width: 120,
            sortable: true,
            align: "center"
            },
            {
            title: '最大允许申购数量',
            key: 'maxnum',
            width: 160,
            align: "center"
            },
            {
            title: '可申购数量',
            key: 'num',
            width: 140,
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
                        market: "index" + (i + 1),
                        xtpid: 0,
                        stockname: 7302,
                        price: 5627,
                        maxnum: 1563,
                        num: 1563
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