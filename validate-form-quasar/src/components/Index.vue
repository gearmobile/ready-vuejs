<template lang="pug">
  q-layout.primo
    .toolbar.primary( slot="header" )
      q-toolbar-title( :padding="0" ) Tweet Composer
    .layout-view
      .layout-padding
        q-modal( ref="tweetModal", :content-css="{ minWidth: '80vw' }" )
          .card.primo__card
            .card-title.bg-secondary.text-white.text-center New Tweet Message
            .card-content
              .row.gutter
                .auto
                  .floating-label
                    textarea.full-width.primo__textarea( required, v-model="characters" )
                    label.primo__label enter your message here ...
              // trigger upload section
              .row.gutter.hidden
                .auto
                  input( type="file", ref="uploadRef", @change="onUpload", multiple )
              // control section
              .row.gutter.justify-between.content-center.primo__control
                .width-1of3.primo__primary
                  i.primo__icon( @click="onTriggerUpload" ) photo_camera
                .width-1of3.primo__secondary
                  span.on-left( :class="{ 'text-warning': isWarning, 'text-negative': isDanger }" ) {{ remainCharacters }}
                  button.primary.big( @click="onClick", :disabled="isDisabled" )
                    i.on-left message
                    | Tweet
              // output section
              .row.gutter( v-if="isUploaded" )
                .auto
                  p.caption Uploaded Images
                  figure.primo__figure( v-for="(photo, index) in photos" )
                    i.primo__remove( @click="onRemove(index)" ) delete
                    img.responsive( :src="photo", alt="Image Gallery" )
        button.primary.full-width( @click="$refs.tweetModal.open()" ) open window
</template>

<script>
  const MAX_CHARACTERS = 140
  const upLevel = 20
  const bottomLevel = 10
  export default {
    data () {
      return {
        characters: '',
        photos: []
      }
    },
    methods: {
      onClick () {
        //
      },
      onTriggerUpload () {
        this.$refs.uploadRef.click()
      },
      onUpload (event) {
        const self = this
        const images = event.target.files
        for (let i = 0; i < images.length; i += 1) {
          const reader = new FileReader()
          reader.onloadend = (event) => {
            self.photos.push(event.target.result)
          }
          reader.readAsDataURL(images[i])
        }
      },
      onRemove (index) {
        this.photos.splice(index, 1)
      }
    },
    computed: {
      remainCharacters () {
        return MAX_CHARACTERS - this.characters.length
      },
      isWarning () {
        return this.remainCharacters <= upLevel && this.remainCharacters > bottomLevel
      },
      isDanger () {
        return this.remainCharacters <= bottomLevel
      },
      isDisabled () {
        return this.remainCharacters <= 0 || this.remainCharacters >= MAX_CHARACTERS
      },
      isUploaded () {
        return this.photos.length > 0
      }
    }
  }
</script>

<style lang="scss">
  .primo {

    &__card {
      margin-bottom: 0;
    }

    &__figure {
      position: relative;
    }

    &__remove {
      position: absolute;
      top: .3rem;
      left: .3rem;
      font-size: 2rem;
      cursor: pointer;
      color: salmon;

      &:hover {
        color: firebrick
      }
    }

    &__control {
      margin-bottom: 0 !important;
    }

    &__textarea {
      min-height: 10rem;
    }

    &__label {
      text-transform: capitalize;
    }

    &__secondary {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    &__icon {
      font-size: 2.4rem;
      cursor: pointer;
      color: teal;

      &:hover {
        color: orangered
      }
    }
  }
</style>
