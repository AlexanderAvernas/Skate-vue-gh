<script></script>

<template>
  <div id="container-hero">
    <img src="../assets/img/ImageHero.png" class="img-fluid" alt="Skateboard" />
    <div class="hero-text">
      <h1>
        We are <br />
        all <br />
        about Skateboards
      </h1>
    </div>
  </div>
</template>

<style scoped>
.img-fluid {
  height: 50vh;
}

#container-hero {
  position: relative;
  margin: 0 auto;
  height: 50vh;
  overflow-x: hidden;
}
.hero-text {
  position: absolute;
  top: 45%;
  transform: translate(-50%, -55%);
  left: 50%;
  text-align: center;
  color: rgb(255, 255, 255);
}

@media screen and (min-width: 690px) {
  .img-fluid {
    height: auto;
  }

  #container-hero {
    position: relative;
    margin: 0 auto;
    height: auto;
    overflow-x: hidden;
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
