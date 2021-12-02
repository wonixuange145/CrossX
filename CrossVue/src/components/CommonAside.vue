<template>
  <!--collapse 是否水平折叠收起菜单-->
  <el-menu :collapse="isCollapse()" :default-active="$route.path" class="el-menu-vertical-demo"
    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <!--是否水平折叠收起菜单 会影响这里字段的显示 -->
    <h3 v-show="this.$store.state.tab.isCollapse" ></h3>
    <h3 v-show="!this.$store.state.tab.isCollapse" style="font-weight: 300; font-size: 20px; background-color: #367FA9;height:60px; line-height: 60px;">CrossX</h3>

    <!-- 用户信息内容 -->
    <div class="user-panel">
      <a class="menuItem noactive" title="个人中心" th:href="@{/system/user/profile}">
        <div class="hide" text="个人中心"></div>
        <div class="pull-left image">
          <img :src="userImg" class="img-circle"/>
        </div>
      </a>
      <div class="pull-left info">
        <p class="username">admin</p>
        <a href="#" style="font-size: 12px;color: #ffffff;"><i class="fa fa-circle text-success"></i> 在线</a>
        <a href="#" style="font-size: 12px;color: #ffffff; padding-left:5px;"><i class="fa fa-sign-out text-danger"></i> 注销</a>
      </div>
    </div>

    <!-- 导航栏内容 -->
    <el-menu-item index="首页">
      <i class="fa fa-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu :index="item.menuName" v-for="(item, index) in menuList" :key="index">
      <template slot="title">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.menuName }}</span>
      </template>

      <el-menu-item-group>
        <el-menu-item :index="subItem.path" v-for="(subItem, subIndex) in item.children" :key="subIndex"
          @click="clickMenu(subItem)">
          <!-- <i :class="'el-icon-' + subItem.icon"></i> -->
          <span slot="title">{{ subItem.menuName }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
  import '../../static/css/font-awesome.min.css';
  export default {
    //计算属性
    computed: {
      //没有子菜单
    },
    data() {
      return {
        menuList: [],
        userImg: require('../../static/img/profile.jpg')
      }
    },

    mounted() {
      this.selectMenuUser();
    },

    methods: {
      selectMenuUser() {
        this.axios
          .post("http://localhost:8000/select")
          .then((response) => {
            this.menuList = response.data.menus;
            console.log(this.$store.state.tab.isCollapse);
          })
          .catch((error) => { // 请求失败处理
            console.log(error);
            alert("2222");
            console.log(error.data);
          });
      },

      //跳转路由 根据名称跳转
      clickMenu(item) {
        this.$router.push({
          name: item.name
        })
      },
      isCollapse() {
        // 这里的数据就是从vuex取得
        return this.$store.state.tab.isCollapse
      },

    },

  }
</script>

<style lang="scss" scoped>
  .user-panel {
    white-space: nowrap;
    position: relative;
    width: 100%;
    padding: 15px;
    overflow: hidden;

    a {
        background-color: transparent;
    }
  }

  .user-panel .image>img {
    width: 100%;
    max-width: 45px;
    height: auto;
  }
  .img-circle {
      border-radius: 50%;
  }
  .user-panel > .info {
      padding: 5px 5px 5px 15px;
      line-height: 1;
      position: absolute;
      left: 55px;
      }
  .pull-left {
      float: left !important;
  }
  .username{
    padding-bottom: 10px;
    font-size: 13px;
    font-weight: 600;
    color: #ffffff;
  }

  .el-menu {
    height: 100%;
    border: none;

    h3 {
      color: #ffffff;
      text-align: center;
      line-height: 48px;
    }
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .aside-crossx{

    // font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    // font-size: 20px;
    // font-weight: 300;
    // text-align: center;
    line-height: 60px;
    height: 60px;

  }


</style>
