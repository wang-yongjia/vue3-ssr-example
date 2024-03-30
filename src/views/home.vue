<template>
  <div class="home" style="border: 1px solid green; margin: 20px">
    <div>home count: {{ count }}</div>
    <button @click="addNumber">+1</button>
    <button @click="getHomeInfo">getHomeInfo</button>
    {{ homeData }}
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useHomeStore } from "../store/home";
const homeStore = useHomeStore();
const { count, homeData } = storeToRefs(homeStore);
function addNumber() {
  homeStore.increment(1);
}
function getHomeInfo() {
  homeStore.fetchHomeData();
}
</script>
