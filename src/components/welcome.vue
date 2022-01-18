<template>
  <div class="welcome">
  //text interpolation
    <h1>{{ msg }}</h1>
    //does not update on data change
<h2 v=once>{{title}}</h2>
      <form  v-if="notLoggedIn" @submit.prevent="login">
      <input v-model="username" placeholder="username">
      <input v-model="password" placeholder="password" type="password">
      <input  type="submit" value="log in">
      <button v-bind:disabled="isUserRegisteredDisabled"> <span v-bind:title="registerMessage"> Sign Up</span> </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'welcome',
 
   data() {
    return {
      username: "",
      password: "",
      notLoggedIn:true,
      title:"LOGIN BELOW",
      registerMessage:"Please sign up to register your details",
      msg:"",
      isUserRegisteredDisabled:false
    };
  },
   methods: {
    login() {
      alert('YOU HAVE BEEN LOGGED IN');
      }
  }
};
 
   
</script>


<style scoped>

</style>