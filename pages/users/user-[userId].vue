<script setup>
definePageMeta({
  layout: "users",
});
const { userId } = useRoute().params;
</script>

<template>
  <div>
    <h1>ID of user: {{ userId }}</h1>

    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
  </div>
</template>

<style>
h1 {
  color: red;
}
</style>
