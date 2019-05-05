<template lang="pug">
header
  .header
    .header__menu
      p.header__menu--link SHOP
      p.header__menu--link ABOUT
    img.header--logo(src="@/assets/image/logo.svg")
    .header__icons
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
header{
  position: fixed;
  top: 0;
  left: 0;
  height: 15rem;
  width: 100vw;
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
      }
    }
    &--logo{
      width: 8rem;
      height: auto;
    }
  }
  h1{
    @include subTitle_font
  }
}

</style>
