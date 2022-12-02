<template>
  <div>
    <div class="topnavAndBanner">
   <Topnav />
  <div class="banner">
    <h1>Pilot UI</h1>
    <h2>一个深蓝主题的UI框架</h2>
    <p class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">开始</router-link>
    </p>
  </div>
    </div>
    <div class="features">
      <svg class="icon">
    <use xlink:href="#icon-Vue"></use>
</svg>
<svg class="icon">
    <use xlink:href="#icon-ts"></use>
</svg>
<svg class="icon">
    <use xlink:href="#icon-light"></use>
</svg>
    </div>
 
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
components: { Topnav },
};
</script>
<style lang="scss" scoped>
$green:#070f26;
$border-radius:4px;
.topnavAndBanner{
  background: linear-gradient(145deg, rgba(7,36,94,1) 0%, rgba(2,19,50,1) 100%);
clip-path:ellipse(80% 60% at 50% 40%)

}
.features {
>svg {
width: 64px;
height:64px;
}
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #070f26;
      display: inline-block;
      padding:0 26px;
      border-radius: $border-radius;
      &:hover{
        text-decoration: none;
      }
    }
  }
}
 </style> 