<template>
  <div id="app">
    <ScoreCard/>
  </div>
</template>

<script>
import ScoreCard from './components/ScoreCard.vue'

export default {
  name: 'App',
  components: {
    ScoreCard
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
