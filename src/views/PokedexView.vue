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
          <div
            class="item"
            v-for="pokemon in pokeList.results"
            :key="pokemon.id"
          >
            <PokeCard :pokemonURL="pokemon.url"></PokeCard>
          </div>
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
import { onBeforeMount, ref } from "vue";
import LayoutComponent from "@components/Layout/LayoutComponent.vue";
import PokeCard from "@components/PokeCard/PokeCard.vue";
import { GET } from "@utils/api";

const pokeList = ref([]);
onBeforeMount(async () => {
  const { data } = await GET({
    url: "pokemon/",
    query: { limit: 12 },
  });
  pokeList.value = data;
});
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
  grid-auto-rows: minmax(160px, auto);
  gap: 50px;
  margin: 20px 0px;
}

.content-container .gallery .item {
  width: 100%;
}
</style>
