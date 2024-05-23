<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">zOdO</a>
    </nav>
    <div class="container mt-5">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
}
</style>
