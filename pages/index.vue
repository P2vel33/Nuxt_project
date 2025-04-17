<script></script>

<template>
  <div>
    <header>
      <ul>
        <li><nuxt-link to="/">Main</nuxt-link></li>
        <li><nuxt-link to="/contact">Contacts</nuxt-link></li>
        <li><nuxt-link to="/users">Users</nuxt-link></li>
      </ul>
    </header>
    <h1>Home page!</h1>
    <Alert color="primary"> A simple primary alert—check it out! </Alert>
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
  </div>
</template>

<style>
h1 {
  color: red;
}
</style>
