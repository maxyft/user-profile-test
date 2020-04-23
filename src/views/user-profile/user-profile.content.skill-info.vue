<template lang="pug">
  div(class="user-profile__skill-info")
    div(class="interests-info flex-row")

      skill-info-editor(
        :type="'tags'"
        :title="'Интересы'"
        :tags="post.interests"
        :options="post.possibleInterests"
        @change-tags="(newTags) => $emit('change-interests', newTags)"
      )

      skill-info-editor(
        :type="'tags'"
        :title="'Профессиональные навыки'"
        :tags="['Пиво', 'Компьютерное пиво', 'Пивные навыки']"
      )

    div(class="skill-info flex-row")

      skill-info-editor(
        :type="'area'"
        :title="'О себе'"
        :content="'Text area content, Text area content, Text area content'"
      )
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import SkillInfoEditor from './ui/skill-info-editor.vue'

import {
  IUserProfilePost
} from 'types/user-profile/types'

@Component({
  components: {
    SkillInfoEditor
  }
})
export default class SkillInfo extends Vue {
  @Prop(Object)
  post!: IUserProfilePost
}
</script>

<style lang="scss" scoped>
  .user-profile {
    &__skill-info {
      width: 100%;
      box-sizing: border-box;
      padding: 1.25rem;
    }

    .interests-info {
      width: 100%;
    }
  }
</style>