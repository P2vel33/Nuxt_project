<script>
export default {
  data() {
    return {
      some: "info",
    };
  },
};
</script>

<template>
  <div>
    <h1>Add users</h1>
    <p>{{ some }}</p>
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
  </div>
</template>

<style>
h1 {
  color: red;
}
</style>
