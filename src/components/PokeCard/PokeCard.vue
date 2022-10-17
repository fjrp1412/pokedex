<template>
  <div class="card-container">
    <h4 class="card-container__title">{{ pokemon?.name }}</h4>

    <div class="card-container__stats">
      <div class="stat" v-for="stat in filtPokemonStats" :key="stat.name">
        <div class="stat__number">
          <span>{{ stat.base_stat }}</span>
        </div>
        <span class="stat__title">{{ stat.stat.name }}</span>
      </div>
    </div>
    <div class="card-container__chips">
      <Chip
        :sx="{
          backgroundColor: '#07D6F2',
        }"
        >Poison</Chip
      >
      <Chip>Poison</Chip>
    </div>
  </div>
</template>

<script setup>
import Chip from "@components/Chip/ChipComponent.vue";
import { onBeforeMount, toRefs, ref, computed } from "vue";
import { GET } from "@utils/api";
const props = defineProps(["pokemonURL"]);

const { pokemonURL } = toRefs(props);
const pokemon = ref();

onBeforeMount(async () => {
  const url = pokemonURL.value.replace("https://pokeapi.co/api/v2/", "");
  const { data } = await GET({ url });
  pokemon.value = { ...data };
});

const filtPokemonStats = computed(() => {
  return pokemon.value?.stats.filter(
    (stat) =>
      stat.stat.name !== "special-attack" &&
      stat.stat.name !== "special-defense"
  );
});
</script>

<script>
export default {
  name: "PokeCard",
};
</script>

<style scoped>
.card-container {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  border-radius: 25px;
  padding-left: 10px;
  box-shadow: 6px 3px 33px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 6px 3px 33px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 3px 33px -7px rgba(0, 0, 0, 0.75);
}

.card-container .card-container__title {
  margin: 10px 0px;
}

.card-container .card-container__stats {
  display: flex;
  width: 35%;
  gap: 20px;
  flex-wrap: wrap;
}

.card-container .card-container__stats .stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
}

.card-container .card-container__stats .stat .stat__number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: solid 2px black;
  border-radius: 100%;
}

.card-container .card-container__stats .stat .stat__number span {
  font-size: 1.6rem;
}

.card-container .card-container__stats .stat .stat__title {
  font-size: 1.4rem;
  font-weight: bolder;
  color: rgba(75, 75, 75, 1);
  margin-top: 10px;
}

.card-container .card-container__chips {
  display: flex;
  width: 100%;
  margin: 20px 0px 10px -5px;
  gap: 10px;
}
</style>
