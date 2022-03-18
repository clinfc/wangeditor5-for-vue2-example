<template>
  <div class="u-tools">
    <el-tooltip placement="left" content="GitHub" trigger="hover">
      <a :href="base" target="_block">
        <img src="../assets/github.svg" alt="GitHub" />
      </a>
    </el-tooltip>
    <div class="interval" />
    <el-tooltip placement="left" content="当前示例的源文件" trigger="hover">
      <a :href="link" target="_block">
        <img src="../assets/source.svg" alt="GitHub" />
      </a>
    </el-tooltip>
    <div class="interval" />
    <el-tooltip placement="left" content="使用文档" trigger="hover">
      <a :href="docs" target="_block">
        <img src="../assets/docs.svg" alt="Docs" />
      </a>
    </el-tooltip>
  </div>
</template>

<script>
  import { ComponentFiles } from '@/router/index.js'

  export default {
    data() {
      return {
        docs: 'https://clinfc.github.io/wangeditor5-for-vue2/',
        base: `https://github.com/clinfc/wangeditor5-for-vue2-example`,
      }
    },
    computed: {
      link() {
        const path = this.$route.path

        const file = ComponentFiles.get(path)

        return file ? `${this.base}/tree/main${file}` : this.base
      },
    },
  }
</script>

<style lang="scss">
  .u-tools {
    position: fixed;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    padding: 10px;
    box-shadow: 0 2px 12px 0 #e5e5e5;
    border-radius: 3px;
    background-color: #fff;
    a {
      display: block;
      width: 30px;
      height: 30px;
      color: #999;
      padding: 10px;
      border-radius: 3px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .interval {
      border-bottom: 2px solid #efefef;
    }
  }
</style>
