<template>
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
        <v-btn color="red-lighten-3" @click="redirectToLoginOrRegister"> 登入/註冊 </v-btn>
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
</template>

<script>
import { ref } from 'vue';

export default {
  name: "HeaderMenu",
  setup () {
    const exploreList = ref([
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
      }
    ])
    const redirectPath = ref('');
    const redirectToLoginOrRegister = () => {
      redirectPath.value = '/login';
    }
    return {
      exploreList,
      redirectToLoginOrRegister
    }
  },
}
</script>

<style>
.btn-explore {
  font-size: large;
  font-weight: 600;
}
</style>
