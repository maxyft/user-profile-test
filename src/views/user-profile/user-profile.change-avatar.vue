<template lang="pug">
  div(class="change-avatar-dialog")
    input(
      class="change-avatar-dialog__hidden-input" 
      type="file" 
      id="upload"
      @change="initFileUpload"
    )
    div(class="change-avatar-dialog__title-container")
      p Редактирование фото
      div(class="change-avatar-dialog__close" @click="$emit('close')")
        icon-base(class="icon-base change-avatar-dialog__icon")
          slot
            icon-info
    div(class="change-avatar-dialog__content-container")
      div(class="change-avatar-dialog__upload-new")
        icon-base(class="icon-base change-avatar-dialog__icon")
          slot
            icon-info
        label(for="upload" class="text-paragraph text-paragraph--link") Загрузить новое фото
      div(class="change-avatar-dialog__img-wrapper")
        img(:src="imageSrc" ref="image")
      div(class="change-avatar-dialog__preview-img" ref="preview")
    div(class="change-avatar-dialog__footer-container")
      div(class="change-avatar-dialog__btn-group")
        div(class="change-avatar-dialog__btn base-btn" @click="savePhoto") Сохранить
        div(class="change-avatar-dialog__btn base-btn base-btn--transparent" @click="$emit('close')") Закрыть
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import IconBase from 'components/icons/icon-base.vue'
import IconInfo from 'components/icons/icon-components/info.vue'

import 'cropperjs/dist/cropper.css';
import Cropper from 'cropperjs'

import {
  IUserProfilePost
} from 'types/user-profile/types'

@Component({
  components: {
    IconBase,
    IconInfo
  }
})
export default class UserProfileChangeAvatar extends Vue {
  @Prop(Object)
  post!: IUserProfilePost

  imageSrc: string = this.post.userInfo.photoSrc
  cropper: any = null

  async initFileUpload(event: Event): Promise<any> {
    if (this.cropper) {
      this.cropper.destroy()
    }
    const target: HTMLInputElement = event.target as HTMLInputElement
    const file = target.files && target.files[0]
    this.imageSrc = window.URL.createObjectURL(file)

    await this.$nextTick()

    const image = this.$refs.image as HTMLImageElement
    const preview = this.$refs.preview  as HTMLElement
    this.cropper = new Cropper(image,  {
      aspectRatio: 4 / 5,
      preview,
      minCropBoxHeight: 50,
      minContainerWidth: 50,
      modal: false,
      viewMode: 1
    })
  }

  savePhoto(): void {
    const cropper: Cropper = this.cropper
    if (!cropper) {
      return 
    }

    const src = cropper.getCroppedCanvas().toDataURL()
    this.imageSrc = src

    cropper.destroy()
    this.cropper = null
    this.$emit('change-avatar', src)
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/variables.scss';

  .change-avatar-dialog {
    position: fixed;
    width: 100%;
    height: 40%;
    bottom: 0;
    left: 0;
    background: white;
    padding: 1.25rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    &__hidden-input {
      opacity: 0;
      position: absolute;
      z-index: -1;
      top: -100%;
      left: -100%;
    }
    
    &__title-container {
      flex-shrink: 1;
      position: relative;
      width: 100%;
      font-size: 1.5rem;
      text-align: center;
    }

    &__close {
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
    }

    &__icon {
      fill: $link-text-color;
      width: 2rem;
    }

    &__content-container {
      width: 100%;
      flex-grow: 1;
      padding: 1.5rem;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__upload-new {
      height: 100%;
      box-sizing: border-box;
      box-shadow: 0 1px 4px rgba(0,0,0, 0.35);
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      fill: $link-text-color;
      min-width: 150px;
      margin: 0 0.5rem;
    }

    &__img-wrapper {
      height: 150px;
      min-width: 150px;
      width: 150px;
      margin: 0 0.5rem;
      img {
        display: block;
        height: inherit;
        width: inherit;
        max-width: 100%;
      }
    }

    &__preview-img {
      height: 75px;
      max-height: 75px;
      width: 75px;
      max-width: 75px;
      overflow: hidden;
      align-self: flex-start;
    }
    
    &__footer-container {
      width: 100%;
      flex-shrink: 1;
    }
    
    &__btn-group {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__btn {
      margin: 0 0.5rem;
    }
  }
</style>