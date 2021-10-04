<script lang="ts">
import { Person } from "@/interfaces/random-api-response";
import { defineComponent, PropType } from "vue";
import Card from "./Card.vue";
export default defineComponent({
  props: {
    persons: Array as PropType<Person[]>,
  },
  components: {
    Card,
  },
});
</script>

<template v-if="pesrons.length > 0">
  <div class="cards">
    <Card v-for="person in persons" :person="person" :key="person.id.value" />
  </div>
</template>

<style lang="scss">
.cards {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 2rem;
  column-gap: 2rem;
  overflow: auto;
}
</style>
