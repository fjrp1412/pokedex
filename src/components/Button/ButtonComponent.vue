<template>
  <button class="button">
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",
};
</script>

<script setup>
import { toRefs } from "vue";
const props = defineProps(["text"]);

const { text } = toRefs(props);
</script>

<style scoped>
.button {
  width: 300px;
  height: 50px;
  background-color: #73d677;
  color: var(--dark);
  border-radius: 15px;
  box-shadow: -1px -54px 22px -7px rgba(0, 0, 0, 0.19) inset;
  -webkit-box-shadow: -1px -54px 22px -7px rgba(0, 0, 0, 0.19) inset;
  -moz-box-shadow: -1px -54px 22px -7px rgba(0, 0, 0, 0.19) inset;
  font-size: 2.8rem;
  font-weight: bolder;
}
</style>
