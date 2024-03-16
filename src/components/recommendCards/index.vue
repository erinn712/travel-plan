<template>
  <v-container class="mx-auto" max-width="500">
      <h2>推薦行程</h2>
      <v-row dense>
        <v-col
          v-for="card in recommendCards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card hover href="#">
            <v-img :src="card.img" class="text-right pa-2 img-height" cover>
              <v-btn
                :icon="isSelected ? 'mdi-heart' : 'mdi-heart-outline'"
              ></v-btn>
            </v-img>
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-subtitle style="margin-bottom: 10px">
              {{ card.subtitle }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "RecommendCards",
  setup () {
    const recommendCards = ref([
      {
        title: "日本兵庫",
        subtitle: "赤穗溫泉、銀波莊、姬路城的日歸溫泉旅行",
        img: "https://img.poibank.com/mclYiCsd3QZ0ZqCWFNFf0wnCGXY=/W3siZm9ybWF0Ijoid2VicCJ9LHsia2V5Ijoiam91cm5hbHMvMTExODcxLzg5OWYyOGVkLWVmMmUtNDE2Ny1iZWQ1LWM1Nzg5NmZkNGFkMCJ9LHsicmVzaXplIjp7IndpZHRoIjoiODAwIn19XQ==",
        href: "",
        flex: 4,
      },
      {
        title: "蘭嶼",
        subtitle: "四天三夜瘋狂潛水",
        img: "https://img.poibank.com/8_nn4T0i26MxI9FLQHTzUytXkxY=/W3siZm9ybWF0Ijoid2VicCJ9LHsia2V5Ijoiam91cm5hbHMvMTc0NjAvM2RjODhmYmQtOTE3NS00MzkwLTliNzgtOWM0NGMwZjc3ZWQ2In0seyJyZXNpemUiOnsid2lkdGgiOiI4MDAifX1d",
        href: "",
        flex: 4,
      },
      {
        title: "韓國 統營、巨濟島",
        subtitle: "釜山近郊秘境 探索自然之美",
        img: "https://img.poibank.com/KiYnozQqcGqD8499hwGfde_l6fI=/W3siZm9ybWF0Ijoid2VicCJ9LHsia2V5Ijoiam91cm5hbHMvNzgxNjMvMGY5MWVmZmQtZWJjYy00MDQwLWFlNDUtNzEyYThjYWNlZDcwIn0seyJyZXNpemUiOnsid2lkdGgiOiI4MDAifX1d",
        href: "",
        flex: 4,
      },
    ]);
    return {
      recommendCards
    }
  },
};
</script>
