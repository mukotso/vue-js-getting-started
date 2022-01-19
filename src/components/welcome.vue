<template>
<div>
    <div class="welcome main-content">
    <h2 class="font-bold text-sky-400/100">{{ msg }}</h2>
    <!-- <h2 v=once>{{title}}</h2> -->
    <user-login formInfo="LOGIN PAGE"
    @changeTitle="formInfo= 'TITLE CHANGED'"
      />
      </div>


      
</div>
</template>

<script>
import UserLogin from './UserLogin.vue'
export default {
  name: 'welcome',
 
   data() {
    return {
      // title:"LOGIN BELOW",
      msg:"WELCOME TO MY FIRST VUE APP AND LETS GET STARTED",
    };
  },
  components:{
    UserLogin
  }
};
 
   
</script>


<!-- <style>
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
.main-content   {
  margin:50px;
  padding: 30px;
  border-radius: 5px;
}

.button{
  background: rgb(95,221,9);
background: linear-gradient(90deg, rgba(95,221,9,1) 27%, rgba(13,222,174,1) 66%);
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
-->