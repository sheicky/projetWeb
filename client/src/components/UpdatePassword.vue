<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header text-center">
            <h3>Update Password</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="updatePassword">
              <div class="form-group">
                <label for="newPassword">New Password</label>
                <input type="password" v-model="newPassword" class="form-control" id="newPassword" required>
              </div>
              <button type="submit" class="btn btn-primary btn-block">Update Password</button>
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
  name: 'UpdatePassword',
  data() {
    return {
      newPassword: '',
      message: '',
      error: ''
    };
  },
  methods: {
    async updatePassword() {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = user && user.token;

        if (!token) {
          this.error = 'You must be logged in to update your password';
          return;
        }

        await axios.put(
          'http://localhost:5000/api/auth/update-password',
          { password: this.newPassword },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        this.message = 'Password updated successfully';
        this.$router.push('/login');
      } catch (err) {
        this.error = 'Error updating password';
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
