<template>
        <v-carousel
          class="carousel"
          show-arrows="hover"
          cycle
          hide-delimiter-background
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <a :href="slide.link" style="text-decoration: none">
              <v-img
                :src="slide.image"
                class="d-flex fill-height justify-center align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.1)"
                cover
              >
                <v-card-title class="text-white"><h3>{{
                  slide.title
                }}</h3></v-card-title>
              </v-img>
            </a>
          </v-carousel-item>
        </v-carousel>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "Carousel",
  setup () {
    const slides = ref([
      {
        title: "輕旅行",
        image:
          "https://stayliuqiu.com/wp-content/uploads/4.%E6%8E%A2%E7%B4%A2%E6%8B%89%E7%BE%8E%E5%8D%8A%E6%BD%9B%E8%89%87.png",
        link: "https://picsum.photos/1000/200?random=1",
      },
      {
        title: "三天兩夜",
        image:
          "https://www.mingshan.com.tw/upload/location_b/b229017f8422de6f18467d5099b54328.jpg",
        link: "https://picsum.photos/1000/200?random",
      },
      {
        title: "櫻花季",
        image:
          "https://www.jal.co.jp/tw/zhtw/guide-to-japan/experiences/cherry-blossom/cherry-blossom-season/index/_jcr_content/root/responsivegrid/sectioncontainer_cop/image_1380017849.coreimg.jpeg/1678685248359.jpeg",
        link: "https://picsum.photos/1000/200?random",
      },
      {
        title: "IG打卡地點",
        image:
          "https://cdn.tatlerasia.com/tatlerasia/i/2024/02/07123427-422145747-18324066388116979-5821318404692424159-n_cover_1080x1080.jpg",
        link: "https://picsum.photos/1000/200?random",
      },
      {
        title: "一日散策",
        image:
          "https://cdn.esence.travel/%E6%9C%AC%E8%B3%AA%E6%97%85%E8%A1%8C/%E6%9C%AC%E8%B3%AA%E6%97%85%E8%A1%8C-%E6%95%85%E4%BA%8B%E6%96%87%E7%AB%A0%E9%A6%96%E5%9C%96-1200737-1-8.png",
        link: "https://picsum.photos/1000/200?random",
      }
    ])

    return {
      slides
    }
  }
}
</script>

<style>
.carousel {
  height: 450px;
}

.img-carousel {
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
}
</style>
