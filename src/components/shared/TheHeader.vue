<template>
<div class="navigation">

<ul >
  <li class=" mr-2">
    <a class="text-center block text-white-800 bg- py-2 px-4" href="#">
   <slot> </slot>
    </a>
  </li>
</ul>
</div>
   
</template>

<script>


</script>


<style scoped>
.navigation{
background: linear-gradient(0deg, rgba(34,195,34,1) 0%, rgba(199,253,45,1) 100%);
color:white;
font-size:bolder;
width:100%  !important;
padding: 40px;
font-size:30px;
}

</style>
