<template>
  <h1>SKATEBOARDS</h1>
  <div class="cost-container">
    <p>Total: {{ totalPrice }} SEK</p>
    <p>Products: {{ trackCounter }}</p>
  </div>

  <div class="col">
    <div class="card">
      <div class="products-shop" v-for="product in products" :key="product.id">
        <div class="card-body">
          <img :src="product.img" class="card-img-top" alt="Product Image" />
          <h5 class="card-title">{{ product.name }}</h5>
          <h6 class="card-text">{{ product.price }}</h6>
        </div>
        <div class="button-container">
          <button
            class="primary-button"
            @click="
              incrementCounter();
              addToCart(product.id);
            "
          >
            +
          </button>
          <button
            class="primary-button minus"
            @click="
              decrementCounter();
              subtracFromCart(product.id);
            "
          >
            -
          </button>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      totalPrice: 0,
    };
  },
  created() {
    fetch("skate.json")
      .then((response) => response.json())
      .then((products) => {
        this.products = products;
      });
  },
  methods: {
    addToCart(id) {
      const product = this.products.find((product) => product.id === id);
      const price = parseFloat(product.price.replace(/kr|SEK/, ""));
      this.totalPrice += price;
    },
    subtracFromCart(id) {
      const product = this.products.find((product) => product.id === id);
      const price = parseFloat(product.price.replace(/kr|SEK/, ""));
      if (this.totalPrice - price >= 0) {
        this.totalPrice -= price;
      }
    },
    incrementCounter() {
      if (this.$store.getters.getCounter + 1 >= 0) {
        this.$store.dispatch("increment", 1);
      }
    },
    decrementCounter() {
      if (this.$store.getters.getCounter - 1 >= 0) {
        this.$store.dispatch("increment", -1);
      }
    },
  },
  computed: {
    trackCounter() {
      return this.$store.getters.getCounter;
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: rgb(220, 162, 1);
}

.cost-container {
  font-size: medium;
  font-weight: 500;
  border-bottom: 1px solid black;
}

.cost-container p {
  margin: 0;
  margin-left: 0.5em;
}

.col {
  display: flex;
  justify-content: space-evenly;
}
.card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.products-shop {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid black;
  border-radius: 1rem;
  margin: 1rem;
  width: 18rem;
}
.primary-button {
  margin: 0.5em;
}

@media screen and (min-width: 900px) {
  h1 {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 5rem;
  }

  .col {
    display: flex;
    justify-content: space-evenly;
  }
  .card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .products-shop {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: 1px solid black;
    border-radius: 1rem;
    margin: 3rem;
    width: 18rem;
  }
  .primary-button {
    margin-bottom: 1rem;
  }
}
</style>
