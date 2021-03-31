<template>
  <v-card color="transparent" elevation="0" class="px-6 pt-8" max-width="600">
    <v-card-title class="flex-column align-start">
      <h4 class="black--text">Resume</h4>
      <div class="card-element-separator mt-4 mb-8"></div>
    </v-card-title>
    <v-card-text>
      <div class="black--text d-flex flex-column align-center">
        <p class="mb-8">
          Here you can download my resume in either PDF or Word format. I'd recommend PDF because Word is known to pull a fast one across different versions. But hey... we all know and love Word's
          quirkyness. 😅
        </p>
        <div class="d-block text-center">
          <v-btn x-large text class="ma-4" href="resume.pdf" target="_blank">
            <v-icon x-large color="greenDark">mdi-file-pdf</v-icon>
            pdf
          </v-btn>
          <v-btn x-large text class="ma-4" href="resume.docx" target="_blank">
            <v-icon x-large color="greenDark">mdi-file-word</v-icon>
            docx
          </v-btn>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
