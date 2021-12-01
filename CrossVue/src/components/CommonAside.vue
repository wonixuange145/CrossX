<template>
  <!--collapse 是否水平折叠收起菜单-->
  <el-menu
    :collapse="isCollapse()"
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <!--是否水平折叠收起菜单 会影响这里字段的显示 -->
    <h3 v-show="isCollapse">CrossX</h3>
    <h3 v-show="!isCollapse">CrossX</h3>
    <el-submenu :index="item.menuName" v-for="(item, index) in menuList" :key="index">
      <template slot="title">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.menuName }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :index="subItem.path" v-for="(subItem, subIndex) in item.children" :key="subIndex" @click="clickMenu(subItem)">
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
      menuList:[],
    }
  },

  mounted(){
      this.selectMenuUser();
  },

  methods: {
    selectMenuUser(){
        this.axios
          .post("http://localhost:8000/select")
          .then((response) => {
            this.menuList = response.data.menus;
            console.log(response);
            })
            .catch((error) => { // 请求失败处理
              console.log(error);
              alert("2222");
              console.log(error.data);
            });
            },

    //跳转路由 根据名称跳转
    clickMenu(item) {
      this.$router.push({ name: item.name })
    },
    isCollapse() {
      // 这里的数据就是从vuex取得
      return this.$store.state.tab.isCollapse
    },

  },

}
</script>

<style lang="scss" scoped>
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
</style>
