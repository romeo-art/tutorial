<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#" id="title">Kat-On</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-on:click="redirect('/Login')">Login</b-nav-item>
        <b-nav-item @click="redirect('/Register')" >Register</b-nav-item>
        <b-nav-item @click="redirect('/Logout')" >Logout</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<style scoped lang="scss">
    @import '~assets/styles.scss';
    #title{
      color:$primary !important;
    }
</style>
<script>
import Router from 'router'
export default  {
    methods: {
        redirect(route){
            Router.push(route)
        }
    }
}
</script>