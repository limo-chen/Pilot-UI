<template>

<router-view />
</template>

<script lang="ts">
import { provide, ref } from 'vue';


export default {
  name: 'App',
  setup(){
    const menuVisible = ref(false)//声明一个变量
    provide('menuVisible',menuVisible) //标记为所有后代都可以使用
  }
}
</script>
