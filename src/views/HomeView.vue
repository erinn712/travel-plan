<template>
  <v-app>
    <!-- Header -->
    <HeaderMenu />
    <v-main>
      <!-- carousel -->
      <v-container>
        <Carousel :data="Slides"/>
      </v-container>
      <!-- 主題懶人包 -->
      <TopicCards :data="TopicCards"/>
      <!-- 熱門景點 -->
      <PlacesCards :data="PlacesCards"/>
      <!-- 推薦行程 -->
      <RecommendCards :data="RecommendCards"/>
    </v-main>
    <!-- footer -->
    <Footer />
  </v-app>
</template>

<script>
import HeaderMenu from "@/components/header/index.vue";
import Carousel from "@/components/carousel/index.vue";
import TopicCards from "@/components/topicCards/index.vue";
import PlacesCards from "@/components/placesCards/index.vue";
import RecommendCards from "@/components/recommendCards/index.vue";
import Footer from "@/components/footer/index.vue";
import { ref } from "vue";
import { homeApi } from "@/api/module/home/index.js";

export default {
  name: "HomeView",
  components: {
    HeaderMenu,
    Carousel,
    TopicCards,
    PlacesCards,
    RecommendCards,
    Footer,
  },
  setup () {
    const Slides = ref([])
    const getSlidesApi = async () => {
      const { data } = await homeApi.getSlidesApi();
      Slides.value = data;
    }
    const TopicCards = ref([])
    const getTopicCardsApi = async () => {
      const { data } = await homeApi.getTopicCardsApi();
      TopicCards.value = data;
    }
    const PlacesCards = ref([]);
    const getPlacesApi = async () => {
      const { data } = await homeApi.getPlacesApi();
      PlacesCards.value = data;
    };
    const RecommendCards = ref([])
    const getRecommendCardsApi = async () => {
      const { data } = await homeApi.getRecommendCardsApi();
      RecommendCards.value = data;
    }
    getSlidesApi();
    getTopicCardsApi()
    getPlacesApi();
    getRecommendCardsApi()
    return { Slides, TopicCards, PlacesCards, RecommendCards };
  },
};
</script>

<style>
/* Optional: Makes the sample page fill the window. */
/* 無作用 */
/* .mx-w-500 {
  max-width: 500px;
} */

.img-height {
  height: 200px;
}
</style>
