<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/congradulations.gif">
    <welcome msg="Welcome to My first Vue App"/>
    <schedule />
  </div>
</template>

<script>
import welcome from './components/welcome.vue'
import schedule from './components/schedule.vue'
export default {
  name: 'App',
  components: {
    welcome,
    schedule
  }
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
