<template lang="pug">
  div(class="user-profile")

    div(class="user-profile__title")
      p(class="text-title") {{ fullName }}
      div(class="flex-row flex-row--center user-info-row")
        div(class="icon-wrapper")
          icon-base(class="icon-base icon-base--hint")
            slot
              info-icon
        p(
          v-if="isVacationPlanned"
          class="text-paragraph text-paragraph--secondary"
        ) Запланирован отпуск с 25 февраля по 9 марта

    div(class="user-profile__main-container")
      user-profile-side-bar(
        :post="userProfilePost"
        @change-avatar="changeAvatarDialog = !changeAvatarDialog"
      )
      user-profile-content(
        :post="userProfilePost"
        @change-interests="onChangeInterests"
      )
    transition(name="slideUp")
      user-profile-change-avatar(
        v-if="changeAvatarDialog"
        :post="userProfilePost"
        @change-avatar="onChangeAvatar"
        @close="changeAvatarDialog = !changeAvatarDialog"
      )
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Getter, Mutation } from 'vuex-class'
import USER_POFILE from 'modules/user-profile/user-profile.name'

import IconBase from 'components/icons/icon-base.vue'
import InfoIcon from 'components/icons/icon-components/info.vue'
import UserProfileSideBar from './user-profile.sidebar.vue'
import UserProfileContent from './user-profile.content.vue'
import UserProfileChangeAvatar from './user-profile.change-avatar.vue'

import {
  IUserInfo,
  IWorkInfo,
  IVacationInfo,
  ISkillInterest,
  IUserProfilePost
} from 'types/user-profile/types'

@Component({
  components: {
    IconBase,
    InfoIcon,
    UserProfileSideBar,
    UserProfileContent,
    UserProfileChangeAvatar
  }
})
export default class UserProfile extends Vue {
  @Getter(`${USER_POFILE}/fullName`)
  fullName!: string  
  @Getter(`${USER_POFILE}/userInfo`)
  userInfo!: IUserInfo
  @Getter(`${USER_POFILE}/workInfo`)
  workInfo!: IWorkInfo
  @Getter(`${USER_POFILE}/skills`)
  skills!: ISkillInterest[]
  @Getter(`${USER_POFILE}/interests`)
  interests!: ISkillInterest[]
  @Getter(`${USER_POFILE}/possibleSkills`)
  possibleSkills!: ISkillInterest[]  
  @Getter(`${USER_POFILE}/possibleInterests`)
  possibleInterests!: ISkillInterest[]
  @Getter(`${USER_POFILE}/vacationInfo`)
  vacationInfo!: IVacationInfo
  @Getter(`${USER_POFILE}/isVacationPlanned`)
  isVacationPlanned!: boolean

  @Mutation(`${USER_POFILE}/CHANGE_USER_INFO`)
  changeUserInfo: any
  @Mutation(`${USER_POFILE}/CHANGE_INTERESTS`)
  changeInterests: any  

  changeAvatarDialog: boolean = false

  get userProfilePost(): IUserProfilePost {
    return {
      userInfo: this.userInfo,
      workInfo: this.workInfo,
      skills: this.skills,
      interests: this.interests,
      vacationInfo: this.vacationInfo,
      possibleSkills: this.possibleSkills,
      possibleInterests: this.possibleInterests
    }
  }

  onChangeAvatar(src: string) {
    this.changeUserInfo({
      ...this.userInfo,
      photoSrc: src 
    })
  }

  onChangeInterests(newInterests: {
    id: number,
    name: string
  }): void {
    this.changeInterests(newInterests)
  }
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
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: $base-padding;
    &__title {
      text-align: center;
    }

    &__main-container {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
</style>