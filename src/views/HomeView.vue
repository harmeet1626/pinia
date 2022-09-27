<template>
  <div class="home">
    <label>This is counter inside store</label>
    {{ count }}
    <input v-model="stores.counter" type="number" />
  </div>
</template>

<script setup>
import { Store } from "../store/counter";
import { computed } from "vue";
const stores = Store();
const count = computed(() => {
  return stores.counter;
});
</script>
