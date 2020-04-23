<template lang="pug">
  div(class="user-profile__user-contacts")
    div(class="contact-column flex-column")
      contact-container(
        :text="'11 этаж, место 494'"
        :hint="'Башня Империя'"
        :textLink="true"
      )
        slot
          icon-base(class="icon-base")
            slot
              info-icon
              
      contact-container(
        :text="'11 этаж, место 494'"
      )
        slot
          icon-base(class="icon-base")
            slot
              info-icon
      contact-container(
        :text="'11 этаж, место 494'"
        :textLink="true"
      )
        slot
          icon-base(class="icon-base")
            slot
              info-icon
      contact-container(
        :text="'11 этаж, место 494'"
        :hint="'Башня Империя'"
      )
        slot
          icon-base(class="icon-base")
            slot
              info-icon                                        
    div(class="contact-column flex-column")
      contact-container(
        :text="'11 этаж, место 494'"
        :hint="'Башня Империя'"
      )
        slot
          icon-base(class="icon-base")
            slot
              info-icon
      contact-container(
        :text="'11 этаж, место 494'"
        :hint="'Башня Империя'"
      )
        slot
          icon-base(class="icon-base")
            slot
              info-icon                              
    div(class="contact-column flex-row flex-row--justify-end")
      p(
        v-if="false"
        class="text-paragraph text-paragraph--link"
      ) Добавить ссылки на <br> внешние аккаунты
      div(
        v-if="false"
        class="flex-row flex-row--justify-end"
      )
        div(class="info-social")
          icon-base(class="icon-base")
            slot
              info-icon
        div(class="info-social")
          icon-base(class="icon-base")
            slot
              info-icon
        div(class="info-social")
          icon-base(class="icon-base")
            slot
              info-icon
        div(class="info-social")
          icon-base(class="icon-base")
            slot
              info-icon
      div(
        v-if="true"
        class="flex-column"
      )
        div(class="info-social-edit")
          div(class="info-social-edit__icon")
            icon-base(class="icon-base")
              slot
                info-icon
          input(
            class="info-social-edit__input"
            type="text"
            placeholder="ссылка на профиль"
          )
        div(class="info-social-edit")
          div(class="info-social-edit__icon")
            icon-base(class="icon-base")
              slot
                info-icon
          input(
            class="info-social-edit__input"
            type="text"
            placeholder="ссылка на профиль"
          )
        div(class="info-social-edit")
          div(class="info-social-edit__icon")
            icon-base(class="icon-base")
              slot
                info-icon
          input(
            class="info-social-edit__input"
            type="text"
            placeholder="ссылка на профиль"
          )
        div(class="info-social-edit")
          div(class="info-social-edit__icon")
            icon-base(class="icon-base")
              slot
                info-icon
          input(
            class="info-social-edit__input"
            type="text"
            placeholder="ссылка на профиль"
          )
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import ContactContainer from './ui/contact-container.vue'
import IconBase from 'components/icons/icon-base.vue'
import InfoIcon from 'components/icons/icon-components/info.vue'

import {
  IUserProfilePost
} from 'types/user-profile/types'

@Component({
  components: {
    ContactContainer,
    IconBase,
    InfoIcon
  }
})
export default class PeronalInfo extends Vue {
  @Prop(Object)
  post!: IUserProfilePost
}
</script>

<style lang="scss" scoped>
  @import 'src/variables.scss';
  
  .user-profile {

    &__user-contacts {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 1.25rem;
      box-sizing: border-box;
      border-bottom: 1px solid #BDBDBD;

      .info-social {
        padding: 0 0.5rem;
      }

      .info-social-edit {
        display: flex;
        justify-content: center;
        align-items: center;        
        padding: 0.35rem;
        border: 1px solid $link-text-color;
        margin-bottom: 0.5rem;
        background: white;
        &__icon {
          margin-right: 0.25rem;
        }
        &__input {
          border: none;
          outline: none;
          padding: 0.25rem;
          background: transparent;
        }
      }
    }   
  }
</style>