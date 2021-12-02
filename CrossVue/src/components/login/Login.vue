<template>
  <div class="signin">
    <div class="signinpanel" id="output">
      <div class="signin-info">
        <h4>欢迎使用 <strong>CrossX</strong></h4>
        <ul class="m-b">
          <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 智能交通</li>
          <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 智慧医疗</li>
          <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 检测任务</li>
          <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 分类任务</li>
          <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 分割任务</li>
        </ul>
      </div>
      <!--flex弹性盒子模型，justify-content：主抽 -->
      <div class="div_Login" style="position: absolute;justify-content: center;right: 0;top: 0;">
        <el-form id="signupForm" :model="loginFrom" :rules="loginRules" ref="loginForm">
          <div style="font-size: 14px;  margin-bottom: 10px;margin-top: -5px;">
            <span style="color: #000000;"><strong>登录:</strong></span>
          </div>
          <el-form-item prop="name">
            <el-input style="display:block;  margin-top:5px;" v-model="loginFrom.name" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="loginFrom.password" placeholder="密码"></el-input>
          </el-form-item>
          <div class="checkbox">
            <el-checkbox v-model="loginFrom.rememberMe" id="rememberme" name="rememberme" style="margin-left: -15px;"></el-checkbox>
            <label for="rememberme" style="font-size: 14px; color: black;margin-left: -50px;">记住我</label>
          </div>

          <el-button class="loginBtn" type='primary' @click.stop="submitForm" data-loading="正在验证登录，请稍后...">登录
          </el-button>
        </el-form>
      </div>
      <div class="signup-footer">
        <div class="pull-left" style="font-size: 13px;">
          Copyright &copy; 2020 All Rights Reserved. Collective Wisdom Platform <br>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import '../../../static/css/font-awesome.min.css';
  const axios = require('axios');
  import {
    sessionRouters,
    filterRouters
  } from '../../router/router'
  export default {
    data() {
      var checkNull = (rule, value, callback) => {
        if (value === '') {
          callback(new Error(rule.msg));
        } else {
          callback();
        }
      };
      return {
        loginFrom: {
          name: "",
          password: "",
          rememberMe: false,
        },
        src: "",
        loginRules: {
          name: [{
              required: true,
              message: '请输入登录账户',
              trigger: 'blur'
            },
            {
              min: 5,
              max: 12,
              message: '账户长度在 6 到 12 个字符',
              trigger: 'blur'
            }
          ],
          password: [{
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            },
            {
              min: 6,
              max: 12,
              message: '密码长度为6-12',
              trigger: 'blur'
            }
          ],
        }
      }
    },
    mounted() {
      this.refreshCode();
    },
    methods: {
      refreshCode() {},
      submitForm() {

        let param = new URLSearchParams()
        param.append("username", this.loginFrom.name)
        param.append("password", this.loginFrom.password)
        param.append("rememberMe", this.loginFrom.rememberMe)

        this.axios.post("http://localhost:8000/login", param)
          .then((reponse) => {
            // alert("1111");

            this.$router.push({
              path: "/main"
            });
          })
          .catch((error) => {
            //console.log(error);
          });

      },
    },
    components: {}
  }
</script>
<style>
  .el-input__inner:hover{
    border: 1.5px solid #1AB394;
  }
  .el-checkbox__inner {
    border-radius: 0;
    border: 1px solid #BBBBBB;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner {
    /* background-color: #FFFFFF; */
    border: 1px solid #BBBBBB;
  }
</style>
<style scoped>
  .loginBtn {
    /* display:block;
     margin-top:-5px; */
    width: 240px;
    display: block;
    margin: 10px 10px 20px 0;
    background-color: #1c84c6;
    border-color: #1c84c6;

  }

  .checkbox {
    position: relative;
    top: -10px;
  }

  #signupForm {
    background-color: beige;
    width: 300px;
    padding-bottom: 10px;
  }

  .signin {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    overflow-y: auto;
    background: url(../../../static/img/login-background.jpg) no-repeat center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    color: rgba(255, 255, 255, .95)
  }

  .signinpanel {
    position: relative;
    color: rgba(255, 255, 255, .95);
    width: 750px;
    margin: 10% auto 0
  }

  .signinpanel .signin-info ul {
    font-size: 13px;
    list-style: none;
    padding: 0;
    margin: 20px 0
  }

  .signinpanel .uname {

    background: #fff url(../../../static/img/user.png) no-repeat 95% center;
    color: #333
  }

  .signinpanel .pword {

    background: #fff url(../../../static/img/locked.png) no-repeat 95% center;
    color: #333
  }

  .signinpanel .code {
    background: #fff no-repeat 95% center;
    color: #333;
    margin: 0 0 15px 0;
  }

  .signinpanel .btn {
    margin-top: 15px
  }

  .signinpanel form {
    background: rgba(255, 255, 255, .2);
    border: 1px solid rgba(255, 255, 255, .3);
    -moz-box-shadow: 0 3px 0 rgba(12, 12, 12, .03);
    -webkit-box-shadow: 0 3px 0 rgba(12, 12, 12, .03);
    box-shadow: 0 3px 0 rgba(12, 12, 12, .03);
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    padding: 30px
  }

  .signup-footer {
    position: absolute;
    top: 280px;
    border-top: solid 1px rgba(255, 255, 255, .3);
    margin: 20px 0;
    padding-top: 15px
  }

  @media screen and (max-width:768px) {

    .signinpanel,
    .signuppanel {
      margin: 0 auto;
      width: 420px !important;
      padding: 20px
    }

    .signinpanel form {
      margin-top: 20px
    }

    .signup-footer,
    .signuppanel .form-control {
      margin-bottom: 10px
    }

    .signup-footer .pull-left,
    .signup-footer .pull-right {
      float: none !important;
      text-align: center
    }

    .signinpanel .signin-info ul {
      display: none
    }
  }

  @media screen and (max-width:320px) {

    .signinpanel,
    .signuppanel {
      margin: 0 20px;
      width: auto
    }
  }

  /*
  登录界面check样式
  */
  .checkbox-custom {
    position: relative;
    padding: 0 15px 0 25px;
    margin-bottom: 7px;
    display: inline-block;
    /* display: block; */
    margin-top: -5px;
  }

  /*
  将初始的checkbox的样式改变
  */
  .checkbox-custom input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    cursor: pointer;
    z-index: 2;
    margin: -6px 0 0 0;
    top: 50%;
    left: 3px;
  }

  /*
  设计新的checkbox，位置
  */

  .checkbox-custom label:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -9px;
    width: 18px;
    height: 17px;
    display: inline-block;
    border-radius: 2px;
    border: 1px solid #bbb;
    background: #fff;
  }

  /*
  点击初始的checkbox，将新的checkbox关联起来
  */

  .checkbox-custom input[type="checkbox"]:checked+label:after {
    position: absolute;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    content: "\e013";
    top: 42%;
    left: 3px;
    margin-top: -5px;
    font-size: 11px;
    line-height: 1;
    width: 16px;
    height: 16px;
    color: #333;
  }

  .checkbox-custom label {
    cursor: pointer;
    line-height: 1.2;
    font-weight: normal;
    margin-bottom: 0;
    text-align: left;
  }

  .form-control,
  .form-control:focus,
  .has-error .form-control:focus,
  .has-success .form-control:focus,
  .has-warning .form-control:focus,
  .navbar-collapse,
  .navbar-form,
  .navbar-form-custom .form-control:focus,
  .navbar-form-custom .form-control:hover,
  .open .btn.dropdown-toggle,
  .panel,
  .popover,
  .progress,
  .progress-bar {
    box-shadow: none;
  }

  .form-control {
    border-radius: 1px !important;
    padding: 6px 12px !important;
    height: 34px !important;
  }

  .form-control:focus {
    border-color: #1ab394 !important;
  }
</style>
