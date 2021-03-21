<template>
  <base-section space="0" class="content-inside-section">
    <div class="row row-no-margin">
      <div class="left-center-text">
        <div class="left-center-part">
          <base-heading>Projects</base-heading>
          <v-container>
            <v-row dense>
              <v-col cols="6">
                <v-card>
                  some test
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card>
                  some other test
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card>
                  some test
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card>
                  some other test
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card>
                  some test
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card>
                  some other test
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </div>
  </base-section>
</template>

<script>
export default {
  name: 'FourOhFour',

  provide: {
    heading: { align: 'center' }
  }
};
</script>
