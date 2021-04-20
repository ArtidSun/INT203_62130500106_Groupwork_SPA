<template>
  <div class="bg-gray-600" id="nav">
    <router-link to="/">Home</router-link> &nbsp;
    <router-link to="/profile">Profile</router-link> &nbsp;
    <router-link to="/heros">Heros</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #bc2500;
}
</style>
