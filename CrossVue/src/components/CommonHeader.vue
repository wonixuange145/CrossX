<template>
  <header style="background: #3C8DBC">
    <div class="l-content">
      <i class="fa fa-bars" @click="collapseMenu" style="color: #FFFFFF;"></i>
    </div>
    <div class="r-content">
      <el-dropdown size="medium">
        <span class="el-dropdown-link"><img :src="userImg" class="user-image"/>admin</span>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="fa fa-user"></i>个人中心</el-dropdown-item>
          <!-- <router-link to="/resetPwd"> -->
             <el-dropdown-item @click.native="resetPwd"><i class="fa fa-key"></i> 修改密码</el-dropdown-item>
          <!-- </router-link> -->

          <el-dropdown-item @click="switchSkin"><i class="fa fa-dashboard"></i> 切换主题</el-dropdown-item>
          <li class="divider"></li>
          <el-dropdown-item @click="toggleMenu"><i class="fa fa-toggle-off"></i> 横向菜单</el-dropdown-item>
          <el-dropdown-item divided @click.native="logOut"><i class="fa fa-sign-out"></i> 退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
  import '../../static/css/font-awesome.min.css';
  import '../../static/css/bootstrap.min.css';
  import '../../static/css/main/animate.min.css';
  import '../../static/css/main/style.min862f.css';
  import ResetPwd from '../components/system/user/profile/ResetPwd.vue';

  // import userImg from '../assets/images/user.png'
  export default {
    components: {
        ResetPwd
    },
    data() {
      return {
        userImg:require('../../static/img/profile.jpg')
      }
    },
    methods: {
      //控制左侧菜单是否折叠
      collapseMenu() {
        this.$store.commit('collapseMenu')
        // alert("折叠是否成功")
      },
      //重置密码
      resetPwd(){
         this.$modal.show(ResetPwd, {
                  text: 'This text is passed as a property',
                  isDialog: true
                }, {
                  width: '770',
                  height: '380',
                  draggable: true,
                  transition: 'scala',
                  adaptive: true,
                  resizable: false,
                  classes: ['v--modal-overlay']
                })

      },

      //切换主题
      switchSkin(){

      },
      //切换菜单
      toggleMenu(){

      },
      //退出登陆
      logOut() {
        this.$router.push({
          path: "login"
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }


  .l-content {
    display: flex;
    align-items: center;

    .el-button {
      margin-right: 20px;
    }
  }

  .r-content {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }

  .el-breadcrumb__item {
    .el-breadcrumb__inner {
      color: #666666;
      font-weight: normal;
    }

    &:last-child {
      .el-breadcrumb__inner {
        color: #ffffff;
      }
    }
  }
  .el-dropdown-menu--medium .el-dropdown-menu__item{
    padding: 6px 20px;
  }
  .el-dropdown-link{
    font-size: 14px;
    font-weight: 700;
    color: #FFFFFF;
  }
  .user-image {
      float: left;
      width: 27px;
      height: 27px;
      border-radius: 50%;
      margin-right: 8px;
      margin-top: -3px;
      }
</style>
