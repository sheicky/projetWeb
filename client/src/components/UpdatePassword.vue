<template>
  <div>
    <h1>Update Password</h1>
    <form @submit.prevent="updatePassword">
      <input type="password" v-model="oldPassword" placeholder="Current Password" required>
      <input type="password" v-model="newPassword" placeholder="New Password" required>
      <button type="submit">Update Password</button>
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
      oldPassword: '',
      newPassword: '',
      error: '',
      message: ''
    };
  },
  methods: {
    async updatePassword() {
      try {
        await axios.post('http://localhost:5000/api/auth/update-password', {
          oldPassword: this.oldPassword,
          newPassword: this.newPassword
        });
        this.message = 'Password updated successfully';
        this.error = ''; // Clear any previous error message
      } catch (err) {
        this.error = 'Failed to update password';
        this.message = ''; // Clear any previous success message
      }
    }
  }
};
</script>
