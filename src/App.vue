<template>
<div>导航栏 | 
<router-link to="/">Limo</router-link> |
<router-link to="/xxx">Limo2</router-link>

</div>
<hr/>

<router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>
