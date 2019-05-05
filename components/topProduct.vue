<template lang="pug">
  .product
    .product__thumbnail
      img.product__thumbnail__image(src="image/earphone/EarSonics VELVET V2 JP.png")
    .product__text
      h1.product__text--title EarSonics VELVET V2 JP
      p.product__text--price ￥95,040
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .product{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    &__thumbnail{
      background: #F4F4F4;
      @include middle;
      width: 100%;
      &__image{
        width: 200px;
        height: auto;
        padding: 1rem 0;
      }
    }
    &__text{
      margin-top: 1.5rem;
      &--title{
        @include Text_font;
      }
      &--price{
        @include Text_font;
        text-align: right;
        opacity: 0.7;
      }
    }
  }
</style>
