<template>   
  <div id="app">
    <SampleHeader />
    <Form></Form>
    <Appbody></Appbody>
    <Login></Login>
  </div>
</template>

<script>
import SampleHeader from './components/frame/Header.vue'
// import Form from './components/Form.vue'
import Appbody from '.components/frame/Body.vue'
// import Login from './modules/Login.vue'
export default {
  name: 'app',
  components: {
   SampleHeader,
  //  Form,
  Appbody
  // Login
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
  margin-top: 60px;
}
</style>