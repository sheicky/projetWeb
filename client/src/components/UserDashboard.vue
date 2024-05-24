<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Eboutique</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Produit</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">Panier</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Connexion</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Inscription</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <header class="jumbotron text-center">
      <h1 class="display-4">C'est votre boutique, votre chez-vous.</h1>
      <button class="btn btn-primary btn-lg">Naviguer <i class="fas fa-paper-plane"></i></button>
    </header>

    <section class="main container">
      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <div class="card mb-4 shadow-sm">
            <img :src="product.image" :alt="product.name" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button @click="addToCart(product)" class="btn btn-sm btn-outline-secondary">Ajouter au panier</button>
                </div>
                <small class="text-muted">{{ product.price }}$</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="video mb-5">
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/2COSkxxOtXY" frameborder="0" allowfullscreen></iframe>
      </div>
    </section>

    <footer class="footer bg-dark text-white text-center py-3">
      <p>&copy; Contactez-nous au 06 98 87 82 00</p>
      <div class="social-media">
        <p><i class="fab fa-facebook-f"></i></p>
        <p><i class="fab fa-twitter"></i></p>
        <p><i class="fab fa-instagram"></i></p>
        <p><i class="fab fa-linkedin-in"></i></p>
      </div>
    </footer>

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
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Short Nike',
          description: 'Short moulant pour homme',
          price: 199,
          image: require('@/assets/short-nike.jpg')
        },
        {
          id: 2,
          name: 'Paire de chaussures stylées',
          description: 'Des paires de chaussures stylées pour femme',
          price: 69,
          image: require('@/assets/chaussures-stylées.jpg')
        },
        {
          id: 3,
          name: 'Short pour courir',
          description: 'Sport pour courir en plein air pour homme',
          price: 39,
          image: require('@/assets/short-courir.jpg')
        }
      ]
    };
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product);
    },
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
/* Ajoutez vos styles ici */
.container {
  margin-top: 100px;
}
.jumbotron {
  background-color: #f8f9fa;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 20px;
  width: 300px;
}
.card img {
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.card-body {
  padding: 10px;
}
.video {
  margin: 20px 0;
}
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
}
footer .social-media p {
  display: inline-block;
  margin: 0 10px;
  font-size: 20px;
}
footer .social-media p i {
  margin-right: 5px;
}
</style>
