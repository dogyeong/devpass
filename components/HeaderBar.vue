<script setup lang="ts">
import Logo from '~/assets/svg/logo.svg'
</script>

<template>
  <header :class="$style.header">
    <NuxtLink to="/" :class="$style.logoWrapper">
      <Logo :class="$style.logo" />
    </NuxtLink>
  </header>
</template>

<style lang="scss" module>
.header {
  z-index: 100;
}

.logoWrapper {
  position: fixed;
  top: 32px;
  left: 32px;
  z-index: 100;
  display: block;

  .logo {
    width: 32px;
    fill: $grey-0;
  }
}
</style>
