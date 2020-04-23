<template lang="pug">
  div(class="user-profile__side-bar")
    div(class="user-profile__avatar")
      img(class="avatar-img" :src="post.userInfo.photoSrc")
        
      div(class="avatar-edit")
        div(class="avatar-edit__edit-btn" @click="$emit('change-avatar')")
          icon-base(class="icon-base avatar-edit__edit-icon")
            slot
              info-icon
    div(class="user-profile__vacation-info")
      div(class="flex-row")
        div(class="icon-wrapper")
          icon-base(class="icon-base")
            slot
              info-icon  
        p(class="text-paragraph") 20 февраля
      br
      div(class="flex-row")
        div(class="icon-wrapper")
          icon-base(class="icon-base")
            slot
              info-icon  
        p(class="text-paragraph") 24 дня отпуска          
    div(class="user-profile__btn") Моё развитие  
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import IconBase from 'components/icons/icon-base.vue'
import InfoIcon from 'components/icons/icon-components/info.vue'

import {
  IUserProfilePost
} from 'types/user-profile/types'

@Component({
  components: {
    IconBase,
    InfoIcon
  }
})
export default class UserProfileSideBar extends Vue {
  @Prop(Object)
  post!: IUserProfilePost
}
</script>

<style lang="scss" scoped>
  @import 'src/variables.scss';

  .user-profile {
    &__side-bar {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 14.375%;
      min-width: 14.375%;
      padding-right: $base-padding / 2;
      height: 100%;
    }

    &__avatar {
      width: 100%;
      min-height: 184px;
      height: 184px;
      background: $secondary-background;
      margin-bottom: 1.25rem;
      position: relative;
      &:hover {
        .avatar-edit {
          opacity: 1;
        }
      }
      .avatar-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .avatar-edit {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0, 0.25);
        opacity: 0;
        transition: 0.3s opacity;
        &__edit-btn {
          cursor: pointer;
          width: 30px;
          height: 30px;
          position: absolute;
          background: $link-text-color;
          bottom: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        &__edit-icon {
          fill: white
        }
      }
    }

    &__vacation-info {
      padding: 1rem;
      background: $secondary-background;
      margin-bottom: 1.25rem;
      width: 100%;
      box-sizing: border-box;
    }

    &__btn {
      cursor: pointer;
      background: $link-text-color;
      color: white;
      padding: 0.45rem 1rem;
      width: 100%;
      text-align: center;
      box-sizing: border-box;
    }
  }
</style>