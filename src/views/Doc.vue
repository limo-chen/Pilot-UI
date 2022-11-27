<template>
   <div>
    <Topnav />
    <div class="topnav"></div>
        <div class="logo"></div>
        <div class="menu"></div>
   </div>

    <div class="content">
      <aside>边栏</aside>
<main>主内容</main>
</div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
 export default{
    components:{Topnav}
 }
</script> 