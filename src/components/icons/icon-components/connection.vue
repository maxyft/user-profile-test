<template lang="pug">
  g
    path(d="M8 0V6H10V9H4C2.89 9 2 9.89 2 11V14H0V20H6V14H4V11H10V14H8V20H14V14H12V11H18V14H16V20H22V14H20V11C20 9.89 19.11 9 18 9H12V6H14V0H8Z")
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class ConnectionIcon extends Vue {}
</script>