<script></script>

<template>
  <div>
    <header class="bg-dark p-3">
      <ul class="nav container">
        <li class="nav-item">
          <nuxt-link to="/" class="nav-link text-white">Main</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/contact" class="nav-link text-white"
            >Contacts</nuxt-link
          >
        </li>
        <li class="nav-item">
          <nuxt-link to="/users" class="nav-link text-white">Users</nuxt-link>
        </li>
      </ul>
    </header>
    <div class="container py-5"><slot></slot></div>
  </div>
</template>

<style>
header a:not(.router-link-exact-active):hover {
  text-decoration: underline;
}

header a.router-link-exact-active {
  color: green !important;
  font-weight: 500;
}
</style>
