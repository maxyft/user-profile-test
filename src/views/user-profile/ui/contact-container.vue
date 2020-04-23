<template lang="pug">
  div(class="contact-container")
    div(class="contact-container__icon" slot="icon")
      slot
    div(class="contact-container__info")
      div(
        class="text-paragraph" 
        :class="{ 'text-paragraph--link': textLink }"
      ) {{ text }}
      div(
        v-if="hint"
        class="text-paragraph text-paragraph--hint"
      ) {{ hint }}  
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class ContactContainer extends Vue {
  @Prop(String)
  text!: string
  @Prop(String)
  hint!: string
  @Prop(Boolean)
  textLink!: boolean
}
</script>

<style lang="scss" scoped>

  @mixin flex-column-start {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .contact-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 40px;
    padding-bottom: 0.5rem;
    &__icon {
      min-width: 1.2rem;
      width: 1.2rem;
      margin-right: 0.3rem;
    }
    &__info {
      @include flex-column-start;
      flex-grow: 1;
    }
  }
</style>