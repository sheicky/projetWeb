<template>
  <div id="app">
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#">zOdO</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Acceuil</b-nav-item>
          <b-nav-item to="/products">Produit</b-nav-item>
          <b-nav-item to="/cart">Panier</b-nav-item>
          <b-nav-item to="/login">Connexion</b-nav-item>
          <b-nav-item to="/register">Inscription</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view @add-to-cart="addToCart" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      cartItems: []
    };
  },
  methods: {
    addToCart(item) {
      const cartItem = this.cartItems.find(cartItem => cartItem.id === item.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cartItems.push({ ...item, quantity: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  },
  created() {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
      this.cartItems = savedCartItems;
    }
  }
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
}
</style>
