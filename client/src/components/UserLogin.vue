<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header text-center">
            <h3>Connexion</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="loginUser">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="email" class="form-control" id="email" required>
              </div>
              <div class="form-group">
                <label for="password">Mot de passe</label>
                <input type="password" v-model="password" class="form-control" id="password" required>
              </div>
              <button type="submit" class="btn btn-primary btn-block">Se connecter</button>
            </form>
            <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
            <div class="mt-3 text-center">
              <router-link to="/forgot-password" class="btn btn-link">Mot de passe oublié?</router-link>
            </div>
          </div>
        </div>
        <button @click="goBack" class="btn btn-link mt-3">Retour</button>
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
        this.$router.push('/dashboard');
      } catch (err) {
        this.error = 'Identifiants invalides';
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
