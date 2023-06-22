<template>
  <div>
    <img :src="require('../../../images/slider_images/' + itemData.img)" />
  </div>
</template>

<script>
export default {
  props: {
    itemData: {
      type: Object,
      defaul: () => ({}),
    },
  },
};
</script>


<style scoped>
</style>