<template>
    <form class="custom-form">
      <div class="form-group">
        <label>Username</label>
        <input
          v-model="form.username"
          class="form-control"
          placeholder="Username"
          required
        />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          v-model="form.password"
          class="form-control"
          type="password"
          placeholder="Password"
          required
        />
      </div>
      <div class="text-danger my-2">error</div>
      <div class="d-flex justify-content-center my-2">
        <button class="btn btn-success btn-block mr-2" type="submit">Login</button>
        <button class="btn btn-primary btn-block ml-2" type="button" @click="onRegisterClick">Register</button>
      </div>
    </form>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive } from 'vue'
  import { useRouter } from 'vue-router'
 
  
  export default defineComponent({
    name: 'LoginComponent',
    setup() {
      const form = reactive({
        username: '',
        password: '',
      })
  
  
      const onSubmit = () => {
  
        form.username = ''
        form.password = ''
      }
      
      const onRegisterClick = () => {
        //router.push('/register') // redirige vers la page '/register'
      }
  
      return { form, onSubmit, onRegisterClick }
    },
  })
  </script>
  
  <style scoped>
  .custom-form {
    max-width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-control {
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  
  .text-danger {
    color: red;
  }
  
  .btn-block {
    display: block;
    width: 100%;
  }
  </style>