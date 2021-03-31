<template>
  <v-container class="ma-0 pa-0">
    <full-page v-if="windowSizeLogic" id="fullpage" ref="fullpage" :options="options">
      <div id="section0" class="section"></div>
      <div v-for="(section, i) in sections" :id="`section${i + 1}`" :key="section" class="section height-100vh">
        <section :id="id" class="height-100vhmin">
          <v-row align="center" class="height-100vhmin" no-gutters>
            <v-col cols="12" class="pr-6 align-center justify-center d-flex">
              <component :is="`section-${section}`" />
            </v-col>
          </v-row>
        </section>
      </div>
    </full-page>
    <div v-for="(section, i) in sections" v-else :id="`section${i + 1}`" :key="section" class="section">
      <base-section :id="id">
        <v-row no-gutters>
          <v-col cols="12">
            <component :is="`section-${section}`" />
          </v-col>
        </v-row>
      </base-section>
    </div>
  </v-container>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'BaseView',

  props: {
    id: {
      type: String,
      default: 'view',
    },
  },

  data: () => ({
    sections: [],
    options: {
      licenseKey: 'DAjn3?ebi-s4-z45t1t0m',
      // menu: '#fp-nav',
      scrollOverflow: true,
      navigation: true,
      anchors: ['', 'about', 'projects', 'resume', 'contact'],
      sectionsColor: ['', '#d5d9b8', '#d5d9b8', '#d5d9b8', '#d5d9b8'],
    },
  }),

  computed: {
    windowSizeLogic: function () {
      if (this.$vuetify.breakpoint.mdAndUp && this.$vuetify.breakpoint.height >= 800) return true;
      return false;
    },
  },

  created() {
    const setup = setInterval(() => {
      if (this.$refs.fullpage) {
        Vue.prototype.$fullpage = this.$refs.fullpage.api;
        clearInterval(setup);
      }
    }, 200);
  },
};
</script>

<style lang="css">
#fullpage {
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}

#fullpage > div:not(#section0) {
  pointer-events: all;
}
</style>
