<template>
  <div>
    <h1>Verify Email</h1>
    <form @submit.prevent="verifyEmail">
      <input type="text" v-model="token" placeholder="Verification Token" required>
      <button type="submit">Verify</button>
    </form>
    <p v-if="error">{{ error }}</p>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      token: '',
      error: '',
      message: ''
    };
  },
  methods: {
    async verifyEmail() {
      try {
        await axios.post('http://localhost:5000/api/auth/verify-email', {
          token: this.token
        });
        this.message = 'Email verified successfully';
        this.$router.push('/login');
      } catch (err) {
        this.error = 'Invalid or expired token';
      }
    }
  }
};
</script>
