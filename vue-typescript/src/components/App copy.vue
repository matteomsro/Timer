<template>
<div><p> {{ name }}</p>
  <button @click="changeName('Lours')">change name</button>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'App',
  components: {
  },
  data(){
    return{
      name: 'Linda'
    }
  },
  methods: {
    changeName(name: string){
      this.name = name
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
