<script setup>
const { data } = await useFetch("/api/example", {
  method: "post",
  body: { name: "Alex", id: 1 },
});
watch(data, () => {
  console.log(data);
});
</script>

<template>
  <div>
    <h1>Home page!</h1>
    <Alert color="primary"> A simple primary alert — check it out! </Alert>
    <Alert color="primary"> {{ data.mess }}</Alert>
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
  </div>
</template>

<style>
h1 {
  color: red;
}
</style>
