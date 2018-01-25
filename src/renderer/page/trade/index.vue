<template>
    <div class="content-wrapper">
        <div class="content-header">
            <ul class="y-tag">
                <router-link tag="li" to="/trade/general">
                    <a> 普通交易 </a>
                </router-link> 
                  <router-link tag="li" to="/trade/ETF">
                    <a> ETF申赎 </a>
                </router-link> 
                  <router-link tag="li" to="/trade/fund">
                    <a> 分级基金 </a>
                </router-link> 
                  <router-link tag="li" to="/trade/other">
                    <a> 其他交易 </a>
                </router-link>  
            </ul>
        </div>
        <router-view></router-view>
    </div>

</template>
<script>
export default {
  mounted: function() {
    var self = this;
  }
};
</script>