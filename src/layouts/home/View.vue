<template>
  <v-main>
    <vue-particles
      color="#dedede"
      :particle-opacity="0.7"
      :particles-number="80"
      shape-type="edge"
      :particle-size="4"
      lines-color="#dedede"
      :lines-width="1"
      :line-linked="true"
      :line-opacity="0.4"
      :lines-distance="150"
      :move-speed="3"
      :hover-effect="true"
      hover-mode="repulse"
      :click-effect="true"
      click-mode="push"
    ></vue-particles>
    <full-page id="fullpage" ref="fullpage" :options="options">
      <div class="section" id="first-section"></div>
      <div class="section" id="second-section">Second section</div>
    </full-page>
    <v-fade-transition mode="out-in">
      <!-- <router-view /> -->
      <div>ohai!</div>
    </v-fade-transition>
  </v-main>
</template>

<script>
export default {
  name: 'BaseView',

  data() {
    return {
      options: {
        licenseKey: 'YOUR_KEY_HEERE',
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
      }
    };
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

#particles-js {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  height: 100%;
  background-color: brown;
  /* z-index: 1; */
}

#second-section {
  opacity: 1;
  pointer-events: all;
  /* z-index: 10 !important; */
}

#first-section {
  /* background-color: transparent !important; */
  background: none !important;
  pointer-events: none !important;
  /* z-index: -10; */
  opacity: 0;
}

</style>
