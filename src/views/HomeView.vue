<template>
  <Layout id="layout">
    <template v-slot:content>
      <main id="main">
        <h1>{{ helloWorld }}</h1>
      </main>
    </template></Layout
  >
</template>

<script setup>
import Layout from "@components/Layout/LayoutComponent.vue";
const helloWorld = "Hello world";
</script>
