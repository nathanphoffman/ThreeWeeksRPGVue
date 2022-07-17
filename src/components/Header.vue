<script setup lang="ts">
  import { ref } from 'vue'
  
  //const msg = ref('Joe hello')
</script>

<template>
  <div class="greetings">
    <h1 class="green">Three Weeks RPG</h1>
    <h3>
      The RPG playable in Three Weeks time
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  font-family: 'Lora', serif;
}

h3 {
  font-size: 1.2rem;
  font-family: 'Lora', serif;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
