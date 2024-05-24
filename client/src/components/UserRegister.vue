<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header text-center">
            <h3>S'inscrire</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="registerUser">
              <div class="form-group">
                <label for="name">Nom</label>
                <input type="text" v-model="name" class="form-control" id="name" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="email" class="form-control" id="email" required>
              </div>
              <div class="form-group">
                <label for="password">Mot de passe</label>
                <input type="password" v-model="password" class="form-control" id="password" required>
              </div>
              <button type="submit" class="btn btn-primary btn-block">S'inscrire</button>
            </form>
            <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
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
      name: '',
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async registerUser() {
      try {
        await axios.post('http://localhost:5000/api/auth/register', {
          name: this.name,
          email: this.email,
          password: this.password
        });
        this.$router.push('/login');
      } catch (err) {
        this.error = 'Utilisateur existe déjà';
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
