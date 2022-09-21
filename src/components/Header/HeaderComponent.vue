<template>
  <header id="header">
    <div class="logo-container">
      <img src="../../assets/imgs/logo.svg" alt="pokemon" class="logo" />
    </div>
    <div class="nav-container">
      <div class="nav__burguer" v-if="deviceSize < 770">
        <img
          src="../../assets/imgs/burguer-menu.svg"
          alt="burguer menu"
          class="burguer-menu"
        />
      </div>

      <div class="nav__menu" v-else>
        <div class="nav__option selected"><a href="">Home</a></div>
        <div class="nav__option"><a href="">Pokedex</a></div>
        <div class="nav__option"><a href=""> Legendaries</a></div>
        <div class="nav__option"><a href="">Documentation</a></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<script setup>
import { ref } from "vue";

const deviceSize = ref(window.innerWidth);

window.addEventListener("resize", () => {
  deviceSize.value = window.innerWidth;
});
</script>

<style scoped>
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  position: relative;
  background-color: var(--third);
  box-shadow: 1px 7px 12px 2px rgba(1, 28, 64, 0.32);
  -webkit-box-shadow: 1px 7px 12px 2px rgba(1, 28, 64, 0.32);
  -moz-box-shadow: 1px 7px 12px 2px rgba(1, 28, 64, 0.32);
}

#header .logo-container {
  margin: 0px 0px 0px 20px;
  width: 30%;
  max-width: 140px;
}
#header .logo-container .logo {
  object-fit: fill;
  height: 100%;
  width: 100%;
}
#header .nav-container {
  margin: 0px 20px 0px 0px;
}

#header .nav-container .nav__burguer {
  justify-self: end;
}
#header .nav-container .burguer-menu {
  object-fit: cover;
  justify-self: flex-end;
}

#header .nav-container .nav__menu {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
}

#header .nav-container .nav__menu .nav__option {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}

#header .nav-container .nav__menu .nav__option a {
  font-size: 2.4rem;
  text-decoration: none;
  color: var(--dark);
}
#header .nav-container .nav__menu .selected {
  border-bottom: 2px solid black;
}

/* Tablet device*/

@media only screen and (min-width: 770px) {
  #header {
    justify-content: space-around;
  }
  #header .logo-container {
    width: 140px;
  }

  #header .logo-container .logo {
    width: 90%;
  }
  #header .nav-container {
    width: 630px;
    height: 50%;
  }
}
</style>
