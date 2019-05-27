<template>
  <div>
    <nuxt class="common-content"/>
    <!-- <canvas id="live2dcanvas" width="300" height="600" class="live2d"></canvas> -->
  </div>
</template>

<script>
export default {
  mounted() {
    this.getAnimation();
  },
  methods: {
    getAnimation() {
      L2Dwidget.init({
        model: {
          jsonPath:
            "https://unpkg.com/live2d-widget-model-z16@1.0.5/assets/z16.model.json",
          scale: 1
        },
        display: {
          position: "right",
          width: 100,
          height: 200,
          hOffset: 0,
          vOffset: -40
        },
        mobile: {
          show: true,
          scale: 0.5
        },
        react: {
          opacityDefault: 1,
          opacityOnHover: 1
        }
      });
    }
  }
};
</script>

<style>
/* .live2d {
  position: fixed;
  bottom: -30px;
  right: 0px;
  z-index: 999;
  width: 150px;
  height: 300px;
  pointer-events: none;
} */
</style>
