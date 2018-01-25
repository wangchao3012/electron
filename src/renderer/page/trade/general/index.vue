<template>

  <div class="content-body">
    <div class="content-body-main">
      <div class="content-body-left">
        <ul class="y-tag y-vertical">
          <router-link tag="li"   to="/trade/general/order">
            <a> 下单 </a>
          </router-link>
          <router-link tag="li" to="/trade/general/withdrawal">
            <a> 撤单 </a>
          </router-link>
          <router-link tag="li" to="/trade/general/entrust">
            <a> 委托查询 </a>
          </router-link>
          <router-link tag="li" to="/trade/general/fundtransfer">
            <a> 资金划转 </a>
          </router-link>
          <router-link tag="li" to="/trade/general/moneyposition">
            <a> 持仓 </a>
          </router-link>
          <router-link tag="li" to="/trade/general/dealquery">
            <a> 成交查询 </a>
          </router-link>
          <router-link tag="li" to="/trade/general/currentquote">
            <a> 实时行情 </a>
          </router-link>
          <router-link tag="li" to="/trade/general/funding">
            <a> 资金划拨 </a>
          </router-link>
          <router-link tag="li" to="/trade/general/gradingfund">
            <a> 分级基金 </a>
          </router-link>
          <router-link tag="li" to="/trade/general/newstockbuy">
            <a> 新股申购 </a> 
          </router-link>
          <router-link tag="li" to="/trade/general/etf-list">
            <a> ETF清单 </a>
          </router-link>
          <router-link tag="li" to="/trade/general/etf-stockblue">
            <a> ETF股票蓝 </a>
          </router-link>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>

</template>
<script>
export default {};
</script>