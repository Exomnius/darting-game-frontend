<template>
  <div id="app">
    <DartHeader
      logo="https://via.placeholder.com/40"
    />

    <router-view/>
  </div>
</template>

<style lang="scss">
  body, html {
    height: 100%;
  }

  #app {
    background-color: $outer-space;
    height: 100%;
  }
</style>
<script>
  import {Component, Vue} from 'vue-property-decorator';
  import DartHeader from './components/DartHeader/DartHeader.vue';

  @Component({
    components: {
      DartHeader,
    },
  })
  export default class App extends Vue {
  }
</script>
