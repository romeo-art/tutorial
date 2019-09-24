<template>   
  <div id="app">
     <SampleHeader />
    <Form></Form>
    <Appbody></Appbody>
  </div>
</template>

<script>
import SampleHeader from 'components/frame/Header.vue'
import Appbody from 'components/frame/Body.vue'
export default {
  name: 'app',
  components: {
  SampleHeader,
  Appbody
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