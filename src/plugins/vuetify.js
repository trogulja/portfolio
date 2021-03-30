import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import hr from 'vuetify/lib/locale/hr';
import { VCol, VRow } from 'vuetify/lib';

Vue.use(Vuetify, {
  components: {
    VCol,
    VRow,
  },
});

const color = {
  greenLight: '#d5d9b8',
  greenNormal: '#bcbf56',
  greenDark: '#707238',
  blueNormal: '#6999bf',
  redNormal: '#bf4743',
  redDark: '#73302e',
  brownNormal: '#8c593b',
  blackNormal: '#0d0a07',
  projectMarvin: '#a86c4c',
  projectSkillsplatform: '#a27f46',
  projectParserly: '#9c8a42',
  projectCompiley: '#6a8b54',
  projectFolderwatchnotify: '#407d78',
  projectLepanel: '#94546f',
};

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: color.greenDark,
        secondary: color.blueNormal,
        accent: color.redNormal,
        white: color.greenLight,
        black: color.blackNormal,
        brown: color.brownNormal,
        ...color,
      },
      dark: {
        primary: color.greenLight,
        secondary: color.blueNormal,
        accent: color.redNormal,
        white: color.greenLight,
        black: color.blackNormal,
        brown: color.brownNormal,
        redDark: color.redDark,
        ...color,
      },
    },
  },
  lang: {
    locales: { hr },
    current: 'hr',
  },
});
