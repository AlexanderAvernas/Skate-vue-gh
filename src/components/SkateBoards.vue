<template>
  <div class="col">
    <div class="card" style="width: 18rem">
      <img :src="products.img" class="card-img-top" alt="Skateboard" />
      <div class="card-body">
        <h5 class="card-title">{{ products.name }}</h5>
        <p class="card-text">
          {{ products.price }}
        </p>
        <a href="#" class="primary-button">Preorder</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      required: true,
      type: Object,
    },
  },
};
</script>
<style scoped>
.col {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
}
</style>
