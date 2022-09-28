<template>
  <header id="header">
    <div class="logo-container">
      <img src="../../assets/imgs/logo.svg" alt="pokemon" class="logo" />
    </div>
    <div class="nav-container">
      <div
        class="nav__burguer"
        v-if="deviceSize < 770"
        @click="toggleModal"
        id="menu"
      >
        <img
          src="../../assets/imgs/burguer-menu.svg"
          alt="burguer menu"
          class="burguer-menu"
        />
      </div>

      <div class="nav__menu" v-else>
        <div class="nav__option selected">
          <router-link :to="{ name: 'home' }">Home</router-link>
        </div>
        <div class="nav__option">
          <router-link :to="{ name: 'pokedex' }">Pokedex</router-link>
        </div>
        <div class="nav__option">
          <router-link to="/legendaries"> Legendaries</router-link>
        </div>
        <div class="nav__option">
          <router-link to="">Documentation</router-link>
        </div>
      </div>

      <ModalComponent :show="showModal" :toggleShow="toggleModal">
        <div class="modal-menu__container">
          <div class="logo-container">
            <img src="../../assets/imgs/logo.svg" alt="pokemon" class="logo" />
          </div>
          <div class="modal-menu__menu">
            <div
              :class="`nav__option ${
                this.$route.name === 'home' && 'selected'
              }`"
            >
              <router-link :to="{ name: 'home' }">Home</router-link>
            </div>

            <div
              :class="`nav__option ${
                this.$route.name === 'pokedex' && 'selected'
              }`"
            >
              <router-link :to="{ name: 'pokedex' }">Pokedex</router-link>
            </div>

            <div
              :class="`nav__option ${
                this.$route.name === 'legendaries' && 'selected'
              }`"
            >
              <router-link to="/legendaries"> Legendaries</router-link>
            </div>
            <div :class="`nav__option`">
              <router-link to="">Documentation</router-link>
            </div>
          </div>
        </div>
      </ModalComponent>
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
import ModalComponent from "@components/Modal/ModalComponent.vue";

const deviceSize = ref(window.innerWidth);
const showModal = ref(false);

const toggleModal = () => {
  showModal.value = !showModal.value;
};

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

.modal-menu__container {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

.modal-menu__container .logo-container {
  width: fit-content;
  margin-bottom: 40px;
}

.modal-menu__container .logo-container .logo {
  width: 150px;
}

.modal-menu__container .modal-menu__menu .nav__option {
  width: 100%;
  margin: 20px 0px;
  text-align: center;
}

.modal-menu__container .modal-menu__menu .nav__option a {
  font-size: 2.4rem;
  text-decoration: none;
  font-weight: bolder;
  color: var(--dark);
}
.modal-menu__container .modal-menu__menu .selected {
  background-color: rgba(242, 143, 22, 1);
  border-radius: 25px;
  padding: 0px 5px;
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
