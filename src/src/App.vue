<template>
<div id="app">
    <h2>Read Recode</h2>

    <el-menu mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1">
            <router-link to="/">TopHome</router-link>
        </el-menu-item>
        <el-menu-item index="2">
            <router-link to="/search">Search</router-link>
        </el-menu-item>
        <el-submenu index="3">
            <!-- #はv-slotの省略記法 -->
            <template #title>Support</template>
            <el-menu-item index="3-1">
                <a href="#" target="heip">Author</a>
            </el-menu-item>
            <el-menu-item index="3-2">
                <a href="#" target="heip">Publisher</a>
            </el-menu-item>
        </el-submenu>
    </el-menu>

    <router-view />
</div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
