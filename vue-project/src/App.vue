<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">首页</router-link> |
        <router-link to="/about">关于我们</router-link>|
        <router-link to="/login">登录</router-link> |
        <router-link to="/register">注册</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <p>&copy; 2024 我的应用</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  // 这里可以添加任何你需要的数据或方法
  data() {
    return {
      // 示例数据
      message: '欢迎来到我的 Vue.js 应用！'
    };
  },
  methods: {
    // 示例方法
    greet() {
      alert('Hello!');
    }
  },
  // 生命周期钩子等
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  background: #333;
  color: white;
  padding: 10px 20px;
}

nav a {
  color: white;
  text-decoration: none;
  margin-right: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

main {
  padding: 20px;
}

footer {
  background: #333;
  color: white;
  padding: 10px 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
