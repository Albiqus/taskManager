<template>
  <div class="main">
    <button @click="$router.push('/tasks')">к задачам</button>
    <v-carousel :interval="2000" :carouselData="sliderItems" />
  </div>
</template>

<script>
import vCarousel from "./Carousel/v-carousel.vue";

export default {
  components: {
    vCarousel,
  },
  data() {
    return {
      sliderItems: [
        {
          id: 1,
          name: "img1",
          img: "1.png",
        },
        {
          id: 2,
          name: "img2",
          img: "2.png",
        },
        {
          id: 3,
          name: "img3",
          img: "3.png",
        },
        {
          id: 4,
          name: "img4",
          img: "4.png",
        },
        {
          id: 5,
          name: "img5",
          img: "5.png",
        },
        {
          id: 6,
          name: "img6",
          img: "6.png",
        },
      ],
    };
  },
};
</script>


<style scoped>
.main {
  padding: 50px;
  margin: 0 auto;
  width: 1000px;
  height: 700px;
  margin-top: 100px;
  background-color: rgb(207, 190, 235);
  display: flex;
  flex-wrap: wrap;
}
button {
  transition: 0.3s;
  width: 450px;
  height: 600px;
  background-color: rgb(187, 151, 243);
  border: none;
  outline: none;
  font-size: 40px;
}
button:hover {
  cursor: pointer;
  transform: scale(1.05);
}
</style>
