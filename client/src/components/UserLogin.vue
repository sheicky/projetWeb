<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header text-center">
            <h3>Login</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="loginUser">
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  v-model="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  v-model="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter password"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary btn-block">Login</button>
            </form>
            <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
            <div class="mt-3 text-center">
              <router-link to="/register" class="btn btn-link">Create Account</router-link>
              <router-link to="/forgot-password" class="btn btn-link">Forgot Password?</router-link>
              <router-link to="/admin-login" class="btn btn-link">Admin Login</router-link>
            </div>
          </div>
        </div>
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
      password: '',
      error: ''
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/login', {
          email: this.email,
          password: this.password
        });
        localStorage.setItem('user', JSON.stringify(response.data));
        this.$router.push('/user');
      } catch (err) {
        this.error = 'Invalid credentials';
      }
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
