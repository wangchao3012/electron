<template>
<section class="content">
  <div class="y-table" style="height: 100%;">
    
    <div class="btn-group-vertical y-cell" style="width:100px;background-color: #22252b;" role="group" aria-label="Vertical button group">
      <a href="#/trade/credit/order" class="btn btn-black active">下单</a>
      <a href="#/trade/credit" class="btn btn-black">撤单</a>
       
      <a href="#/trade/credit" class="btn btn-black">资产持仓</a>
      <a href="#/trade/credit" class="btn btn-black">银证转账</a>
         
    </div>
    <div class="y-cell" style="height: 100%;">
    <router-view></router-view>
    </div>
    
  </div>
</section>
</template>
<script>
export default {};
</script>