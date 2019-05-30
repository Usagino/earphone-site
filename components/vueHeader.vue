<template lang="pug">
header
  .header
    span(@click="sideMenuOut")
    .header__menu
      nuxt-link.header__menu--link(to="/") SHOP
      nuxt-link.header__menu--link(to="/about") ABOUT
    img.header--logo(src="/image/logo.svg")
    .header__icons
      .header__icons__count(@click="sideMenuIn")
        p 0
  .side(@click="sideMenuOut")
    .side__wrap
</template>

<script>
import {TweenMax} from 'gsap'
export default {
  methods:{
    sideMenuIn: event =>{
      TweenMax.to('.side',0.2,{ x:'-100%' });
      TweenMax.to('header span',0.2,{ display:'block' })
    },
    sideMenuOut: event =>{
      TweenMax.to('.side',0.2,{ x:'100%' });
      TweenMax.to('header span',0.2,{ display:'none' })
    }
  }
}
</script>

<style lang="scss" scoped>
header{
  position: fixed;
  top: 0;
  left: 0;
  height: $header_size;
  width: 100vw;
  span{
    position: fixed;
    @include full_screen;
    top: 0;
    left: 0;
    content: "";
    background: #bfbfbf70;
    z-index: 19;
    display: none;
  }
  .header{
    @include full_size
    display: grid;
    grid-template-columns: 1fr 0.5fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    & > *{
      margin: auto;
    }
    &__menu{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      width: 40%;
      &--link{
        @include subTitle_font;
        color: $text_color1;
        position: relative;
        mix-blend-mode: difference;
      }
      &--link:after{
        content:"";
        position: absolute;
        bottom: 0;
        left: 0; right: 0;
        height: 2rem;
        width: 100%;
        background: $material_color;
        z-index: -1;
        transform: scaleX(0);
        transform-origin: center left;
        transition: all 300ms ease .1s;
      }
      &--link:hover::after{
        transform: scaleX(1);
      }
    }
    &--logo{
      width: 6rem;
      height: auto;
    }
    &__icons{
      &__count{
        user-select: none;
        cursor: pointer;
        @include middle;
        border: 1px solid #c1c1c1;
        height: 3rem;
        width: 3rem;
        border-radius: 50%;
        transition: all .2s ease .2s;
        &:hover{
          border: 1.5rem solid #C1C1C1;
          color: white;
        }
      }
    }
  }
  .side{
    width: calc(100vw - 100vh - 6rem);
    height: 100vw;
    position: fixed;
    top: 0;
    right: calc((100vw - 100vh - 6rem) * -1);
    content: "";
    background: $text_color1;
    z-index: 20;

  }
  h1{
    @include subTitle_font
  }
}

</style>
