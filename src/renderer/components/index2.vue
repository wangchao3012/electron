<template>
  <div class="wrapper">
   <header class="main-header">
 

    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top" @dblclick="maximize">
      
 
        <ul class="nav navbar-nav">
         
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="../img/user2-160x160.jpg" class="user-image" alt="User Image">
              <span class="">登录</span>
            </a>
            <ul class="dropdown-menu"> 
              <li class="user-header">
                <img src="../img/user2-160x160.jpg" class="img-circle" alt="User Image">

                <p>
                  Alexander Pierce - Web Developer
                  <small>Member since Nov. 2012</small>
                </p>
              </li> 
              <li class="user-body">
                <div class="row">
                  <div class="col-xs-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </div> 
              </li> 
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a href="#" class="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li> 
        </ul> 
      <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <li> 
              <a href="#" @click="minimize">
                <i class="fa fa-window-minimize"></i>
              </a>
            </li>
            <li> 
              <a href="#" @click="maximize">
                <i class="fa " :class="isMaximized?'fa-window-restore':'fa-window-maximize'"></i>
              </a>
            </li>
            <li> 
              <a href="#" @click="close">
                <i class="fa fa-close"></i>
              </a>
            </li>
            
            
          </ul>
      </div>

    </nav>

   </header>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->

      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu tree" data-widget="tree"> 
        <li class="active"><a href="#/trade"><i class="fa fa-bars"></i> <span>交易</span></a></li>
        <li ><a href="#/quotes"><i class="fa fa-bookmark-o"></i> <span>价格</span></a></li>
        <li><a href="#"><i class="fa fa-bookmark-o"></i> <span>新股</span></a></li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
   
   <router-view></router-view>
   
  <!-- /.content-wrapper --> 
  <div class="control-sidebar-bg"></div>
   </div>
</template>
<style>
.content-header {
  padding: 0;
}
.skin-blue .content-header {
  background-color: #282d38;
}
</style>

<script>
export default {
  data() {
    return {
      ipc: this.$electron.ipcRenderer,
      isMaximized: false,
      menu: [
        {
          name: "交易",
          icon: "fa-home",
          to: "/user/list"
        },
        {
          name: "证券信息",
          icon: "fa-home",
          to: "/role/list"
        },
        {
          name: "资金划拨",
          icon: "fa-home",
          to: "/apiLog/list"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    close() {
      this.ipc.send("window-close");
    },
    maximize() {
      this.isMaximized = !this.isMaximized;
      this.ipc.send("window-max");
    },
    minimize() {
      this.ipc.send("window-min");
    }
  }
};
</script>
 