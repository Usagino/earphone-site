<template lang="pug">
footer
  .footer
    .footer__wrap
      img.footer__wrap__logo(src="/image/logo.svg")
      nav.footer__wrap__menu
        ul.footer__wrap__menu__list
          li Top pahe
          li About
          li Privacy policy
      p.footer__wrap__copylight Copyright © Yuki Itoh All Rights Reserved.
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.footer{
  background: #e4e4e4;
  padding: 2rem 0;
  &__wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25%;
    flex-direction: row;
    &__logo{
      height: 3rem;
      width: auto;
    }
    &__menu{
      &__list{
        margin-bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 10rem;
      }
    }
    &__copylight{

    }
  }
}
</style>
