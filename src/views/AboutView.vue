<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="increase_counter()">Add+</button><br />
    <button @click="decrease_counter()">Sub-</button>
    <div>
      <label>Counter value is:- </label>
      {{ store_value }}
    </div>
    <hr />
    <div>
      <label>Check its odd of even:- </label>
      {{ check }}
    </div>
    <hr />
    <input type="number" v-model="store.counter" />
  </div>
</template>
<script setup>
import { computed } from "vue";
import { Store } from "../store/counter";

const store = Store();
const store_value = computed(() => {
  return store.counter;
});

const increase_counter = () => {
  store.increase();
};
const decrease_counter = () => {
  store.decrease();
};
const check = computed(() => {
  if (store.counter % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
});
</script>
