<template>
  <v-card color="transparent" elevation="0" class="px-6 pt-8">
    <v-card-title class="flex-column align-start">
      <h4 class="black--text">Projects</h4>
      <div class="card-element-separator mt-4 mb-8"></div>
    </v-card-title>
    <v-card-text>
      <v-container class="pa-0" fluid>
        <v-row>
          <v-col cols="12" lg="6">
            <v-card class="transparent project-card" elevation="0">
              <v-img :src="require('@/assets/marvin-mockup.jpg')" height="200px"></v-img>
              <v-card-title>Naslov kartice</v-card-title>
              <v-card-subtitle>neki podnaslov</v-card-subtitle>
              <v-card-text>ovdje je opis</v-card-text>
              <v-card-actions>
                <v-btn>clickme</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" lg="6">
            <v-card class="transparent project-card" elevation="0">
              <v-img :src="require('@/assets/skillsplatform-mockup.jpg')" height="200px"></v-img>
              <v-card-title>Naslov kartice</v-card-title>
              <v-card-subtitle>neki podnaslov</v-card-subtitle>
              <v-card-text>ovdje je opis</v-card-text>
              <v-card-actions>
                <v-btn>clickme</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'About',

  provide: {
    heading: { align: 'center' },
  },
};
</script>
