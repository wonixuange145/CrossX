<template>
  <header>
    <div class="l-content">
      <!-- <el-button plain icon="el-icon-menu" size="mini" @click="collapseMenu"></el-button> -->
      <i class="fa fa-bars" @click="collapseMenu" style="color: #FFFFFF;"></i>
      <!-- <h3 style=" color : #fff">首页</h3> -->
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span class="el-dropdown-link">
          <img class="user-image" src="userImg">
          </span>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="fa fa-user"></i>个人中心</el-dropdown-item>
          <el-dropdown-item @click="resetPwd"><i class="fa fa-key"></i> 修改密码</el-dropdown-item>
          <el-dropdown-item @click="switchSkin"><i class="fa fa-dashboard"></i> 切换主题</el-dropdown-item>
          <el-dropdown-item @click="toggleMenu"><i class="fa fa-toggle-off"></i> 横向菜单</el-dropdown-item>
          <el-dropdown-item @click.native="logOut"><i class="fa fa-sign-out"></i> 退出登录</el-dropdown-item>
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
  // import userImg from '../assets/images/user.png'
  export default {
    data() {
      return {
        userImg: require('../assets/images/user.png')
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
        
      },
      
      //切换主题
      switchSkin(){
        
      },
      //切换菜单
      toggleMenu(){
        
      },
      //退出登陆
      logOut() {
        location.reload()
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
</style>

<style lang="scss">
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
  .el-dropdown-menu--mini .el-dropdown-menu__item{
    padding: 6px 20px;
  }
</style>
