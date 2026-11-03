<template>
  <v-header />

  <main>
      <RouterView />
  </main>
</template>

<script setup lang="ts">
// Components
import { RouterView } from 'vue-router';
import { VHeader } from './components/layout/VHeader';
</script>

<style>
.topbar {
  height: 72px;
  padding: 0 clamp(20px, 5vw, 76px);
  display: flex;
  align-items: center;
  gap: 64px;
  background: #fff;
  border-bottom: 1px solid #e8ebe6;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #17241d;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.5px;
  text-decoration: none;
}

.brand-mark {
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  color: #fff;
  background: #22765b;
  border-radius: 9px;
  font-family: Georgia, serif;
  font-size: 18px;
  font-weight: 700;
}

.brand-period {
  color: #e88769;
}

.primary-nav {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 34px;
}

.primary-nav a {
  height: 100%;
  display: inline-flex;
  align-items: center;
  color: #68736c;
  border-bottom: 2px solid transparent;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: color 160ms ease, border-color 160ms ease;
}

.primary-nav a:hover,
.primary-nav a.router-link-active {
  color: #22765b;
  border-bottom-color: #22765b;
}

.profile-button {
  width: 34px;
  height: 34px;
  margin-left: auto;
  border: 1px solid #dfe7df;
  border-radius: 50%;
  color: #35624e;
  background: #edf4ed;
  font-size: 11px;
  font-weight: 700;
}

@media (max-width: 600px) {
  .topbar {
    height: 64px;
    gap: 24px;
    padding: 0 18px;
  }

  .primary-nav {
    gap: 16px;
  }

  .primary-nav a {
    font-size: 12px;
  }

  .primary-nav a:first-child {
    display: none;
  }
}
</style>
