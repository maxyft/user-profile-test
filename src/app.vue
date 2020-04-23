<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {}
</script>

<template lang="pug">
  div(
    class="app-wrapper"
  )
    router-view
</template>

<style lang="scss">
  @import './style.scss';
</style>
