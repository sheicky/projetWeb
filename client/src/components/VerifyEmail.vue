<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header text-center">
            <h3>Verify Email</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="verifyEmail">
              <div class="form-group">
                <label for="token">Verification Token</label>
                <input type="text" v-model="token" class="form-control" id="token" placeholder="Verification Token" required>
              </div>
              <button type="submit" class="btn btn-primary btn-block">Verify</button>
            </form>
            <p v-if="error" class="text-danger mt-3">{{ error }}</p>
            <p v-if="message" class="text-success mt-3">{{ message }}</p>
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
      token: '',
      error: '',
      message: ''
    };
  },
  methods: {
    async verifyEmail() {
      try {
        await axios.post('http://localhost:5000/api/auth/verify-email', {
          token: this.token
        });
        this.message = 'Email verified successfully';
        setTimeout(() => {
          this.$router.push('/login');
        }, 2000);
      } catch (err) {
        this.error = 'Invalid or expired token';
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
