<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="input-group">
      <input
        type="search"
        v-model="searchQuery"
        class="form-control border-end-0"
        placeholder="City or Zip Code..."
      />
      <button class="btn btn-primary border-start-0" @click="handleSearch">Search</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getWeatherByCity, getWeatherByZip } from '@/services/weatherService';

const searchQuery = ref('');
const handleSearch = async () => {
  let weatherData;
  try {
    if (/^\d{5}$/.test(searchQuery.value)) {
      weatherData = await getWeatherByZip(searchQuery.value);
    } else {
      weatherData = await getWeatherByCity(searchQuery.value);
    }
    console.log(weatherData);
  } catch (err) {
    console.error('Error getting weather', err);
  }
};
</script>

<style scoped></style>
