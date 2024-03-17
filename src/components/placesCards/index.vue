<template>
  <v-container class="mx-auto" max-width="500">
    <h2>{{ t("placesCard.title") }}</h2>
    <v-row dense>
      <v-col v-for="card in placesCards" :key="card.title" :cols="card.flex">
        <v-card hover>
          <v-img
            :src="card.img"
            class="align-end img-height"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            cover
          >
            <v-card-title class="text-white" v-text="card.title"></v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

export default {
  name: "PlacesCards",
  setup () {
    const placesCards = ref([
      {
        title: "首爾 北村韓屋村",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1654677392/blog/tzdg2fz1i9s1mimsb2gm.webp",
        href: "",
        flex: 4,
      },
      {
        title: "東京 淺草雷門",
        img: "https://mimihan.tw/wp-content/uploads/20230106183544_37.jpg",
        href: "",
        flex: 4,
      },
      {
        title: "台南 蝸牛巷",
        img: "https://gallery.twtainan.net/image/11120/1024x768",
        href: "",
        flex: 4,
      },
    ]);
    const { t, locale } = useI18n();
    watch(locale, (newlocale) => {
      localStorage.setItem("locale", newlocale);
    });
    return {
      placesCards,
      t,
      locale,
    };
  },
};
</script>
