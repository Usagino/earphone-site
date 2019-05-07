<template lang="html">
  <div class="loading-page" v-if="loading">
    <img class="loading-page--logo" src="image/logo.svg" alt="">
  </div>
</template>

<script>
import {TweenMax} from 'gsap'
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
      TweenMax.set('.container',{
        display:'none',
        opacity:0,
      })
      // TweenMax.to('.loading-page--logo',1,{rotation:360})
    },
    finish () {
      this.loading = false
      TweenMax.set('.container',{display:'inline'})
      TweenMax.to('.container',0.8,{opacity:1})
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}
img{
  height: 60px;
  width: auto;
}
</style>
