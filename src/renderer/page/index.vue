<template>
  <div class="main">
    <header class="titlebar" @dblclick="maximize">
      <div class="titlebar-login">
        <img src="../img/user2-160x160.jpg" />
        <a href="#" @click="modalLogin = true">登录/注册</a>
      </div>
      <div class="ctrls">
        <a href="#" class="y-plus-visible" @click="minimize">
          <i class="fa fa-window-minimize"></i>
        </a>
        <a href="#" class="y-plus-visible" @click="maximize">
          <i class="fa" :class="isMaximized?'fa-window-restore':'fa-window-maximize'"></i>
        </a>
        <a href="#" class="y-plus-visible" @click="modalClose = true">
          <i class="fa fa-close"></i>
        </a>
      </div>
    </header>
    <div class="content">
      <aside class="sidebar">
        <ul class="sidebar-menu">
          <router-link tag="li" to="/trade">
            <a>
              <i class="fa fa-bars"></i>
              <span>交易</span>
            </a>
          </router-link>
          <!-- <router-link tag="li" to="/quotes/hs">
            <a>
              <i class="fa fa-bookmark-o"></i>
              <span>价格</span>
            </a>
          </router-link>
          <router-link tag="li" to="/11">
            <a>
              <i class="fa fa-bookmark-o"></i>
              <span>新股</span>
            </a>
          </router-link> -->
        </ul>
      </aside>
      <section>
        <router-view></router-view>
      </section>
    </div>
    <Modal v-model="modalClose" width="300" class-name="vertical-center-modal" :mask-closable="false">
      <p slot="header">
        <span>XTP客户端</span>
      </p>
      <div style="text-align:center">
        <p>您确定要退退出系统吗？</p>
      </div>
      <div slot="footer">
        <Button type="primary" @click="close">退出</Button>
        <Button @click="modalClose = false">取消</Button>
      </div>
    </Modal>
    <Modal v-model="modalLogin" title="登录" class="y-login" class-name="vertical-center-modal" width="400" style="padding:50px" :mask-closable="false">
      <Form :model="parLogin">
        <FormItem>
          <Input v-model="parLogin.username" size="large" placeholder="请输入用户名">
          <Icon type="ios-person-outline" size='22' slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Input v-model="parLogin.password" size="large" placeholder="请输入密码">
          <Icon type="ios-locked-outline" size='22' slot="prepend"></Icon>
          </Input>
        </FormItem>
        <!-- <FormItem>
          <Button type="primary" long>登录</Button> 
        </FormItem> -->
      </Form>
      <div slot="footer">
        <Button type="primary" :loading="loading" @click="login" size="large" long>
          <span v-if="!loading">登录</span>
          <span v-else>登录中...</span>
        </Button>
        <div class="row ">
          <div class="col">
            <a class="pull-left">忘记密码 </a>
          </div>
          <div class="col">
            <a class="pull-right">注册账号 </a>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>
<style lang="scss" >
.y-login {
  .ivu-modal-content {
    padding: 0 20px;
  }
  .ivu-modal-header {
    background-color: transparent;
    color: #333;
    padding: 14px 16px;
    .ivu-modal-header-inner {
      color: #333;
    }
  }
  .ivu-modal-body {
    padding: 30px 16px !important;
  }
  .ivu-modal-footer a {
    padding: 20px 0px;
    color: #666;
  }
  .ivu-modal-body .ivu-form-item:last-child {
    margin-bottom: 0;
  }
  .ivu-modal-close {
    top: 8px;
    .ivu-icon {
      &:hover {
        color: #333;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      ipc: null,
      isMaximized: false,
      modalClose: false,
      modalLogin: false,
      button6: "",
      loading: false,
      parLogin: {
        username: "15001030",
        password: "aI2p4TiG"
      }
    };
  },
  sockets: {
    connect: function() {
      console.log("socket 连接成功", this.$socket.id);
    },
    loginResult(d) {
      let self = this;
      self.loading = false;
      if (d.code == 0) {
        self.modalLogin = false;
        console.log(JSON.stringify(d));
        self.$Message.success(`${JSON.stringify(d)}登录成功`);
      } else {
        self.$Message.success(d.msg);
      }
    }
  },
  mounted: function() {
    var self = this;
    //       $('.y-tabs > li > a').click(function () {
    // let el=$(this);
    // });
    self.ipc = self.$electron && self.$electron.ipcRenderer;
    self.$nextTick(function() {});
  },

  methods: {
    login() {
      let self = this;
      self.loading = true;
      self.$socket.emit("login", self.parLogin);
      setTimeout(() => {
        if (self.loading) {
          self.loading = false;  
          self.$Message.error(`请求服务器超时！`);
        }
      }, 5000);
    },
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
