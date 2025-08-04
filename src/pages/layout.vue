<template>
  <div class="index">
    <el-container>
      <el-header>
        <el-row class="appbar" justify="space-between">
          <el-col :span="8">
            <router-link to="/">
              <img class="logo" src="../assets/images/logo-ui.svg" />
            </router-link>
          </el-col>
          <el-col :span="16" class="content">
            <ul class="nav hidden-xs-only">
              <el-link type="primary" class="primary-a" href="./">Home</el-link>
              <el-dropdown @command="changeLang">
                <span class="el-dropdown-link">
                  <i class="iconfont icon-yuyan white"></i>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item command="zh-CN">中文</el-dropdown-item>
                    <el-dropdown-item command="en-US">English</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </ul>
            <span
              @click="drawer = true"
              class="hidden-sm-and-up iconfont menu white"
            >
              <i class="iconfont icon-menu"></i>
            </span>
          </el-col>
        </el-row>
      </el-header>

      <el-drawer
        size="60%"
        custom-class="drawer"
        title="nav"
        v-model="drawer"
        :with-header="false"
      >
        <img class="logo" src="../assets/images/logo-ui.svg" />
        <el-divider />
        <el-dropdown @command="changeLang">
          <span class="el-dropdown-link">
            <i class="iconfont icon-yuyan"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="zh-CN">中文</el-dropdown-item>
              <el-dropdown-item command="en-US">English</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-drawer>

      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <div class="footer-content">
          <div>
            <img src="../assets/images/logo-ui.svg" />
            <p class="text-second">© 2024-2024 ETH100</p>
            <div class="icon-buttons hidden-xs-only">
              <a href="https://x.com/ETH100_wtf" target="_blank">
                <el-button class="iconfont" type="primary" circle>&#xe600;</el-button>
              </a>
              <a href="https://github.com/ETH-100" target="_blank">
                <el-button class="iconfont" type="primary" circle>&#xe691;</el-button>
              </a>
            </div>
          </div>
          <div class="footer-right">
            <div class="footer-nav hidden-xs-only">
              <span class="footer-nav-title">Home</span>
            </div>
            <div class="icon-buttons hidden-sm-and-up">
              <a href="https://x.com/ETH100_wtf" target="_blank">
                <el-button class="iconfont" type="primary" circle>&#xe600;</el-button>
              </a>
              <a href="ttps://github.com/ETH-100" target="_blank">
                <el-button class="iconfont" type="primary" circle>&#xe691;</el-button>
              </a>
            </div>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import localstorage from "@/util/localstorage";

const { t, locale, messages } = useI18n()
const drawer = ref(false)

const changeLang = (language: string) => {
  locale.value = language
  localstorage.set("language", language, 0)
}

onMounted(() => {
  let navLanguage = localstorage.fetch("language") || navigator.language
  if (!messages.value[navLanguage]) navLanguage = 'en'
  locale.value = navLanguage
})
</script>

<style lang="less">

body {
  margin: 0;
  background-color: #7153e7;
}
.el-header {
  background-color: #f9faff;
}
.el-footer {
  background-color: #eefdff;
  background-image: linear-gradient(119deg, #eefdff 0%, #fbf7ff 99%);
  height: auto !important;
  padding: 20px;
  .footer-content {
    display: flex;
    justify-content: space-between;
    max-width: 1024px;
    margin: auto;
    .footer-nav {
      display: flex;
      flex-flow: column;
      text-align: left;
      .footer-nav-title {
        margin-bottom: 20px;
        font-weight: bold;
      }
      a,
      span {
        text-align: left;
        margin-top: 5px;
        justify-content: left;
      }
    }
    img {
      width: 120px;
    }
  }

  .icon-buttons {
    margin-top: 30px;
  }
}
.t1 {
  font-size: 3em;
  font-weight: bold;
}

.regular-text {
  color: #606266;
}

.t2 {
  font-size: 2em;
  font-weight: bold;
  text-align: center;
}

.t3 {
  font-size: 1.5em;
}

.t4 {
  font-size: 1.2em;
}

.el-button--text {
  span {
    color: #303133;
  }
}
.index {
  width: 100%;
  .appbar {
    width: 100%;
    height: 5em;
    padding: 2em 0;
    .content {
      text-align: right;
      span {
        margin: auto 1em;
      }
    }
    .menu {
      .iconfont {
        font-size: 20px;
      }
    }
    .nav {
      display: flex;
      justify-content: flex-end;
      a {
        font-size: 18px;
        line-height: 26px;
        color: #fff;
      }
    }
  }
  .el-drawer__body {
    background-color: #15043b;
    text-align: right;
    a {
      font-size: 26px;
      margin-right: 15px;
      color: #fff;
    }
    img {
      margin: 15px 15px 25px auto;
    }
    .el-dropdown {
      margin-right: 15px;
    }
  }
  .pioneer {
    text-align: center;
    overflow: hidden;
    .title {
      color: #fff;
      margin-top: 2em;
      background: url(../assets/images/line.svg) no-repeat center center;
      background-size: 400px;
    }
  }

  .ide {
    width: 100%;
    text-align: center;
    .title {
      p:nth-child(1) {
        margin-top: 3em;
        text-shadow: 5px 3px 1px #fb6c84;
      }
      p:nth-child(2) {
        margin-top: -1em;
      }
    }
    .ide-bg {
      margin: auto;
      .el-card {
        margin: 0.2em;
      }
      p {
        white-space: nowrap;
      }
    }
    .el-card__body {
      p:nth-child(1) {
        font-size: 2em;
        line-height: 1em;
        margin: 0;
      }
    }
  }
}
</style>
<style lang="scss">
@use "sass:math";

@font-face {
  font-family: "ColorTube";
  src: url(../assets/css/ColorTube-2.otf);
}

.ColorTube {
  font-family: "ColorTube";
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.title {
  p:nth-child(1) {
    margin-top: 3em;
  }
  p:nth-child(2) {
    margin-top: -1em;
  }
}

.primary {
  color: #002fda;
}

.logo {
  height: 40px;
  width: auto;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8));
}
.el-header {
  background-color: transparent !important;
}
.fault-text {
  position: relative;
  color: #0322db;
  &::after,
  &::before {
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    background-color: #fff;
    clip: rect(0, 900px, 0, 0);
    color: #0322db;
    content: attr(data-text);
    animation: shake 3s linear infinite alternate-reverse;
  }
  &::before {
    left: -1px;
    text-shadow: 2px 0 #f85305;
  }
  &::after {
    left: 1px;
    text-shadow: -2px 0 #f66;
    animation-duration: 2s;
  }
}

@keyframes shake {
  $steps: 20;
  @for $i from 0 through $steps {
    #{math.percentage(math.div($i, $steps))} {
      clip: rect(
        #{math.random() * 100}px,
        9999px,
        #{math.random() * 100}px,
        0
      );
    }
  }
}

.el-main {
  margin: -60px 0 0 0;
  padding: 0 !important;
}
</style>
