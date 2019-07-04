<template>
  <header class="header">
    <img v-if="logo" :src="logo" alt="logo" class="header__logo">

    <nav class="header__navigation">
      <Button :to="'new-game'">New Game</Button>
    </nav>
  </header>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Button from '@jdk-darts/jdk-darts-components/components/Button/Button.vue';

  @Component({
    components: {
      Button,
    },
    props: {
      logo: String,
    },
  })
  export default class DartHeader extends Vue {
  }
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    background-color: $smoky-black;
    padding: 10px;
    border-bottom: 1px solid $brand-primary;

    &__navigation {
      margin-left: auto;
    }
  }
</style>
