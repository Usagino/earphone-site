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
// library
// import products from '../assets/json/product.json'

export default {
  components: {
    AppLogo,
    vueHeader,
    topProduct
  },
  methods: {
    flexLastAdd: () =>{
      // console.log("This is flexLastAdd function");
      let elProductBox = document.querySelector('.main__wrap__products');
      let elProduct = document.querySelector('.main__wrap__products > *:last-child ');
      let ProductBoxWidth = elProductBox.clientWidth
      let ProductWidth = elProduct.clientWidth
      let ProductPieces = Math.floor(ProductBoxWidth / ProductWidth)
      let productLength = document.querySelectorAll('.main__wrap__products > *').length
      let surPlus = ProductPieces - (productLength % ProductPieces)
      for (var i = 0; i < surPlus; i++) {
        let elEmpty = document.createElement('span');
        elProductBox.append(elEmpty)
      }
    }
  },
  mounted(){
    this.flexLastAdd();
    window.onresize = () => {
      this.flexLastAdd();
    };

    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
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
        position: fixed;

        li{
          @include subTitle_font;
          padding-bottom: 3rem;
        }
      }
    }
    &__products{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;

      span{
        content: "";
        width: 250px;
      }
    }
  }
}
</style>
