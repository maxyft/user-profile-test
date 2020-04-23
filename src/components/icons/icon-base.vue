<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="presentation"
    :viewBox="viewBox"
    :width="width"
    :height="height"
  >
    <g :stroke="strokeColor" :fill="fillColor">
      <slot />
    </g>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component({})
export default class IconBase extends Vue {
  @Prop(String)
  width!: string | number
  @Prop(String)
  height!: string | number
  @Prop(String)
  fillColor!: string
  @Prop(String)
  strokeColor!: string
  @Prop({type: String, default: '0 0 25 20'})
  viewBox!: string
}
</script>