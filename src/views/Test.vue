<template>
  <div class="home">
    <Cards :persons="persons" />
  </div>
</template>

<script lang="ts">
import Cards from "@/components/Card/Cards.vue"; // @ is an alias to /src
import { http } from "@/services/api-service";
import { RandomMeResponse } from "@/interfaces/random-api-response";

import { defineComponent, ref } from "vue";

export default defineComponent({
  Name: "Test",
  setup() {
    const persons = ref();
    const fetchData = async () => {
      try {
        const response = await http.get<RandomMeResponse>("api");
        persons.value = response.data.results;
      } catch (e) {
        console.log(e);
      }
    };
    return {
      fetchData,
      persons,
    };
  },
  created() {
    this.fetchData();
  },
  components: {
    Cards,
  },
});
</script>
