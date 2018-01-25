export const changetable ={
    mounted: function() {
        var self = this;
        self.$nextTick(function() {
            document.querySelector('table').style.width = 0;
            var lastwidth =$(".ivu-table-tbody tr").eq(1).children("td:last-child").width();
            $("table colgroup").children("col:last-child").width(lastwidth);
       });
    }
}