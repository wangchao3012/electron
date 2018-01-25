<style scoped>
.layout {
  /* border: 1px solid #d7dde4; */

  position: relative;
  /* border-radius: 4px; */
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-header {
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
.layout-ceiling {
  background: #464c5b;
  padding: 10px 0;
  overflow: hidden;
}
.layout,
.flex,
.ivu-row-flex {
  height: 100%;
}
.layout-menu-left {
  background-color: "#181a1f";
}
.layout-menu-left.ivu-col,
.ivu-menu-dark {
  background-color: #181a1f;
}
.layout-ceiling-main {
  float: right;
  margin-right: 15px;
}
.layout-ceiling-main a {
  color: #9ba7b5;
}
.layout-ceiling-main1 {
  float: left;
  margin-left: 10px;
  vertical-align: middle;
}
.ivu-menu-item {
  padding: 14px 12px;
}
.ivu-menu-item > a {
  color: #b8c7ce;
  text-decoration: none;
}
.ivu-menu-item > a > * {
  display: block;
  text-align: center;
}
.ivu-menu-item > i {
  margin-right: 0;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu),
.ivu-menu-dark.ivu-menu-vertical
  .ivu-menu-submenu-title-active:not(.ivu-menu-submenu) {
  border: none;
}
.layout-ceiling-main > a {
  padding: 18px 10px 18px 10px;
}
.layout-menu-right {
  border: solid 1px #000;
  display: block;
  width: calc(100% - 52px);
  background-color: #22252b;
}
</style>
<template>
    <div class="layout">
   
        <div class="layout-ceiling">
         <div class="layout-ceiling-main1">
               <Avatar icon="person" :style="{background: '#4a5660'}" size="small" />
               <a href='#'>登录/注册</a>
            </div>
            <div class="layout-ceiling-main">
                <a href="#"><i class="fa fa-window-minimize"></i></a>
                <a href="#"><i class="fa fa-window-maximize"></i></a>
                <a href="#"><i class="fa fa-close"></i></a>
            </div>
        </div>
        
             <Row type="flex"> 
            <Col   class="layout-menu-left">
                <Menu active-name="1" theme="dark" width="auto">
                    <div class="layout-logo-left"></div>
                    <MenuItem name="1">
                       <router-link to="/trade">
                        <Icon type="ios-navigate" :size="24"></Icon>
                        <span class="layout-text">交易</span>
                        </router-link>
                    </MenuItem>
                    <MenuItem name="2">
                    <router-link to="/quotes">
                        <Icon type="ios-keypad" :size="24"></Icon>
                        <span class="layout-text">价格</span>
                         </router-link>
                    </MenuItem>
                    <MenuItem name="3">
                    <router-link to="/">
                        <Icon type="ios-analytics" :size="24"></Icon>
                        <span class="layout-text">新股</span>
                         </router-link>
                    </MenuItem>
                </Menu> 
            </Col>
             <Col class="layout-menu-right">
             <router-view></router-view>
             </Col>
        </Row>  
       
    </div>
</template>
<script>
export default {};
</script>