<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header text-center">
            <h3>Reset Password</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="resetPassword">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="email" class="form-control" id="email" required>
              </div>
              <div class="form-group">
                <label for="newPassword">New Password</label>
                <input type="password" v-model="newPassword" class="form-control" id="newPassword" required>
              </div>
              <button type="submit" class="btn btn-primary btn-block">Reset Password</button>
            </form>
            <div class="mt-3 text-center">
              <router-link to="/login" class="btn btn-secondary btn-sm">Back to Login</router-link>
            </div>
          </div>
        </div>
        <button @click="goBack" class="btn btn-link mt-3">Back</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      newPassword: '',
      error: '',
      message: ''
    };
  },
  methods: {
    async resetPassword() {
      try {
        await axios.post('http://localhost:5000/api/auth/reset-password', {
          email: this.email,
          newPassword: this.newPassword
        });
        this.message = 'Password reset successful';
        this.$router.push('/login');
      } catch (err) {
        this.error = 'Error resetting password';
      }
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
