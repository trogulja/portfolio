<template>
  <base-section id="404">
    <base-heading title="404" />

    <base-subheading class="primary--text" title="Oh!" />

    <base-subheading space="8" title="Looks like this page doesn't exist" />

    <div class="text-center">
      <base-btn @click="goHome()">
        Get me to the first slide!
      </base-btn>
    </div>
  </base-section>
</template>

<script>
export default {
  name: 'FourOhFour',

  provide: {
    heading: { align: 'center' }
  },

  methods: {
    goHome: function () {
      this.$parent.api.moveTo(1)
    }
  },
};
</script>
