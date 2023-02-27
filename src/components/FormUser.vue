<template>
  <div class="newsletter-heading">
    <h1>Subscribe to our newsletter</h1>
  </div>
  <div class="form-container">
    <div class="form-cover">
      <div class="text-name">
        <h6>
          We send it to <strong> {{ fullname }} </strong>
        </h6>
      </div>

      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Name: {{ first }} </label>
          <input
            type="text"
            v-model="first"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Name"
          />
        </div>
        <div class="form-group">
          <label class="sr-only" for="inlineFormInputGroup"
            >Email: {{ last }}</label
          >
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">@</div>
            </div>
            <input
              type="text"
              v-model="last"
              class="form-control"
              id="inlineFormInputGroup"
              placeholder="email"
            />
          </div>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >I want emails with new products</label
          >
        </div>
        <button type="submit" class="primary-button">Submit</button>
      </form>
    </div>
  </div>

  <div class="range-form-container">
    <h3>How do you like our website?</h3>
  </div>
  <div class="range-container">
    <input
      type="range"
      class="form-range"
      min="0"
      max="5"
      step="1"
      id="customRange3"
      v-model="volume"
    />
  </div>
  <div class="number">
    <h3>{{ volume }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first: "",
      last: "",
      volume: 0,
    };
  },
  computed: {
    fullname: function () {
      return this.first + "@" + "" + this.last;
    },
  },
  methods: {
    updateVolume(e) {
      this.volume = e.target.value;
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 5vh;
}

.newsletter-heading {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
}

.text-name {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
}
.text-name strong {
  color: rgb(255, 255, 255);
  font-size: larger;
}
.form-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-cover {
  border-radius: 1em;
  background-image: url(../assets/img/boyskate.jpg);
  height: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 90%;
  height: 100%;
  margin-top: 0rem;
}

.form-group {
  margin: 0.5em 1em;
}

.primary-button {
  margin: 0.5em;
}

label {
  color: white;
  font-weight: 500;
}

.range-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  margin-bottom: 5vh;
}
.range-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-range {
  width: 50%;
}

.range-container > h5 {
  margin-left: 2vw;
}

.number {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2vh;
}

@media screen and (min-width: 690px) {
  .newsletter-heading {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
  }

  .text-name {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em;
  }
  .text-name strong {
    color: rgb(255, 255, 255);
    font-size: larger;
  }
  .form-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form-cover {
    border-radius: 1em;
    background-image: url(../assets/img/boyskate.jpg);
    height: 70vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 50%;
    height: 100%;
    margin-top: 0rem;
  }

  .form-group {
    margin: 0.5em 5em;
  }

  .primary-button {
    margin: 1em;
  }

  label {
    color: white;
    font-weight: 600;
  }
}
</style>
