<template>
  <div>
    <h1>Welcome, Admin</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logoutUser');
      this.$router.push('/login');
    }
  }
};
</script>
