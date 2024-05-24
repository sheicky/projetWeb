<template>
  <div class="container mt-5">
    <div class="jumbotron">
      <h1 class="display-4">Admin Dashboard</h1>
      <p class="lead">Welcome to the admin dashboard!</p>
      <hr class="my-4">
      <p>Manage the application settings and users here.</p>
      <button class="btn btn-primary btn-lg" @click="logout">Logout</button>
    </div>
    <button @click="goBack" class="btn btn-link mt-3">Back</button>
    
    <!-- Users Management -->
    <h2>Users Management</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user._id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button class="btn btn-danger" @click="deleteUser(user._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Products Management -->
    <h2>Products Management</h2>
    <div>
      <form @submit.prevent="addProduct">
        <input type="text" v-model="newProduct.name" placeholder="Product Name" required>
        <input type="text" v-model="newProduct.description" placeholder="Product Description" required>
        <input type="number" v-model="newProduct.price" placeholder="Product Price" required>
        <input type="text" v-model="newProduct.image" placeholder="Product Image URL" required>
        <input type="number" v-model="newProduct.stock" placeholder="Product Stock" required>
        <button type="submit" class="btn btn-success">Add Product</button>
      </form>
    </div>
    <table class="table mt-3">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product._id">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>
            <button class="btn btn-danger" @click="deleteProduct(product._id)">Delete</button>
            <button class="btn btn-primary" @click="updateStock(product._id)">Update Stock</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      products: [],
      newProduct: {
        name: '',
        description: '',
        price: '',
        image: '',
        stock: 0
      }
    };
  },
  async created() {
    await this.fetchUsers();
    await this.fetchProducts();
  },
  methods: {
    async fetchUsers() {
      const response = await axios.get('http://localhost:5000/api/users');
      this.users = response.data;
    },
    async fetchProducts() {
      const response = await axios.get('http://localhost:5000/api/products');
      this.products = response.data;
    },
    async deleteUser(userId) {
      await axios.delete(`http://localhost:5000/api/users/${userId}`);
      await this.fetchUsers();
    },
    async addProduct() {
      await axios.post('http://localhost:5000/api/products', this.newProduct);
      await this.fetchProducts();
    },
    async deleteProduct(productId) {
      await axios.delete(`http://localhost:5000/api/products/${productId}`);
      await this.fetchProducts();
    },
    async updateStock(productId) {
      const newStock = prompt('Enter new stock value:');
      await axios.put(`http://localhost:5000/api/products/${productId}`, { stock: newStock });
      await this.fetchProducts();
    },
    logout() {
      localStorage.removeItem('user');
      this.$router.push('/admin/login');
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
