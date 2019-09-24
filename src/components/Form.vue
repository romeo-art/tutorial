<template>
  <div class="hello"><br>
  <div class="form"> 
    <div class="form-group">
      <h4> Login Form</h4>
      <br>
      <label for="email">Email Address</label>
      <input type="email" icons="fas fa-envelope-open"  class="form-control" v-model="email" />
    </div>
    <div class="form-group">
      <label for="pwd">Password</label>
      <input type="password" icons=" "   class="form-control" v-model="pwd" />
    </div>
    <div class="checkbox">
      <label>
        <input type="checkbox" />Remember me
      </label>
    </div>
    <button type="submit" class="btn btn-default" v-on:click='login' > Submit</button>
  </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      email: " ",
      pwd: " "
    };
  },
  methods: {
  }
};
</script>

 <style scoped>
  h3 {
  margin: 40px 0 0;
}

button{
  border: 2px solid red;
  background-color: aqua;
}
.form-group{
  margin-left: 20%;
  margin-right:20%;
 
}
.form{
  border: 3px solid red;
  height: 350px;
  width:250px;
  border-radius: 6px;
  margin-left: 670px;

}
</style>