<template>

<router-view />
</template>

<script lang="ts">
import { provide, ref } from 'vue';


export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 700 ? false : true);
    provide("menuVisible", menuVisible); // set
  },
};
</script>
