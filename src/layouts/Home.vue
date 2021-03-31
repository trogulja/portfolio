<template>
  <v-main>
    <v-container class="pa-0" fluid>
      <v-row class="ma-0 pa-0" no-gutters>
        <v-col :cols="windowSizeLogic" class="ma-0 pa-0">
          <div id="particleAncestor">
            <Particles id="tsparticles" :particles-init="particlesInit" :particles-loaded="particlesLoaded" :options="tsparticles" />
            <v-container class="d-flex flex-column pa-0 no-mouse" :class="windowSizeLogic === 6 ? 'height-100vh' : ''" fluid>
              <v-container class="about-me align-self-center px-1 d-flex flex-column" :class="windowSizeLogic === 6 ? 'height-100vh' : ''" fluid>
                <v-spacer />
                <v-card color="transparent" elevation="0" dark>
                  <v-card-text>
                    <v-img id="tiborimage" :src="require('@/assets/ja.png')" class="mx-auto mb-12" contain height="350" width="250" />
                    <h1 class="mb-6 white--text">Hi, I'm Tibor.</h1>
                    <p class="white--text">A Full-Stack Developer from Zagreb, Croatia with a degree in marketing and a broad set of various skills.</p>
                    <p class="white--text">I solve problems.</p>
                    <v-btn class="mt-6 yes-mouse" color="primary white--text" x-large @click="explore()">
                      Explore
                      <span class="ask-to-scroll">
                        <span class="arrow"><span></span><span></span></span>
                        <span class="arrow"><span></span><span></span></span>
                        <span class="arrow"><span></span><span></span></span>
                      </span>
                    </v-btn>
                  </v-card-text>
                </v-card>
                <v-spacer />
                <v-card color="transparent" elevation="0" dark>
                  <v-card-actions>
                    <v-btn small color="transparent" elevation="0" class="py-6 yes-mouse" href="https://www.linkedin.com/in/trogulja/" target="_blank"
                      ><v-icon color="white">mdi-linkedin</v-icon></v-btn
                    >
                    <v-btn small color="transparent" elevation="0" class="py-6 yes-mouse" href="https://www.facebook.com/tibor.rogulja" target="_blank"
                      ><v-icon color="white">mdi-facebook</v-icon></v-btn
                    >
                    <v-btn small color="transparent" elevation="0" class="py-6 yes-mouse" href="https://twitter.com/trogulja" target="_blank"><v-icon color="white">mdi-twitter</v-icon></v-btn>
                    <v-btn small color="transparent" elevation="0" class="py-6 yes-mouse" href="https://www.instagram.com/thornycro/" target="_blank"
                      ><v-icon color="white">mdi-instagram</v-icon></v-btn
                    >
                    <v-spacer />
                  </v-card-actions>
                </v-card>
              </v-container>
            </v-container>
          </div>
        </v-col>
        <v-col :cols="windowSizeLogic" class="ma-0 pa-0">
          <router-view />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'BaseView',

  data() {
    return {
      tsparticles: {
        background: {
          color: {
            value: '#73302e',
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 300,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#d5d9b8',
          },
          links: {
            color: '#d5d9b8',
            distance: 250,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 60,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: false,
            value: 0,
          },
        },
        detectRetina: true,
      },
      windowSize: {
        x: 0,
        y: 0,
      },
    };
  },

  computed: {
    windowSizeLogic: function () {
      if (this.$vuetify.breakpoint.mdAndUp && this.$vuetify.breakpoint.height >= 800) return 6;
      return 12;
    },
  },

  methods: {
    particlesInit: function () {
      return true;
    },
    particlesLoaded: function () {
      return true;
    },
    explore: function () {
      if (this.$fullpage.getActiveSection().isLast) {
        this.$fullpage.moveTo(2);
      } else {
        this.$fullpage.moveSectionDown();
      }
    },
  },
};
</script>

<style lang="css">
#tiborimage {
  z-index: 30;
}

#tsparticles {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
}

#particleAncestor {
  position: relative;
}

.no-mouse {
  pointer-events: none;
}

.yes-mouse {
  pointer-events: all;
}
</style>
