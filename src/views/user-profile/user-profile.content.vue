<template lang="pug">
  div(class="user-profile__content")
    work-info( :post="post" )
    personal-info( :post="post") 
    skill-info(
      :post="post"
      @change-interests="(newTags) => $emit('change-interests', newTags)"
    )
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import WorkInfo from './user-profile.content.work-info.vue'
import PersonalInfo from './user-profile.content.personal-info.vue'
import SkillInfo from './user-profile.content.skill-info.vue'

import {
  IUserProfilePost
} from 'types/user-profile/types'

@Component({
  components: {
    WorkInfo,
    PersonalInfo,
    SkillInfo
  }
})
export default class UserProfileContent extends Vue {
  @Prop(Object)
  post!: IUserProfilePost
}
</script>

<style lang="scss" scoped>
  @import 'src/variables.scss';

  @mixin flex-column-start {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .user-profile {
    &__content {
      @include flex-column-start;
      flex-grow: 1;
      padding-left: $base-padding / 2;
      height: 100%;
    }
  }
</style>