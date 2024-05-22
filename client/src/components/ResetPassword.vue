<template>
  <div>
    <h1>Reset Password</h1>
    <form @submit.prevent="resetPassword">
      <input type="password" v-model="password" placeholder="New Password" required>
      <button type="submit">Reset Password</button>
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
      password: '',
      error: '',
      message: ''
    };
  },
  methods: {
    async resetPassword() {
      try {
        await axios.post(`http://localhost:5000/api/auth/reset-password/${this.$route.params.resetToken}`, {
          password: this.password
        });
        this.message = 'Password reset successful';
        this.$router.push('/login');
      } catch (err) {
        this.error = 'Invalid token or token expired';
      }
    }
  }
};
</script>
