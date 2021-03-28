<template>
  <v-card color="transparent" elevation="0" class="px-6 pt-8">
    <!-- <v-card-subtitle>
      <h6 class="black--text">About me</h6>
    </v-card-subtitle> -->
    <v-card-title class="flex-column align-start">
      <h4 class="black--text">About</h4>
      <div class="card-element-separator mt-4 mb-8"></div>
    </v-card-title>
    <v-card-text>
      <p class="black--text">
        Lorem ipsum Dolor elit dolor laboris in enim ex ex deserunt consequat irure eu commodo mollit anim minim tempor Excepteur pariatur sit ut voluptate amet eiusmod aute et occaecat incididunt
        aute sit cupidatat dolore enim proident!<br /><br />

        Laboris est dolor commodo ullamco in reprehenderit sit tempor nisi nulla in ex deserunt esse ullamco dolore nostrud pariatur magna cillum commodo nisi sunt mollit elit aliquip eu sunt irure
        sint enim in <strong>Duis ullamco elit Duis veniam ex esse labore</strong> ex fugiat aute nostrud ullamco est laborum aliqua Duis eiusmod nostrud consequat pariatur eiusmod in culpa laboris
        dolore qui magna irure non veniam ut cillum nisi commodo enim eiusmod aute ex in officia amet proident irure dolore Ut qui aliquip labore ea tempor amet culpa irure nulla consectetur sed
        <i>proident cillum voluptate cillum</i> cillum consectetur occaecat tempor commodo incididunt aute aliquip sunt eu id deserunt magna sint sint nostrud cupidatat.
      </p>
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
