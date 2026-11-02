<template>
  <!-- Header -->
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/jobs">Jobs</RouterLink> |
      <RouterLink to="/profile">Profile</RouterLink> |
      <RouterLink to="/dev">Dev</RouterLink>
    </nav>
  </header>
  
  <!-- Router View -->
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
</script>
