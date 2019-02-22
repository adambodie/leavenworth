<template>
  <div id="app">
    <Header />
    <Card />
  </div>
</template>

<script>
import Header from './components/Header'
import Card from './components/Card'

export default {
  name: 'app',
  components: {
    Card,
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
