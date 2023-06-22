<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {

};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: custom;
}
@font-face {
  font-family: "custom";
  src: url("./fonts/Arbor.ttf");
}
@font-face {
  font-family: "custom_2";
  src: url("./fonts/FedraSansPro-Bold.ttf");
}
body {
  background-color: rgb(228, 219, 240);
}
</style>