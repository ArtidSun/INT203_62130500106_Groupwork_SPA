<template>
  <div class="justify-between p-9 grid grid-cols-9 gap-4 bg-black">
    <div v-for="result in herosCharectors" :key="result.id">
      <base-card class="bg-white">
        <div class="flex flex-row items-center">
          <div class="p-2">
            <img :src="result.Hero" />
            <p>{{result.name}}</p>
          </div>
        </div>
      </base-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      herosCharectors: [],
      url: "http://localhost:5000/herosCharectors"
    };
  },
  methods: {
    async fetchProfileResult() {
      const res = await fetch(this.url);
      const data = await res.json();
      // parses JSON response into native JavaScript objects
      return data;
    },
  },
  async created() {
    this.herosCharectors = await this.fetchProfileResult();
  },
};
</script>