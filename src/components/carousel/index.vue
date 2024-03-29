<template>
        <v-carousel
          class="carousel"
          show-arrows="hover"
          cycle
          hide-delimiter-background
        >
          <v-carousel-item v-for="(slide, i) in data" :key="i">
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
import { watch } from "vue";
import { useI18n } from "vue-i18n";

export default {
  name: "Carousel",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    const { t, locale } = useI18n();
    watch(locale, (newlocale) => {
      localStorage.setItem("locale", newlocale);
    });
    return {
      t,
      locale,
    };
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
