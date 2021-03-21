<template>
  <full-page id="fullpage" ref="fullpage" :options="options">
    <div id="section0" class="section"></div>
    <div v-for="(section, i) in sections" :id="`section${i + 1}`" :key="section" class="section">
      <section :id="id">
        <v-row no-gutters>
          <v-col cols="12">
            <component :is="`section-${section}`" />
          </v-col>
        </v-row>
      </section>
    </div>
  </full-page>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'BaseView',

  props: {
    id: {
      type: String,
      default: 'view'
    }
  },

  data: () => ({
    sections: [],
    options: {
      licenseKey: 'DAjn3?ebi-s4-z45t1t0m',
      // menu: '#fp-nav',
      navigation: true,
      anchors: ['', 'about', 'projects', 'skills', 'portfolio', 'contact'],
      sectionsColor: ['', '#41b883', '#ff5f45', '#0798ec', '#41b883', '#ff5f45', '#0798ec']
    }
  }),

  created() {
    const setup = setInterval(() => {
      if (this.$refs.fullpage) {
        Vue.prototype.$fullpage = this.$refs.fullpage.api;
        clearInterval(setup);
      }
    }, 200);
  }
};
</script>

<style lang="css">
#fullpage {
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 0;
  width: 50vw;
}

#fullpage > div:not(#section0) {
  pointer-events: all;
}
</style>
