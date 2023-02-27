<script setup>
import SkateBoards from "../components/SkateBoards.vue";
import ShoppingCart from "../components/ShoppingCart.vue";
import AboutHeroImage from "../components/AboutHeroImage.vue";
</script>

<template>
  <shopping-cart />
  <about-hero-image />

  <h1 class="title">{{ message }}</h1>
  <div class="skateboards">
    <div class="container text-center">
      <div class="row align-items-start">
        <skate-boards
          v-for="board in boards"
          :key="board.id"
          :products="board"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "New Arrivals, spring 2023",
      boards: [],
    };
  },
  components: { "skate-boards": SkateBoards },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await fetch("arrivals.json");
      const result = await res.json();
      this.boards = result;
    },
  },
};
</script>

<style scoped>
.skateboards {
  display: flex;
  justify-content: center;
  margin-top: 10vh;
  margin-bottom: 10vh;
}

.title,
h1 {
  text-align: center;
  margin-top: 10vh;
}
</style>

<style></style>
