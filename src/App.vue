<template>
  <v-app id="app">
    <router-view name="headbar"></router-view>
    <router-view/>
  </v-app>
</template>

<style lang="scss">
@import './assets/styles/_variables.scss';

#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 // background-color: #06040e;
  background-color: $primary-color;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
