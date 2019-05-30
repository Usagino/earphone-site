<template lang="pug">
  section
    .view
      .view__wrap
        .view__wrap__image-box
          img.view__wrap__image-box--image(:src="`/image/earphone/${items[$route.params.id].productName}.png`")
        span.view__wrap--line
        .view__wrap__production
    vueFooter
</template>

<script>
// components
import vueFooter from '~/components/vueFooter'
// library
import products from '@/assets/json/product.json'

export default {
  components:{
    vueFooter
  },
  data(){
    return {
      items: products
    }
  }
}
</script>

<style lang="scss" scoped>
  .view{
    &__wrap{
      @include full_screen;
      display: grid;
      grid-template-columns: 100vh 1px 1fr;
      grid-template-rows: 100vh;
      grid-template-areas: "image line production";
      &__image-box{
        @include middle;
        grid-area: image;
        &--image{
          height: 80%;
          width: auto;
        }
      }
      &--line{
        content: "";
        background: #C1C1C1;
        transform: scaleY(0.9);
        opacity: 0.7;
      }
      &__production{
        grid-area: production;
      }
    }
  }
</style>
