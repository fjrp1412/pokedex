<template>
  <LayoutComponent>
    <template #content>
      <main class="content-container">
        <div class="title-container">
          <h4 class="title">
            800 <span>Pokemons</span> for you to choose your favorite
          </h4>
        </div>
        <div class="search-container">
          <div class="search-container__input"></div>
          <div class="search-container__filters"></div>
        </div>
        <div class="gallery">
          <div class="item">
            <PokeCard></PokeCard>
          </div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </main>
    </template>
  </LayoutComponent>
</template>

<script>
export default {
  name: "PokedexView",
};
</script>

<script setup>
import LayoutComponent from "@components/Layout/LayoutComponent.vue";
import PokeCard from "@components/PokeCard/PokeCard.vue";
</script>

<style scoped>
.content-container {
  display: flex;
  min-height: auto;
  width: 100%;
  flex-direction: column;
  align-items: center;
}

.content-container .title-container {
  display: flex;
  width: 100%;
  text-align: center;
  height: 150px;
  align-items: center;
}

.content-container .title-container .title {
  font-weight: 400;
}

.content-container .title-container .title span {
  font-weight: bolder;
}

.content-container .search-container {
  width: 100%;
  height: 80px;
}

.content-container .gallery {
  display: grid;
  width: 100%;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(330px, 350px));
  grid-auto-rows: minmax(140px, 150px);
  gap: 20px;
  margin: 20px 0px;
}

.content-container .gallery .item {
  border: 1px solid red;
  width: 100%;
}
</style>
