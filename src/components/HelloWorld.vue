<template>
  <div class="hello"><br>
  <div class="form"> 
    <div class="form-group"><br>
      <label for="email">Email Address</label>
      <input type="email" icons="fas fa-envelope-open"  class="form-control" id="email" />
    </div>
    <div class="form-group">
      <label for="pwd">Password</label>
      <input type="pwd" icons=" " class="form-control" id="pwd" />
    </div>
    <div class="checkbox">
      <label>
        <input type="checkbox" />Remember me
      </label>
    </div>
    <button type="submit" class="btn btn-default"> Submit</button>
  </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

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
  height: 300px;
  width:250px;
  border-radius: 6px;
  margin-left: 670px;

}
</style>