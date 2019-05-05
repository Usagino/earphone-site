<template lang="pug">
  <section class="container">
    vueHeader
    <div class="main">
      .main__wrap
        nav.main__wrap__nav
          ul.main__wrap__nav__list
            li wireless
            li earphone
            li headphone
            li prayer
        .main__wrap__products
          topProduct
          topProduct
          topProduct
          topProduct
          topProduct
          topProduct
          topProduct
    </div>
  </section>
</template>

<script>
// components
import AppLogo from '~/components/AppLogo.vue'
import vueHeader from '~/components/vueHeader'
import topProduct from '~/components/topProduct'

export default {
  components: {
    AppLogo,
    vueHeader,
    topProduct
  }
}
</script>

<style lang="scss">
html{
  font-size: 4px;
}
body{
  @include Text_font;
}
$gap:3rem;
.main{
  margin-top: $header_size;
  &__wrap{
    width: 72vw;
    margin: auto;
    display: grid;
    grid-template-columns: 160px 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: calc(1.61803 * #{$gap});
    &__nav{
      &__list{
        li{
          @include subTitle_font;
          padding-bottom: 3rem;
        }
      }
    }
    &__products{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-gap: calc(1 * #{$gap}) calc(1.61803 * #{$gap});
      span{
        content: "";
        background: gray;
        @include full_size
        height: 300px;

      }
    }
  }
}
</style>
