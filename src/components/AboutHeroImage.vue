<script></script>

<template>
  <div id="container-hero">
    <img
      src="../assets/img/skatesunset.jpg"
      class="img-fluid"
      alt="Skateboard"
    />
    <div class="hero-text"></div>
  </div>
</template>

<style scoped>
#container-hero {
  position: relative;
  margin-top: 10vh;
  height: auto;
  overflow-x: hidden;
}

.img-fluid {
  height: 40vh;
}
.hero-text {
  position: absolute;
  top: 45%;
  transform: translate(-50%, -55%);
  left: 50%;
  text-align: center;
  color: rgb(255, 255, 255);
}

@media screen and (min-width: 670px) {
  #container-hero {
    position: relative;
    margin-top: 10vh;
    height: auto;
    overflow-x: hidden;
  }
  .img-fluid {
    height: auto;
  }
  .hero-text {
    position: absolute;
    top: 45%;
    transform: translate(-50%, -55%);
    left: 50%;
    text-align: center;
    color: rgb(255, 255, 255);
  }
}
</style>
