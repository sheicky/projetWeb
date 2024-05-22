<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async login() {
      try {
        const res = await axios.post('http://localhost:5000/api/auth/login', {
          email: this.email,
          password: this.password
        });
        this.$store.dispatch('loginUser', res.data);
        if (res.data.role === 'admin') {
          this.$router.push('/admin');
        } else {
          this.$router.push('/user');
        }
      } catch (err) {
        this.error = 'Invalid email or password';
      }
    }
  }
};
</script>
