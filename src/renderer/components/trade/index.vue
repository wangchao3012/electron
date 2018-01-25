<template>
<div class="content-wrapper"> 
    <section class="content-header">
        <!-- <ul class="nav nav-tabs" role="tablist">
          <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">普通交易</a></li>
          <li role="presentation"><a href="#/trade/credit" aria-controls="profile" role="tab" data-toggle="tab">信用交易</a></li>
          <li role="presentation"><a href="#/trade/ordinary" aria-controls="messages" role="tab" data-toggle="tab">开放式基金</a></li>
          <li role="presentation"><a href="#/trade/credit" aria-controls="settings" role="tab" data-toggle="tab">股转系统</a></li>
        </ul> -->
        <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
            <a href="#/trade/credit" class="btn btn-black active">普通交易</a>
            <a href="#/trade/ordinary" class="btn btn-black">信用交易</a> 
            <a href="#/trade/credit" class="btn btn-black">开放式基金</a> 
            <a href="#/trade/ordinary" class="btn btn-black">股转系统</a> 
        </div> 
    </section>
    <router-view></router-view>

   </div> 
</template>
<style>
.btn-black {
  background-color: #282d38;
  color: #9da1a9;
}
.btn-black.active {
  color: #9da1a9;
  background-color: #565c65;
}
.btn-black:hover {
  color: #9da1a9;
  background-color: #565c65;
}
</style>

<script>
export default {};
</script>