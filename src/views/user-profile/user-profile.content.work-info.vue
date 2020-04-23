<template lang="pug">
  div(class="user-profile__info-card secondary-card")
    div(class="user-profile__main-info")
      div(class="flex-row user-info-row")
        div(class="icon-wrapper")
          icon-base(class="icon-base" :viewBox="'0 0 15 25'")
            slot
              note-icon
        p(class="text-paragraph") Коротенькая должность в &nbsp;
          span(class="text-paragraph text-paragraph--link") Dentsu Aegis CS
      div(class="flex-row user-info-row user-info-row--less-margin")
        div(class="icon-wrapper")
          icon-base(class="icon-base")
            slot
              connection-icon
        p(class="text-paragraph text-paragraph--link") Отдел АХО
      div(class="flex-row user-info-row user-info-row--without-icon")
        p(class="text-paragraph") Руководитель &nbsp;
        p(class="text-paragraph text-paragraph--link") Евгений Демур
    div(class="user-profile__additional-info")
      div(class="flex-row flex-row--justify-end")
        p(class="text-paragraph text-paragraph--secondary") Работает в Dentsu &nbsp;
        p(class="text-paragraph") 2 дня, с 27.05.19
    icon-base(class="user-profile__person-icon icon-base icon-base--large" :width="'56'" :height="'56'" :viewBox="'0 0 56 56'")
        slot
          person-icon   
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import IconBase from 'components/icons/icon-base.vue'
import NoteIcon from 'components/icons/icon-components/note.vue'
import ConnectionIcon from 'components/icons/icon-components/connection.vue'
import PersonIcon from 'components/icons/icon-components/person.vue'

import {
  IUserProfilePost
} from 'types/user-profile/types'

@Component({
  components: {
    IconBase,
    NoteIcon,
    ConnectionIcon,
    PersonIcon 
  }
})
export default class WorkInfo extends Vue {
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

    &__info-card {
      box-sizing: border-box;
      width: 100%;
      min-height: 184px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 1.25rem;
      position: relative;
    }

    &__main-info {
      min-width: 69.96904024767802%;;
      width: 69.96904024767802%;
      height: 100%;
      padding: $base-padding / 2;
    }

    &__additional-info {
      flex-grow: 1;
      height: 100%;
      padding: $base-padding / 2;
      padding-right: 0;
      position: relative;
    }

    &__person-icon {
      fill: #FAFAFA;
      position: absolute;
      bottom: 15px;
      right: 15px;
    }    
  }
</style>