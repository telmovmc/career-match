<template>
    <header class="v-header">
        <div class="v-header--inner">

            <!-- BRAND -->
            <div class="v-header--brand-container">
                <RouterLink
                    class="v-header--brand"
                    to="/"
                    aria-label="Career Match home">
                    <span class="v-header--brand-mark">C</span>
                    <span class="v-header--brand-name">
                        Career Match<span class="v-header--brand-period">.</span>
                    </span>
                </RouterLink>
            </div>

            <!-- MAIN NAVIGATION -->
            <nav
                class="v-header--nav"
                aria-label="Main navigation">
                <RouterLink to="/">Overview</RouterLink>
                <RouterLink to="/jobs">Find jobs</RouterLink>
            </nav>

            <!-- PROFILE BUTTON -->
            <div class="v-header--profile-container">
                <button
                    class="v-header--profile"
                    type="button"
                    aria-label="Your profile">
                    AM
                </button>
            </div>

        </div>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>