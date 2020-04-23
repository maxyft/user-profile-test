<template lang="pug">
  div(class="skill-info__container")
    div(class="skill-info__type text-paragraph") {{ title }}
    div(
      v-if="!isEdit && isEmpty"
      class="skill-info__link text-paragraph text-paragraph--link"
      @click="isEdit = true"
    ) Заполнить
    div(
      v-if="!isEdit && !isEmpty"
      class="skill-info__content"
    )
      div(
        v-if="type === 'tags'"
        class="skill-info__tags"
      )
        p(
          v-for="tag in tags"
          :key="tag"
          class="text-paragraph text-paragraph--link skill-info__tag"
        ) {{ tag }}
      div(
        v-else
        class="skill-info__area"
      ) 
        textarea(
          v-if="isEdit"
          v-model.lazy="localContent"
          @change="onChangeContent"
        )
        p(class="text-paragraph") {{ localContent }}
    div(
      v-if="isEdit && type === 'tags'"
      class="skill-info__edit-tags"
    )
      multiselect(
        class="skill-info-editor__multiselect"
        v-model="localTags"
        tag-position="bottom"
        label="name"
        track-by="id"
        :options="options"
        :clear-on-select="false"
        :close-on-select="false"
        :taggable="true"
        :multiple="true"
        @input="onInput"
      )
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

import Multiselect from 'vue-multiselect'

@Component({
  components: {
    Multiselect
  }
})

export default class SkillInfoEditor extends Vue {
  @Prop(String)
  type!: string  
  @Prop(String)
  title!: any
  @Prop({ default: '' })
  content!: string
  @Prop(Array)
  tags!: {
    id: number,
    name: string
  }[]
  @Prop(Array)
  options!: {
    id: number,
    name: string
  }[]

  localTags = this.tags
  localContent: string = this.content
  isEdit: boolean = false

  get isEmpty(): boolean {
    if (this.type === 'tags') {
      return !this.localTags || !this.localTags.length
    } else {
      return !this.localContent
    }
  }

  onInput(): void {
    this.type === 'tags'
      ? this.$emit('change-tags', this.localTags)
      : this.$emit('change-text', this.localContent)
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/variables.scss';

  .skill-info {
    flex-grow: 1;

    &__container {
      margin-bottom: 1.5rem;
      width: 100%;
      padding-right: 3rem;
    }

    &__tags {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
    }

    &__tag {
      margin-right: 0.5rem;
    }

    &__area {
      width: 100%;
      textarea {
        width: 100%;
        min-height: 3rem;
      }
    }
  }
</style>