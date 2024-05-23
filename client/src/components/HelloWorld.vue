<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header text-center">
            <h3>Authentication</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="email" class="form-control" id="email" required>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="password" class="form-control" id="password" required>
              </div>
              <button type="submit" class="btn btn-primary btn-block">Login</button>
            </form>
            <div class="mt-3 text-center">
              <router-link to="/register" class="btn btn-secondary btn-sm mr-2">Register</router-link>
              <router-link to="/reset-password" class="btn btn-info btn-sm">Forgot Password</router-link>
            </div>
            <div class="mt-3 text-center">
              <router-link to="/admin" class="btn btn-warning btn-sm">Admin Login</router-link>
            </div>
          </div>
        </div>
        <button @click="goBack" class="btn btn-link mt-3">Back</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Implement login logic
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
