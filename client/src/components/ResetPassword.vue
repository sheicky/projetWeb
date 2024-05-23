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
                <label for="password">New Password</label>
                <input
                  type="password"
                  v-model="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter new password"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary btn-block">Reset Password</button>
            </form>
            <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
            <div v-if="message" class="alert alert-success mt-3">{{ message }}</div>
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
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 100px;
}
.card-header {
  background-color: #007bff;
  color: white;
}
</style>
