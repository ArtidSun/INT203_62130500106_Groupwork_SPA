<template>
  <div class=" flex-col space-y-12 h-full w-full p-6">
    <img
      class="transform mx-auto w-60"
      alt="Vue logo"
      src="../assets/dotalogo2.png"
    />
    <div class="container w-5/6 mx-auto bg-white rounded-lg">
    <base-card>
    <p class="text-black text-left">
      Dota 2 คือเกม MOBA (Multiplayer Online Battle Arena) ที่ถูกพัฒนาขึ้นมาโดย
      Valve บริษัทผู้พัฒนาและจัดจำหน่ายเกมจากอเมริกา
      รูปแบบการเล่นคือผู้เล่นถูกแบ่งเป็น 2 ทีม ทีมละ 5 คน
      ผู้เล่นจะเลือกเล่นตัวละคร (ในเกมเรียกว่า Hero) ที่มีความสามารถแตกต่างกัน
      ร่วมมือกันไปทำลายฐานทัพใหญ่ (ในเกมเรียกว่า Ancient) ของอีกฝั่งให้แตก
      ความสนุกของ Dota 2 คือการต้องร่วมมือกันเป็นทีมเพื่อบรรลุเป้าหมาย
      มีการสร้างกลยุทธ์ที่หลากหลายจาก Hero ที่แต่ละคนเลือกเล่น
      และความตื่นเต้นเร้าใจจากการเล่นที่ต้องปรับเปลี่ยนแผนการกันตลอดเวลา
    </p>
    </base-card>
    </div>
  </div>
</template>
<script>
import BaseCard from '../components/BaseCard.vue';
export default {
  components: {BaseCard},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
body {
    /* background-color: #6B7280; */
    background-image: url("../assets/background1.png");
    }
</style>

