<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">FIRSTAPP</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-on:click="redirect('/login')">Login</b-nav-item>
        <b-nav-item @click="register('/register')" >Register</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<style scoped>
    
</style>
<script>
import Router from '../../router'
export default  {
    methods: {
        redirect(route){
            Router.push(route)
        }
    }
}
</script>