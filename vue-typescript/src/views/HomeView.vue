<template>
  <div class="home">
    <LoginComponent msg="Login please"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginComponent from '@/components/LoginCompo.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    LoginComponent,
  },
});
</script>
