<template>
  <v-app>
    <!-- nav bar -->
    <v-app-bar :elevation="2">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            color="cyan-darken-1"
            v-bind="props"
            style="font-size: large; font-weight: 600"
            >
            探索</v-btn
          >
        </template>
        <v-list v-model:opened="open">
          <!-- 熱門城市選單 -->
          <v-list-group value="City">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="熱門城市"></v-list-item>
            </template>

            <v-list-item
              v-for="([title], i) in cities"
              :key="i"
              :title="title"
              :value="title"
            ></v-list-item>
          </v-list-group>
          <!-- 推薦行程選單 -->
          <v-list-group value="Recommend">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="推薦行程"></v-list-item>
            </template>

            <v-list-item
              v-for="([title], i) in itineraries"
              :key="i"
              :title="title"
              :value="title"
            ></v-list-item>
          </v-list-group>
          <!-- 主題懶人包 -->
          <v-list-group value="topics">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="主題懶人包"></v-list-item>
            </template>

            <v-list-item
              v-for="([title], i) in topics"
              :key="i"
              :title="title"
              :value="title"
            ></v-list-item>
          </v-list-group>
        </v-list>
      </v-menu>

      <v-app-bar-title>
        <v-icon icon="mdi-airplane"></v-icon>
        就是愛玩樂</v-app-bar-title>
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
          height="400"
          show-arrows="hover"
          cycle
          hide-delimiter-background
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <a :href="slide.link" style="text-decoration: none">
              {{ slide.title }}
              <img
                :src="slide.image"
                class="d-flex fill-height justify-center align-center"
              />
            </a>
          </v-carousel-item>
        </v-carousel>
      </v-container>
      <!-- 主題 -->
      <v-container>
        <div>
          <h2>主題懶人包</h2>
        </div>
        <div class="d-flex">
          <!-- 必吃美食 -->
          <div>
            <v-card
              class="mx-auto"
              height="200"
              width="200"
              hover
              href="#"
              image="https://gallery.twtainan.net/image/9464/1024x768"
            >
            </v-card>
            <v-card-title class="d-flex align-end">必吃美食</v-card-title>
            <v-card-subtitle>所有必吃餐廳、特色小吃不可錯過</v-card-subtitle>
          </div>
          <!-- IG打卡景點 -->
          <div>
            <v-card
              class="mx-auto"
              height="200"
              width="200"
              hover
              href="#"
              image="https://static.wixstatic.com/media/d44a48_3bd1e1d55f434ed1b10b0976c343e576~mv2.jpeg/v1/fill/w_560,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fullsizeoutput_2c8b.jpeg"
            >
            </v-card>
            <v-card-title class="d-flex align-end">IG打卡景點</v-card-title>
            <v-card-subtitle>看看IG紅什麼，還不來打卡？</v-card-subtitle>
          </div>
          <!-- 悠遊散策 -->
          <div>
            <v-card
              class="mx-auto"
              height="200"
              width="200"
              hover
              href="#"
              image="https://img.poibank.com/i-MT9vGn4BZ-JrwrtFm_qnaah4M=/W3siZm9ybWF0Ijoid2VicCJ9LHsia2V5Ijoiam91cm5hbHMvMzcyMjUvZDZiZjUzNWYtMTgxMS00YmY2LTkzNDUtOTZkNDA3Njc5NDMxIn0seyJyZXNpemUiOnsid2lkdGgiOiI4MDAifX1d"
            >
            </v-card>
            <v-card-title class="d-flex align-end">悠遊散策</v-card-title>
            <v-card-subtitle>沉浸在懷舊氛圍，讓走路不再乏味</v-card-subtitle>
          </div>
          <!-- 秘境攻略 -->
          <div>
            <v-card
              class="mx-auto"
              height="200"
              width="200"
              hover
              href="#"
              image="https://img.poibank.com/jTWo_mcCP6lCjS8ZN2s06ka-fHE=/W3siZm9ybWF0Ijoid2VicCJ9LHsia2V5Ijoiam91cm5hbHMvODA0OTIvZjE3NDEzZDItZGMxZS00YTJkLWE4MjEtN2JmMmE5MzcxNzExIn0seyJyZXNpemUiOnsid2lkdGgiOiI4MDAifX1d"
            >
            </v-card>
            <v-card-title class="d-flex align-end">秘境攻略</v-card-title>
            <v-card-subtitle>帶你體驗擁有迷人魅力的秘境</v-card-subtitle>
          </div>
          <!-- 國外自由行 -->
          <div>
            <v-card
              class="mx-auto"
              height="200"
              width="200"
              hover
              href="#"
              image="https://tw.wamazing.com/media/wp-content/uploads/sites/4/2019/09/kyototravel_pixta_82350195_L_eyecatch.jpg.webp"
            >
            </v-card>
            <v-card-title class="d-flex align-end">國外自由行</v-card-title>
            <v-card-subtitle>給你最完整的自由行攻略！</v-card-subtitle>
          </div>
        </div>
      </v-container>
      <!-- 熱門景點 -->
      <v-container>
        <div><h2>熱門景點</h2></div>
        <div class="d-flex">
          <!-- 熱門景點1 -->
          <v-card
            class="mx-auto"
            height="200"
            min-width="300"
            max-width="344"
            hover
            href="#"
            image="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1654677392/blog/tzdg2fz1i9s1mimsb2gm.webp"
          >
            <v-card-item class="d-flex">
              <v-card-title class="d-flex align-end"
                >首爾 北村韓屋村</v-card-title
              >
            </v-card-item>
          </v-card>
          <!-- 熱門景點2 -->
          <v-card
            class="mx-auto"
            height="200"
            min-width="300"
            max-width="344"
            hover
            href="#"
            image="https://mimihan.tw/wp-content/uploads/20230106183544_37.jpg"
          >
            <v-card-item class="d-flex">
              <v-card-title class="d-flex align-end"
                >東京 淺草雷門</v-card-title
              >
            </v-card-item>
          </v-card>
          <!-- 熱門景點3 -->
          <v-card
            class="mx-auto d-flex"
            height="200"
            min-width="300"
            max-width="344"
            hover
            href="#"
            image="https://gallery.twtainan.net/image/11120/1024x768"
          >
            <v-card-item class="align-end" height="100%">
              <v-card-title class="d-inline-flex align-end" color="white"
                >台南 蝸牛巷</v-card-title
              >
            </v-card-item>
          </v-card>
        </div>
      </v-container>
      <!-- 推薦行程 -->
      <v-container>
        <div><h2>推薦行程</h2></div>
        <div class="d-flex">
          <!-- 推薦行程1 -->
          <v-card class="mx-auto" width="344" hover href="#">
            <v-img
              height="200px"
              src="https://img.poibank.com/mclYiCsd3QZ0ZqCWFNFf0wnCGXY=/W3siZm9ybWF0Ijoid2VicCJ9LHsia2V5Ijoiam91cm5hbHMvMTExODcxLzg5OWYyOGVkLWVmMmUtNDE2Ny1iZWQ1LWM1Nzg5NmZkNGFkMCJ9LHsicmVzaXplIjp7IndpZHRoIjoiODAwIn19XQ=="
              cover
              class="text-right pa-2"
            >
              <v-btn
                :icon="isSelected ? 'mdi-heart' : 'mdi-heart-outline'"
              ></v-btn>
            </v-img>

            <v-card-title>日本兵庫</v-card-title>

            <v-card-subtitle style="margin-bottom: 10px">
              赤穗溫泉、銀波莊、姬路城的日歸溫泉旅行
            </v-card-subtitle>
          </v-card>
          <!-- 推薦行程2 -->
          <v-card class="mx-auto" width="344" hover href="#">
            <v-img
              height="200px"
              src="https://img.poibank.com/8_nn4T0i26MxI9FLQHTzUytXkxY=/W3siZm9ybWF0Ijoid2VicCJ9LHsia2V5Ijoiam91cm5hbHMvMTc0NjAvM2RjODhmYmQtOTE3NS00MzkwLTliNzgtOWM0NGMwZjc3ZWQ2In0seyJyZXNpemUiOnsid2lkdGgiOiI4MDAifX1d"
              cover
              class="text-right pa-2"
            >
              <v-btn
                :icon="isSelected ? 'mdi-heart' : 'mdi-heart-outline'"
              ></v-btn>
            </v-img>

            <v-card-title> 蘭嶼 </v-card-title>

            <v-card-subtitle style="margin-bottom: 10px">
              四天三夜瘋狂潛水
            </v-card-subtitle>
          </v-card>
          <!-- 推薦行程3 -->
          <v-card class="mx-auto" width="344" hover href="#">
            <v-img
              height="200px"
              src="https://img.poibank.com/KiYnozQqcGqD8499hwGfde_l6fI=/W3siZm9ybWF0Ijoid2VicCJ9LHsia2V5Ijoiam91cm5hbHMvNzgxNjMvMGY5MWVmZmQtZWJjYy00MDQwLWFlNDUtNzEyYThjYWNlZDcwIn0seyJyZXNpemUiOnsid2lkdGgiOiI4MDAifX1d"
              cover
              class="text-right pa-2"
            >
              <v-btn
                :icon="isSelected ? 'mdi-heart' : 'mdi-heart-outline'"
              ></v-btn>
            </v-img>
            <v-card-title>韓國 統營、巨濟島</v-card-title>

            <v-card-subtitle style="margin-bottom: 10px">
              釜山近郊秘境 探索自然之美
            </v-card-subtitle>
          </v-card>
        </div>
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
    // 選單
    // 子選單預設展開 open: ["City"],
    cities: [
      ["台南", "mdi-account-multiple-outline"],
      ["花蓮", "mdi-cog-outline"],
      ["首爾", "mdi-cog-outline"],
      ["東京", "mdi-cog-outline"],
      ["曼谷", "mdi-cog-outline"],
    ],
    itineraries: [
      ["一日輕旅行", "mdi-account-multiple-outline"],
      ["三天兩夜深度遊", "mdi-cog-outline"],
      ["國外旅遊", "mdi-cog-outline"],
    ],
    topics: [
      ["必吃美食", "mdi-account-multiple-outline"],
      ["IG打卡景點", "mdi-cog-outline"],
      ["悠遊散策", "mdi-cog-outline"],
      ["秘境攻略", "mdi-cog-outline"],
      ["國外自由行", "mdi-cog-outline"],
    ],
    // carousal
    slides: [
      {
        title: "輕旅行",
        image: "https://picsum.photos/1000/400?random=1",
        link: "https://picsum.photos/1000/200?random=1",
      },
      {
        title: "三天兩夜",
        image: "https://picsum.photos/1000/200?random=2",
        link: "https://picsum.photos/1000/200?random",
      },
      {
        title: "櫻花季",
        image: "https://picsum.photos/1000/200?random=3",
        link: "https://picsum.photos/1000/200?random",
      },
      {
        title: "IG打卡地點",
        image: "https://picsum.photos/1000/200?random=4",
        link: "https://picsum.photos/1000/200?random",
      },
      {
        title: "一日散策",
        image: "https://picsum.photos/1000/200?random=5",
        link: "https://picsum.photos/1000/200?random",
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
</style>
