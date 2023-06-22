<template>
  <div class="wrapper">
    <div
      class="v-carousel"
      :style="{'margin-left': '-' + (100 * curSlideIndex) + '%', 
       'transition': isAnimated ? 'all ease 1s' : 'none'}"
    >
      <v-carousel-item v-for="item in carouselData" :key="item.id" :itemData="item" />
    </div>
  </div>
</template>

<script>
import vCarouselItem from "./v-carousel-item.vue";
export default {
  components: {
    vCarouselItem,
  },
  props: {
    carouselData: {
      type: Array,
      default: () => [],
    },
    interval: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      curSlideIndex: 0,
      isAnimated: true,
    };
  },
  methods: {
    prevSlide() {
      if (this.curSlideIndex > 0) {
        this.curSlideIndex -= 1;
      }
    },
    nextSlide() {
      if (this.curSlideIndex <= 4) {
        this.curSlideIndex += 1;
      } else {
        this.curSlideIndex = 0;
      }
    },
  },
  mounted() {
    if (this.interval > 0) {
      setInterval(() => {
        this.nextSlide();
      }, this.interval);
    }
  },
  updated() {
    if (this.curSlideIndex === 0) {
      this.isAnimated = false;
    } else {
      this.isAnimated = true;
    }
  },
};
</script>


<style scoped>
.wrapper {
  margin-left: 50px;
  height: 600px;
  background-color: rgb(0, 0, 0);
  max-width: 400px;
  overflow: hidden;
  box-shadow: rgba(0,0,0,0.8) 5px 5px, rgba(0,0,0,0.6) 10px 10px, rgba(0,0,0,0.4) 15px 15px, rgba(0,0,0,0.2) 20px 20px, rgba(0,0,0,0.1) 25px 25px;
}

.v-carousel {
  position: relative;
  display: flex;
  /* transition: all ease 1s; */
}

.btn1 {
  position: absolute;
  left: 100px;
}
.btn2 {
  position: absolute;
  left: 200px;
}
</style>