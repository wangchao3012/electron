<template>
<div>
    <div class="btn-group btn-group-justified" role="group" aria-label="Justified button group">
      <a href="#/trade/ordinary" class="btn btn-default" role="button">Left</a>
      <a href="#/trade/credit" class="btn btn-default" role="button">Middle</a>
      <a href="#" class="btn btn-default" role="button">Right</a>
    </div>
        <!-- <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
      <a  href="#/trade/ordinary" class="btn btn-default">Left</a>
      <a  href="#/trade/credit" class="btn btn-default">Left2</a>
      <a  href="" class="btn btn-default">Left3</a>
    </div> -->
     
    <Row>
        <Col span="24">
        <router-link to="/trade/ordinary">普通交易</router-link>
        <router-link to="/trade/credit">信用交易</router-link>
        <router-link to="/">开放式基金</router-link> 
        </Col> 
    </Row>
    <Row>
        <Col span="12">
        <router-view></router-view>
        </Col> 
    </Row>
    </div>
</template>
<script>
export default {};
</script>