<template>

      <div class="white-bg">
        <div class="wrapper wrapper-content animated fadeInRight ibox-content">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="form-horizontal m" id="form-user-resetPwd">
            <input name="userId" type="hidden" />
            <div class="form-group">
              <el-form-item prop="userId">
                <label class="col-sm-3 control-label">登录名称：</label>
                <div class="col-sm-8">
                  <el-input type="text" v-model="ruleForm.userId" />
                </div>
              </el-form-item>
              <el-form-item prop="oldPassword">
                <label class="col-sm-3 control-label">旧密码：</label>
                <div class="col-sm-8">
                  <el-input type="password" v-model="ruleForm.oldPassword" />
                </div>
              </el-form-item>
              <el-form-item prop="newPassword">
                <label class="col-sm-3 control-label">新密码：</label>
                <div class="col-sm-8">
                  <el-input type="password" v-model="ruleForm.newPassword" />
                </div>
              </el-form-item>
              <el-form-item prop="confirmPassword">
                <label class="col-sm-3 control-label">再次确认：</label>
                <div class="col-sm-8">
                  <el-input type="password" v-model="ruleForm.confirmPassword" />
                  <span class="help-block m-b-none"><i class="fa fa-info-circle"></i> 请再次输入您的密码</span>
                </div>
              </el-form-item>
            </div>

          </el-form>
        </div>
      </div>


</template>
</el-dialog>
<script>
  import '../../../../../static/css/font-awesome.min.css';
  import '../../../../../static/css/bootstrap.min.css';
  import '../../../../../static/css/main/animate.min.css';
  import '../../../../../static/css/main/style.min862f.css';
  export default {
    // name:'ResetPwd',
    data() {
      return {
        dialogTableVisible: false,
        dialogFormVisible: false,
        form:{
          delivery: false,
        },
        formLabelWidth: '120px',
        ruleForm: {
          userId: '',
          oldPassword: '',
          newPassword: '',
          confirmPassword: ''
        },
        rules: {
          // pass: [
          //   { validator: validatePass, trigger: 'blur' }
          // ],
          // checkPass: [
          //   { validator: validatePass2, trigger: 'blur' }
          // ],
          // age: [
          //   { validator: checkAge, trigger: 'blur' }
          // ]
        }
      };
    }

  }
</script>

<style>
</style>
