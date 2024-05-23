<template>
  <div class="container mt-5">
    <div class="jumbotron">
      <h1 class="display-4">User Dashboard</h1>
      <p class="lead">Welcome to your dashboard!</p>
      <hr class="my-4">
      <p>Manage your account and settings here.</p>
      <button class="btn btn-primary btn-lg" @click="logout">Logout</button>
    </div>
    <button @click="goBack" class="btn btn-link mt-3">Back</button>
  </div>
</template>

<script>
export default {
  name: 'UserDashboard',
  methods: {
    logout() {
      localStorage.removeItem('user');
      this.$router.push('/login');
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
.jumbotron {
  background-color: #f8f9fa;
}
</style>
