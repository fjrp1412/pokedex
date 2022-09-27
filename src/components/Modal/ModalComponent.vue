<template>
  <Teleport to="#app">
    <div class="container" v-if="show">
      <div class="overlay" id="overlay" @click="toggleShow"></div>
      <div class="modal" id="modal">
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  name: "ModalComponent",
};
</script>

<script setup>
import { toRefs } from "vue";
const props = defineProps(["show", "toggleShow"]);
const { show } = toRefs(props);
</script>

<style scoped>
#overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.5);
}

#modal {
  background: var(--yellow-gradient);
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 10000;
  width: 100%;
  height: 50%;
  border-radius: 0px 0px 15px 15px;
}
</style>
