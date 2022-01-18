<template>
  <div class="welcome">
  
    <h1>{{ msg }}</h1>
<h2 v=once>{{title}}</h2>
      <form  v-if="notLoggedIn" >
      <input v-model="username" placeholder="username">
      <span class="required">required</span>
      <input v-model="password" placeholder="password" type="password">
       <span class="required">required</span><br>
      <button @click.prevent="login" class="button btn-block"> LOG IN </button><br>
      <button class="button btn-block" v-bind:disabled="isUserRegisteredDisabled"> <span v-bind:title="registerMessage"> Sign Up</span> </button>
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
      msg:"WELCOME TO MY FIRST VUE APP AND LETS GET STARTED",
      isUserRegisteredDisabled:false,
    };
  },
   methods: {
    login() {
        if(this.username==""){
            alert("username is required");
            return;
        }else if(this.password==""){
            alert("password is required");
            return
            }
            else{
      alert('YOU HAVE BEEN LOGGED IN');
      }
      }
  }
};
 
   
</script>


<style>
.required{
color:red;
}
input{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
body   {
  margin:50px;
  padding: 30px;
  border-radius: 5px;
  margin-top: 5%;
}

.button{
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  font-size:20px;
}
.btn-block{
width:80%;
}
.btn-danger{
background-color:red;
margin-left:10px;
}

.button:hover {
  background-color: #07cdff;
}
form{
max-width:600px;
margin: auto;
}

td, th {
  border: 1px solid #ddd;
  padding: 8px;
}
table{
width:100%;
}
 tr:nth-child(even){background-color: #f2f2f2;}

 tr:hover {background-color: rgb(139, 144, 130);}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
@media screen and (max-width: 600px) {
 
  form{
width:100%;
margin:5px;
}
body   {
  margin:10px;
  border-radius: 5px;
  margin-top: 5%;
}
#app > div.welcome > h1{
width:100%;
}
}
 



</style>