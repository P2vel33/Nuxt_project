<script setup>
definePageMeta({
  layout: "users",
});

// const users = ref([
//   { id: 1, name: "Alex" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "John" },
// ]);

const { data } = await useFetch("https://dummyjson.com/users");
const users = ref(data.value.users);
</script>

<template>
  <div>
    <h1>All users</h1>
    <ul class="d-flex flex-wrap list-unstyled gap-3">
      <li v-for="user in users" :key="user.id">
        <nuxt-link :to="`/users/user-${user.id}`" class="btn btn-primary"
          >{{ user.firstName }} {{ user.lastName }}</nuxt-link
        >
      </li>
    </ul>
    <!-- {{ users }} -->
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
  </div>
</template>

<style>
h1 {
  color: red;
}
</style>
