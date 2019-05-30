<template lang="pug">
  section
    vueHeader
    .view
      .view__wrap
        .view__wrap__image-box
          img.view__wrap__image-box--image(:src="`/image/earphone/${items[$route.params.id].productName}.png`")
        span.view__wrap--line
        .view__wrap__production
          .view__wrap__production__instructions
            h1.view__wrap__production__instructions--title {{items[$route.params.id].productName}}
            p.view__wrap__production__instructions-text {{items[$route.params.id].instructions}}
            p.view__wrap__production__instructions--price ¥ {{items[$route.params.id].price}}
            .view__wrap__production__instructions--button
              p Add cart

    vueFooter
</template>

<script>
// components
import vueFooter from '~/components/vueFooter'
import vueHeader from '~/components/vueHeader'
// library
import products from '@/assets/json/product.json'

export default {
  components:{
    vueHeader,
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
      padding: 0 6rem;
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
        @include middle;
        &__instructions{
          width: 64%;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto auto auto auto;
          grid-gap: 4rem;
          &--title{
            font-size: 10rem;
            font-weight: bold;
          }
          &--price{
            font-size: 7rem;
          }
          &--button{
            cursor: pointer;
            border: 1px solid #C1C1C1;
            display: inline-block;
            width: 22rem;
            height: 5rem;
            @include middle
            border-radius: 10rem;
            transition: all .1s ease .2s;
            p{
              font-size: 5rem;
            }
            &:hover{
              border: 2.5rem solid #C1C1C1;
              color: white;
            }
          }
        }
      }
    }
  }
</style>
