<script setup>
const { user } = defineProps(["user"]);
</script>

<template>
  <div class="card h-100 shadow-sm">
    <img :src="user.image" alt="User Image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
      <p class="card-text text-muted">
        Age: {{ user.age }} | {{ user.gender }}
      </p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <nuxt-link :to="`/users/user-${user.id}`" class="btn btn-primary"
        >{{ user.firstName }} {{ user.lastName }}</nuxt-link
      >
    </div>
  </div>
</template>

<style></style>
