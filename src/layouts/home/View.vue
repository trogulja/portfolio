<template>
  <v-main>
    <Particles id="tsparticles" :particles-init="particlesInit" :particles-loaded="particlesLoaded" :options="tsparticles" />

    <div id="left-part">
      <div class="content-inside">
        <v-img id="tiborimage" :src="require('@/assets/ja.png')" class="mx-auto mb-12" contain height="350" width="250" />
        <h1>Hi,<br />I'm Tibor,<br />I solve problems</h1>
        <div class="text">
          <p>A Full-Stack Developer from Zagreb, Croatia with a degree in marketing and a broad set of various skills.</p>
        </div>
        <v-btn color="primary" x-large @click="explore()">
          Explore<span class="ask-to-scroll">
            <span class="arrow"><span></span><span></span></span>
            <span class="arrow"><span></span><span></span></span>
            <span class="arrow"><span></span><span></span></span>
          </span>
        </v-btn>
      </div>

      <div id="social-nav">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/trogulja/" target="_blank"><v-icon dark>mdi-linkedin</v-icon></a>
          </li>
          <li>
            <a href="https://www.facebook.com/tibor.rogulja" target="_blank"><v-icon dark>mdi-facebook</v-icon></a>
          </li>
          <li>
            <a href="https://twitter.com/trogulja" target="_blank"><v-icon dark>mdi-twitter</v-icon></a>
          </li>
          <li>
            <a href="https://www.instagram.com/thornycro/" target="_blank"><v-icon dark>mdi-instagram</v-icon></a>
          </li>
        </ul>
      </div>
    </div>

    <router-view />
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
            value: '#73302e'
          }
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 300,
              duration: 2,
              opacity: 0.8,
              size: 40
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: '#d5d9b8'
          },
          links: {
            color: '#d5d9b8',
            distance: 250,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 2,
            straight: false
          },
          number: {
            density: {
              enable: true,
              value_area: 800
            },
            value: 60
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            random: false,
            value: 0
          }
        },
        detectRetina: true
      }
    };
  },

  methods: {
    particlesInit: function() {
      return true;
    },
    particlesLoaded: function() {
      return true;
    },
    explore: function() {
      if (this.$fullpage.getActiveSection().isLast) {
        this.$fullpage.moveTo(2);
      } else {
        this.$fullpage.moveSectionDown();
      }
    }
  }
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
  height: 100vh;
}
</style>
