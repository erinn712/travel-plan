<template>
  <v-app>
    <!-- nav bar -->
    <v-app-bar :elevation="2">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn color="cyan-darken-1" v-bind="props" class="btn-explore">
            探索</v-btn
          >
        </template>
        <v-list v-model:opened="open">
          <!-- 熱門城市選單 -->
          <v-list-group
            v-for="(group, i) in exploreList"
            :key="i"
            :title="group.title"
            :value="group.title"
          >
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :key="i"
                :value="group.title"
              ></v-list-item>
            </template>
            <v-list-item
              v-for="([subtitle], j) in group.subtitle"
              :key="j"
              :value="subtitle"
              >{{ subtitle }}</v-list-item
            >
          </v-list-group>
        </v-list>
      </v-menu>

      <v-app-bar-title>
        <v-icon icon="mdi-airplane"></v-icon>
        就是愛玩樂</v-app-bar-title
      >
      <template v-slot:append>
        <v-btn> 我的追蹤 </v-btn>
        <v-btn> 開始規劃 </v-btn>
        <v-btn color="red-lighten-3"> 登入/註冊 </v-btn>
        <v-btn icon="mdi-heart" color="red-accent-2"></v-btn>
        <v-text-field
          v-model="search"
          density="compact"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
          single-line
          style="width: 200px"
        ></v-text-field>
      </template>
    </v-app-bar>
    <v-main>
      <!-- carousel -->
      <v-container>
        <v-carousel
          class="carousel"
          show-arrows="hover"
          cycle
          hide-delimiter-background
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <a :href="slide.link" style="text-decoration: none">
              {{ slide.title }}
              <img
                :src="slide.image"
                class="d-flex fill-height justify-center align-center img-carousel"
              />
            </a>
          </v-carousel-item>
        </v-carousel>
      </v-container>
      <!-- 主題懶人包 -->
      <v-container  class="mx-auto"  max-width="500">
        <h2>主題懶人包</h2>
        <v-container fluid>
        <v-row dense>
          <v-col v-for="card in topicCards" :key="card.title" :col="card.flex">
            <v-card
              hover
              href="#"
            >
            <v-img :src="card.img" class="img-height" cover>
              <v-card-title>{{ card.title }}</v-card-title>
              <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
        </v-container>
      </v-container>
      <!-- 熱門景點 -->
      <v-container class="mx-auto"  max-width="500">
        <h2>熱門景點</h2>
        <v-container fluid>
          <v-row dense>
            <v-col
              v-for="card in hotPlaces"
              :key="card.title"
              :cols="card.flex"
            >
              <v-card hover>
                <v-img
                  :src="card.img"
                  class="align-end img-height"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  cover
                >
                  <v-card-title
                    class="text-white"
                    v-text="card.title"
                  ></v-card-title>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-container>

      <!-- 推薦行程 -->
      <v-container class="mx-auto" max-width="500">
        <h2>推薦行程</h2>
        <v-container fluid>
          <v-row dense>
            <v-col
              v-for="card in scheduleCards"
              :key="card.title"
              :col="card.flex"
            >
              <v-card hover href="#">
                <v-img
                  :src="card.img"
                  class="text-right pa-2 img-height"
                  cover
                >
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
      </v-container>
    </v-main>
    <!-- footer -->
    <v-footer class="bg-teal-lighten-3 text-center d-flex flex-column">
      <div>
        <v-row justify="center" no-gutters>
          <v-btn
            v-for="link in links"
            :key="link"
            class="mx-2"
            color="white"
            rounded="xl"
            variant="text"
          >
            {{ link }}
          </v-btn>
        </v-row>
      </div>

      <div class="pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum.
      </div>
      <!-- divider無作用 -->
      <v-divider class="border-opacity-25"></v-divider>
      <div>{{ new Date().getFullYear() }} — <strong>愛玩樂</strong></div>
      <v-row>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          class="mx-4"
          variant="text"
          color="brown-darken-4"
        >
        </v-btn>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    // explore選單
    exploreList: [
      {
        title: "熱門城市",
        subtitle: [
          ["台南", "mdi-account-multiple-outline"],
          ["花蓮", "mdi-cog-outline"],
          ["首爾", "mdi-cog-outline"],
          ["東京", "mdi-cog-outline"],
          ["曼谷", "mdi-cog-outline"],
        ],
      },
      {
        title: "推薦行程",
        subtitle: [
          ["一日輕旅行", "mdi-account-multiple-outline"],
          ["三天兩夜深度遊", "mdi-cog-outline"],
          ["國外旅遊", "mdi-cog-outline"],
        ],
      },
      {
        title: "主題懶人包",
        subtitle: [
          ["必吃美食", "mdi-account-multiple-outline"],
          ["IG打卡景點", "mdi-cog-outline"],
          ["悠遊散策", "mdi-cog-outline"],
          ["秘境攻略", "mdi-cog-outline"],
          ["國外自由行", "mdi-cog-outline"],
        ],
      },
    ],
    // 輪播圖 carousel
    slides: [
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
      },
    ],
    // 主題懶人包 topic for dummies
    topicCards: [
      {
        title: "必吃美食",
        subtitle: "所有必吃餐廳、特色小吃不可錯過",
        img: "https://gallery.twtainan.net/image/9464/1024x768",
        href: "",
        flex: 2.5,
      },
      {
        title: "IG打卡景點",
        subtitle: "看看IG紅什麼，還不來打卡？",
        img:
          "https://static.wixstatic.com/media/d44a48_3bd1e1d55f434ed1b10b0976c343e576~mv2.jpeg/v1/fill/w_560,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fullsizeoutput_2c8b.jpeg",
        href: "",
        flex: 2.5,
      },
      {
        title: "悠遊散策",
        subtitle: "沉浸在懷舊氛圍，讓走路不再乏味",
        img:
          "https://img.poibank.com/i-MT9vGn4BZ-JrwrtFm_qnaah4M=/W3siZm9ybWF0Ijoid2VicCJ9LHsia2V5Ijoiam91cm5hbHMvMzcyMjUvZDZiZjUzNWYtMTgxMS00YmY2LTkzNDUtOTZkNDA3Njc5NDMxIn0seyJyZXNpemUiOnsid2lkdGgiOiI4MDAifX1d",
        href: "",
        flex: 2.5,
      },
      {
        title: "秘境攻略",
        subtitle: "帶你體驗擁有迷人魅力的秘境",
        img:
          "https://img.poibank.com/jTWo_mcCP6lCjS8ZN2s06ka-fHE=/W3siZm9ybWF0Ijoid2VicCJ9LHsia2V5Ijoiam91cm5hbHMvODA0OTIvZjE3NDEzZDItZGMxZS00YTJkLWE4MjEtN2JmMmE5MzcxNzExIn0seyJyZXNpemUiOnsid2lkdGgiOiI4MDAifX1d",
        href: "",
        flex: 2.5,
      },
      {
        title: "國外自由行",
        subtitle: "給你最完整的自由行攻略！",
        img:
          "https://tw.wamazing.com/media/wp-content/uploads/sites/4/2019/09/kyototravel_pixta_82350195_L_eyecatch.jpg.webp",
        href: "",
        flex: 2.5,
      },
    ],
    // 熱門景點 hot places
    hotPlaces: [
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
    ],
    // 推薦行程 recommend schedule
    scheduleCards: [
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
    ],

    // footer links
    links: ["首頁", "關於我們", "團隊", "相關服務", "聯絡我們"],
    // footer-social media icon
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
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

.btn-explore {
  font-size: large;
  font-weight: 600;
}

.carousel {
  height: 450px;
}

.img-carousel {
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
}

/* 無作用 */
/* .mx-w-500 {
  max-width: 500px;
} */

.img-height {
  height: 200px;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}
</style>
