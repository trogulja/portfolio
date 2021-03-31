<template>
  <v-card color="transparent" elevation="0" class="px-6 pt-8" max-width="600">
    <!-- <v-card-subtitle>
      <h6 class="black--text">About me</h6>
    </v-card-subtitle> -->
    <v-card-title class="flex-column align-start">
      <h4 class="black--text">About</h4>
      <div class="card-element-separator mt-4 mb-8"></div>
    </v-card-title>
    <v-card-text>
      <p class="black--text text-justify mb-5">
        I'm a father to a 2 year old and husband to a wonder-woman, living in Zagreb, Croatia. I work at a international publishing company, handling wide variety of tasks. My job is a weird mix of
        graphic editor meets developer meets research and development.
        <br /><br />
        I would like to think of myself as well organised person, independent in my work with high attention to the detail. That last part, with a dash of OCD (honestly, it should really be sorted
        alphabetically: CDO) is what causes me most headache. I really want the things that I build to be their best version, but there's never enough time for it.
        <br /><br />
        I really like to contribute to the light atmosphere by joking often, even though my repertoire nowadays is mostly dad jokes. Which I really love. Not sure why. Oh, wait.
        <br /><br />
        My experience is really wide, covering most of the things you would see in a marketing agency being done, but also in photography business, in teachings, in publishing business and in IT
        sector. IT is something I really hold dear, seeing how I'm the go-to-guy when something isn't working.
        <br /><br />
        I'm interested in furthering this developer story of mine. There's this special satisfaction when things come together and work. Or when I manage to automate things and save a ton of time for
        everyone. Or when I manage to fix something and others are like: "How did you..."
      </p>
      <v-row class="mt-8">
        <v-col cols="12" md="6">
          <v-img :src="require('@/assets/about1.jpg')" class="elevation-12" :aspect-ratio="5 / 6" min-width="150"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-img :src="require('@/assets/about2.jpg')" class="elevation-12" :aspect-ratio="5 / 6" min-width="150"></v-img>
        </v-col>
      </v-row>
      <div></div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'About',
};
</script>
