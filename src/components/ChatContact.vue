<script setup>
import { ref } from "vue";

const chatContainer = ref(false);
const message = ref("");
const returnMessage = ref("");

const addMessage = () => {
  if (message.value.length > 0) {
    return (returnMessage.value = "Thanks, we contact you as soon as possible");
  } else {
    return (returnMessage.value = "Please write your question");
  }
};
</script>

<template>
  <main>
    <div v-if="chatContainer" class="overlay">
      <div class="modal">
        <textarea
          v-model.trim="message"
          name="note"
          id="note"
          cols="30"
          rows="10"
        ></textarea>
        <p v-if="returnMessage">{{ returnMessage }}</p>
        <button class="primary-button" @click="addMessage">Send message</button>
        <button @click="chatContainer = false" class="primary-button close">
          Close
        </button>
      </div>
    </div>
    <div class="container">
      <header>
        <button @click="chatContainer = true">Chatt</button>
      </header>
    </div>
  </main>
</template>

<style scoped>
main {
  margin-top: 5vh;
  height: 5vh;
  width: 5vw;
}

.container {
  max-width: 100px;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;
}

header button {
  position: relative;
  bottom: 2%;
  right: 2%;
  border: none;
  padding: 10px;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  background-color: rgb(220, 162, 1);
  border-radius: 100%;
  /* border: 1.5px solid black; */
  color: rgb(0, 0, 0);
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 20rem;
  height: 20rem;
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
}

.primary-button {
  border: 2px solid black;
  margin-top: 5px;
}

.modal .close {
  background-color: rgb(189, 182, 182);
  margin-top: 7px;
}

p {
  color: rgb(0, 0, 0);
  font-size: large;
  font-weight: 700;
}
</style>
