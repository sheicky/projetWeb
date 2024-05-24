<template>
  <div>
    <header class="bg-primary text-white text-center py-5">
      <h1>Bienvenue à Eboutique</h1>
      <p>Connectez-vous pour commencer vos achats!</p>
    </header>

    <div class="container my-5">
      <div class="row">
        <div class="col-md-6">
          <router-link to="/login" class="btn btn-success btn-lg btn-block">Se connecter</router-link>
        </div>
        <div class="col-md-6">
          <router-link to="/register" class="btn btn-info btn-lg btn-block">S'inscrire</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
};
</script>

<style scoped>
header {
  background: url('https://example.com/background.jpg') no-repeat center center;
  background-size: cover;
  height: 300px;
}
</style>
