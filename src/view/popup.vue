<template>
  <div class="main_app">
    <button @click="startActivity">Start Activity</button>
  </div>
</template>

<script setup lang="ts">
const startActivity = () => {
  chrome.runtime.sendMessage({ action: 'start_activity'})
}

</script>

<style>
body {
  width: 200px;
  height: 100px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
