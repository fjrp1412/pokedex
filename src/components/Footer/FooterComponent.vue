<template>
  <footer id="footer">
    <div class="footer-title">
      <span class="title">Francisco Ruiz</span>
    </div>
    <div class="footer-subtitle">
      <span class="subtitle">Mucho texto</span>
    </div>
  </footer>
</template>

<script setup></script>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
#footer {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding-top: 10px;
  background: var(--yellow-gradient);
}

#footer .footer-title .title {
  font-size: 2.4rem;
  font-weight: bolder;
}

#footer .footer-subtitle .subtitle {
  font-size: 2rem;
  font-weight: bolder;
}
</style>
