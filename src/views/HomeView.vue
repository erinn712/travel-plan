<template>
  <v-app>
    <!-- Header -->
    <HeaderMenu />
    <v-main>
      <!-- carousel -->
      <v-container>
        <Carousel />
      </v-container>
      <!-- 主題懶人包 -->
      <TopicCards />
      <!-- 熱門景點 -->
      <PlacesCards :data="getPlacesApi"/>
      <!-- 推薦行程 -->
      <RecommendCards />
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
import { getPlacesApi } from "@/api/module/home/index.js";

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
    return {
      getPlacesApi,
    };
  },
};
</script>

<style>
/* Optional: Makes the sample page fill the window. */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

/* 無作用 */
/* .mx-w-500 {
  max-width: 500px;
} */

.img-height {
  height: 200px;
}
</style>
