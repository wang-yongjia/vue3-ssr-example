<template>
  <div class="app" style="border: 1px solid blue; margin: 20px">
    <h5>about</h5>
    <div>about count: {{ count }}</div>
    <button @click="addNumber">+1</button>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useHomeStore } from "../store/home";
const homeStore = useHomeStore();
const { count } = storeToRefs(homeStore);
function addNumber() {
  homeStore.increment();
}
</script>
