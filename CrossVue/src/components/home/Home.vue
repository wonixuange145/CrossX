<template>
  <div class="home">
    <div class="gray-bg" style="color: #676A6C">
      <div class="row  border-bottom white-bg dashboard-header">
        <div class="col-sm-12">
          <hr>
        </div>
        <div class="col-sm-5">
          <h2>CrossX</h2>
          <p style="color: #676A6C;">
            <b>当前版本：</b><span>v1.0.0</span>
          </p>
          <br>
        </div>
        <div class="col-sm-4">
          <h4>平台简介：</h4>
          <ol>
            <li><strong>功能板块：智能交通、智慧医疗、检测任务、分类任务、分割任务。</strong></li>
            <li><strong>工作流程：数据管理->自动标注->人工校验->模型训练。</strong></li>
            <li><strong>更多……</strong></li>
          </ol>
        </div>

      </div>
      <!-- <div class="wrapper wrapper-content"> -->
      <div class="row  border-bottom white-bg dashboard-header" style="margin-top: 20px;">
        <div class="col-sm-2">
        </div>
        <div class="col-sm-8">
          <div class="ibox float-e-margins">
            <img src="../../../static/img/introduce.png" alt style="height: auto; width: auto\9; width:100%;">
          </div>
        </div>
        <div class="col-sm-2">
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
  import '../../../static/css/font-awesome.min.css';
  import '../../../static/css/bootstrap.min.css';
  import '../../../static/css/main/animate.min.css';
  import '../../../static/css/main/style.min862f.css';
  export default {

  }
</script>

<style scoped>
  * {
    color: #676A6C;
  }
  .home{
    position: fixed;
    height: 100%;
    width: 100%;
    padding-left: 16px;
    background-color: #F3F3F4 !important;
  }
</style>
