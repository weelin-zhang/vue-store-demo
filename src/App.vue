<template>
  <div id="app">
    <h1>测试vuex-模块化</h1>
    <ul>
      <li>
        <router-link to="/" tag="li">全局状态测试</router-link>
      </li>
      <li>
    <router-link to="/goods" tag="li">模块化状态测试-goods</router-link>
      </li>
    </ul>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul li{
  list-style: none;
  display: inline-block;
  padding: 5px;
  text-decoration: none;
}
ul li:hover{
  color: red;
}
</style>
