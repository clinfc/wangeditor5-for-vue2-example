<template>
  <el-container class="main">
    <el-aside width="220px" class="main_aside">
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-active="$route.path"
        router
      >
        <template v-for="menu in menus">
          <el-menu-item :key="menu.path" :index="menu.path">
            <span slot="title">{{ menu.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>
    <el-main class="main_content">
      <div class="main_content-main">
        <h2>{{ title }}</h2>
        <u-scroll scroll-x scroll-y>
          <router-view />
        </u-scroll>
      </div>
    </el-main>
    <u-tools />
  </el-container>
</template>

<script>
  import UScroll from './components/u-scroll.vue'
  import UTools from './components/u-tools.vue'
  import { Menus } from './router/index.js'
  export default {
    components: { UScroll, UTools },
    data() {
      return {
        menus: [...Menus],
      }
    },
    computed: {
      title() {
        return Menus.find((item) => item.path == this.$route.path).title
      },
    },
  }
</script>

<style lang="scss">
  body {
    padding: 0;
    margin: 0;
  }
  .main {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;
    &_aside {
      height: 100%;
      .el-menu {
        height: 100%;
      }
    }
    &_content {
      flex-grow: 1;
      height: 100%;
      overflow: hidden;
      &-main {
        width: 800px;
        height: 100%;
        margin: auto;
        overflow: hidden;
        h2 {
          border-bottom: 1px solid #ccc;
          padding-bottom: 10px;
          margin-top: 0;
          margin-bottom: 30px;
          color: #999;
        }
      }
    }
  }
  .editor {
    border: 1px solid #e5e5e5;
    &-toolbar {
      border-bottom: 1px solid #e5e5e5;
    }
    &-editable {
      height: 300px;
    }
  }
</style>
