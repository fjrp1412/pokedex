<template>
  <Layout id="layout">
    <template v-slot:content>
      <main id="main">
        <div class="images-container">
          <div class="images">
            <img
              src="../assets/imgs/pokeball-black-white.png"
              alt="black and white pokeball"
              class="black-white-pokeball"
            />

            <img
              src="../assets/imgs/pokeball-red-white.png"
              alt="red and white pokeball"
              class="red-white-pokeball"
            />
            <img
              src="../assets/imgs/pikachu.png"
              alt="pikachu"
              class="pikachu"
            />
          </div>
        </div>
        <div class="information-container">
          <div class="title-container">
            <h1>
              <span class="bold">Find</span> all your favorite
              <span class="bold">Pokemon</span>
            </h1>
          </div>
          <div class="subtitle-container">
            <h4>
              You can know the type of Pokemon, its strengths, disadvantages and
              abilities
            </h4>
          </div>
          <div class="button-container">
            <Button text="See pokemons"></Button>
          </div>
        </div>
      </main>
    </template>
  </Layout>
</template>

<script setup>
import Layout from "@components/Layout/LayoutComponent.vue";
import Button from "@components/Button/ButtonComponent.vue";
</script>

<style scoped>
#main {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: var(--yellow-gradient);
  padding-bottom: 20px;
}
#main .images-container {
  margin-top: 80px;
}

#main .images-container .images {
  position: relative;
}

#main .images-container .images .pikachu {
  position: relative;
  object-fit: contain;
  z-index: 1;
}
#main .images-container .black-white-pokeball {
  width: fit-content;
  position: absolute;
  left: 5%;
  width: 100px;
  transform: rotate(-10deg);
}

#main .images-container .red-white-pokeball {
  width: fit-content;
  position: absolute;
  left: calc(100% - 40%);
  top: -20%;
}

#main .information-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#main .title-container {
  text-align: center;
}

#main .title-container h1 {
  font-weight: lighter;
}
#main .title-container h1 .bold {
  font-weight: bolder;
}

#main .subtitle-container h4 {
  text-align: center;
  font-weight: normal;
}

@media only screen and (min-width: 735px) {
  #main {
    flex-direction: row-reverse;
    justify-content: center;
  }

  #main .images-container {
    width: 50%;
  }
  #main .information-container {
    width: 50%;
  }
}

@media only screen and (min-width: 740px) {
  #main {
    height: 80vh;
  }
}

@media only screen and (min-width: 875px) {
  #main .images-container {
    display: contents;
  }
  #main .images-container .pikachu {
    width: 400px;
  }
  #main .images-container .red-white-pokeball {
    width: fit-content;
    position: absolute;
    left: 70%;
    top: -20%;
  }
}
</style>
