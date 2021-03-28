<script>
// Extensions
import View from '@/views/View';

// Mixins
import LoadSections from '@/mixins/load-sections';

export default {
  name: 'Home',

  metaInfo: { title: 'Full-Stack Developer' },

  extends: View,

  mixins: [LoadSections(['about', 'projects', 'skills', 'portfolio', 'contact'])],

  props: {
    id: {
      type: String,
      default: 'home',
    },
  },
};
</script>
