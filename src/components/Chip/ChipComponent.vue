<template>
  <div :style="cssProps" class="chip">
    <span class="chip__text"> <slot></slot> </span>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  sx: {
    type: Object,
  },
});

const cssProps = computed(() => {
  return {
    width: "60px",
    height: "18px",
    fontSize: "14px",
    backgroundColor: "var(--primary)",
    color: "black",
    borderRadius: "25px",
    fontWeight: "bolder",
    ...props.sx,
  };
});
</script>

<script>
export default {
  name: "ChipComponent",
};
</script>

<style scoped>
.chip {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
